console.log(process.env)

const baseJson = {
  jsonrpc: '2.0',
  method: '',
  params: [],
  id: 2
}

export function reviseParam (data = [], type) {
  baseJson.params = data
  switch (type) {
    case 0:
      baseJson.method = 'eth_getTransactionsCount'
      break
    case 1:
      baseJson.method = 'eth_getBlockByNumber'
      break
    case 2:
      baseJson.method = 'eth_getBlockByHash'
      break
    default:
      return baseJson
  }
  return baseJson
}
