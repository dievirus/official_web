/*
* @Author: Administrator
* @Date:   2018-03-09 14:03:11
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-09 15:15:46
*/
import axios from 'axios'

export function test() {
  return new Promise((resolve, reject) => {
    // axios({
    //   method: 'get',
    //   url:'/apis'
    // }).then((res) => {
    //   resolve(res)
    // }).catch((err) => {
    //   console.log(err)
    // })
    axios.get('/apis', {
      params: {

      }
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      console.log(err)
    })
  })
}
