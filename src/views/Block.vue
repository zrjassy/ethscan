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
        <el-table-column @click="goPage('block')" prop="number" label="块高" align="center" :class-name="'table-link'" :show-overflow-tooltip="true">
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
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/layout.css'
import '@/assets/css/public.css'
import common from '@/common'
import { getBlockByNumber, getBlockByHash } from '@/api/api'
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
  created: function () {
    console.log('test')
  },
  mounted: function () {
    this.searchTbBlockInfo()
  },
  methods: {
    search: function () {
      const reg = /^[0-9]+.?[0-9]*$/
      if (this.input.length > 60) {
        this.hashData = this.input
        this.blockNumber = ''
        this.searchBlock(this.hashData, 2)
      } else if (reg.test(this.input) && this.input.substring(0, 2) !== '0x') {
        this.hashData = ''
        this.blockNumber = this.input
        this.searchBlock(this.blockNumber, 1)
      } else if (this.input === '') {
        alert('请输入块高或完整的哈希')
        this.$router.go(0)
      }
      this.input = ''
      console.log(this.blockList)
    },
    searchBlock: function (data, type) {
      if (type === 2) {
        getBlockByHash(this.input)
          .then((res) => {
            this.pagination.total = 1
            console.log(res.data.result)
            this.blockList = []
            this.blockList.push(res.data.result)
            this.blockList[0].number = parseInt(this.blockList[0].number)
            this.timeTransport(this.blockList[0])
          })
      } else if (type === 1) {
        getBlockByNumber(parseInt(this.input).toString(16))
          .then((res) => {
            this.pagination.total = 1
            console.log(res.data.result)
            this.blockList = []
            this.blockList.push(res.data.result)
            this.blockList[0].number = parseInt(this.blockList[0].number)
            this.timeTransport(this.blockList[0])
          })
      }
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
          this.pagination.total = result
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
