import { post } from './http'
import { reviseParam } from './url'

export function getTransactionsCount (data) {
  // const d = ['0x0', true]
  const data2 = reviseParam(data, 0)
  return post({
    method: 'post',
    data: data2
  })
}

export function getBlockByNumber (number, bean = true) {
  // const d = ['0x0', true]
  number = '0x' + number
  const data = [number, bean]
  const data2 = reviseParam(data, 1)
  return post({
    method: 'post',
    data: data2
  })
}
