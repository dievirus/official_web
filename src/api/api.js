/*
* @Author: Administrator
* @Date:   2018-03-09 14:03:11
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-09 15:15:46
*/
import axios from 'axios'

const baseUrl = 'http://47.96.151.153:9300/main'

export function test() {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url:'/apis'
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      console.log(err)
    })
    // axios.get('/apis', {
    //   params: {

    //   }
    // }).then((res) => {
    //   resolve(res)
    // }).catch((err) => {
    //   console.log(err)
    // })
  })
}

export function query(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      // url: baseUrl+'/query',
      url: '/apis',
      data:params,
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      console.log(err)
    })
  })
}