<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ block }}</p>
  </div>
</template>

<script>

import common from '@/common'

export default {
  name: 'ablout',
  data () {
    return {
      blocknum: this.$route.params.blocknum,
      block: {}
    }
  },
  created () {
    const web3 = common.web3
    web3.eth.getBlock(this.blocknum)
      .then((result) => {
        console.log(result)
        this.block = result
      })
  }

}
</script>
