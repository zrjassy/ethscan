<template>
  <div class="block">
<!--    <p>{{ block }}</p>-->
    <div class="search-nav">
      <div class="hashInput">
        <el-input placeholder="请输入区块哈希或块高" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search" :disabled="submitDisabled"></el-button>
        </el-input>
      </div>
    </div>
    <div class="search-table">
      <el-table :data="blockList">
        <el-table-column prop="number" label="块高" align="center" :class-name="'table-link'" :show-overflow-tooltip="true">
<!--          <template slot-scope="scope">-->
<!--            <span>{{scope.row.number}}</span>-->
<!--          </template>-->
        </el-table-column>
        <el-table-column prop="timestamp" label="生成时间" min-width="120px" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="transactions.length" label="交易数量" align="center" :class-name="'table-link'" :show-overflow-tooltip="true">
<!--          <template slot-scope="scope">-->
<!--            <span @click="linkPage('transaction','blockHeight',scope.row.number)">{{scope.row.txn}}</span>-->
<!--          </template>-->
        </el-table-column>
        <el-table-column prop="miner" label="出块者" min-width="100px" :show-overflow-tooltip="true" align="center"></el-table-column>
        <el-table-column prop="hash" label="哈希" min-width="350px" :show-overflow-tooltip="true" align="center" :class-name="'table-link'">
<!--          <template slot-scope="scope">-->
<!--            <span @click="linkPage('blockDetail','blockHash',scope.row.blockHash)">{{scope.row.blockHash}}</span>-->
<!--          </template>-->
        </el-table-column>
      </el-table>
      <div class="search-pagation">
        <div style="line-height: 40px;">
          <span>查询结果 : </span>
          <span>共计{{pagination.total}}条数据</span>
        </div>
        <el-pagination style="display: inline-block"
                       layout="sizes,prev, pager, next"
                       :total="pagination.total"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page.sync="pagination.currentPage"
                       :page-sizes="[10, 20, 30, 50]"
                       :page-size="pagination.pageSize">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/layout.css'
import '@/assets/css/public.css'
import common from '@/common'
import { getBlockByNumber } from '@/api/api'
import router from '@/router'

export default {
  name: 'block',
  data () {
    return {
      input: '',
      hashData: this.$route.query.blockData || '',
      blockNumber: null,
      pagination: {
        currentPage: this.$route.query.pageNumber || 1,
        pageSize: this.$route.query.pageSize || 10,
        total: 0
      },
      web3: common.web3,
      maxBlocks: 50,
      totalBlockNumber: 0,
      blockList: [],
      transactions: [],
      submitDisabled: false
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.searchTbBlockInfo()
    })
  },
  methods: {
    search: function () {
      const reg = /^[0-9]+.?[0-9]*$/
      if (this.input.length > 60) {
        this.hashData = this.input
        this.blockNumber = ''
      } else if (reg.test(this.input) && this.input.substring(0, 2) !== '0x') {
        this.hashData = ''
        this.blockNumber = this.input
      } else if (this.input) {
        alert('请输入块高或完整的哈希')
      }
      this.searchzrBlockInfo()
      this.input = ''
      router.push({
        // name: "block",
        query: {
          pageSize: this.pagination.pageSize,
          pageNumber: this.pagination.currentPage,
          blockNumber: this.blockNumber,
          blockHash: this.hashData
        }
      })
    },
    searchzrBlockInfo: function () {
      this.submitDisabled = true
    },
    timeTransport: function (block) {
      const time = parseInt(block.timestamp, 10)
      const timeA = new Date(time)
      const format = function (time, format) {
        const t = new Date(time)
        var tf = function (i) {
          return (i < 10 ? '0' : '') + i
        }
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
          switch (a) {
            case 'yyyy':
              return tf(t.getFullYear())
            case 'MM':
              return tf(t.getMonth() + 1)
            case 'mm':
              return tf(t.getMinutes())
            case 'dd':
              return tf(t.getDate())
            case 'HH':
              return tf(t.getHours())
            case 'ss':
              return tf(t.getSeconds())
          }
        })
      }
      block.timestamp = format(timeA, 'yyyy-MM-dd HH:ss')
    },
    searchBlocksInfo: function () {
      const promiseArray = []
      for (let i = 0; i < this.maxBlocks; i++) {
        // promiseArray.push(this.web3.eth.getBlock('0x' + this.blockNumber - i, true))
        promiseArray.push(getBlockByNumber((this.totalBlockNumber - i).toString(16)))
      }
      Promise.all(promiseArray).then((res) => {
        for (let i = 0; i < this.maxBlocks; i++) {
          this.blockList.push(res[i].data.result)
          this.blockList[i].number = parseInt(this.blockList[i].number)
          this.timeTransport(this.blockList[i])
        }
      })
    },
    searchTbBlockInfo: function () {
      this.web3.eth.getBlockNumber()
        .then((result) => {
          // console.log(result)
          this.totalBlockNumber = result
          if (this.maxBlocks > result) {
            this.maxBlocks = result + 1
          }
          this.searchBlocksInfo()
        })
    },
    goPage: function (name, label, data) {
      const path = {}
      path.name = name || ''
      path.query = {}
      if (label) {
        path.query[label] = data
      }
      router.push(path)
    }
  }

}
</script>
