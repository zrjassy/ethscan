<template>
  <div class="home" style="padding-top: 50px;">
    <h4 style="text-align:center; margin-top: 30px;">
      Latest Block: <router-link v-bind:to="'/about/' + blockNumber">{{ blockNumber }}</router-link>
    </h4>
    <table class="pure-table" style="margin: auto" width='60%'>
      <tbody>
      <tr>
        <th>Block #</th>
        <th>Tx #</th>
        <th>Size</th>
        <th>Timestamp</th>
      </tr>
      <tr v-for="i in blocks" :key="i">
        <td>
          <router-link v-bind:to="'/about/' + i.number">{{ i.number }}</router-link></td>
        <td>{{ i.transactions.length }}</td>
        <td>{{ i.size }}</td>
        <td>{{ i.timestamp }}</td>
      </tr>
      </tbody>
    </table>
    <router-view/>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// 局部注册组件
// import HelloWorld from '@/components/HelloWorld.vue'
import common from '@/common'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      blocks: [],
      maxBlocks: 0,
      blockNumber: 0
    }
  },
  created () {
    const web3 = common.web3
    this.maxBlocks = 50
    web3.eth.getBlockNumber()
      .then((result) => {
        // console.log(result)
        this.blockNumber = result
        if (this.maxBlocks > result) {
          this.maxBlocks = result + 1
        }
        for (let i = 0; i < this.maxBlocks; i++) {
          // console.log(this.blockNumber)
          web3.eth.getBlock(this.blockNumber - i)
            .then((result) => {
              console.log(result)
              this.blocks.push(result)
            })
        }
      })
  }
}
</script>

<style type="text/css">
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,th {
  padding: 0;
}

.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}

.pure-table caption {
  color: #000;
  font: italic 85%/1 arial,sans-serif;
  padding: 1em 0;
  text-align: center;
}

.pure-table td,.pure-table th {
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: .5em 1em;
}

.pure-table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}

.pure-table td {
  background-color: transparent;
}
</style>
