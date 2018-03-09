/*
* @Author: Administrator
* @Date:   2018-03-06 17:26:44
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-07 10:41:32
*/
// 自适应布局
// export function autoFix() {
//   let dpr = window.devicePixelRatio || 1;
//   let docEl = document.documentElement;
//   // 设置data-drp属性
//   docEl.setAttribute('data-dpr', dpr);
//   // 缩放比例
//   let scale = 1 / dpr;
//   // 设置meta 压缩界面 模拟设备的高分辨率
//   document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
//   // 设置html中font-size大小
//   docEl.style.fontSize = docEl.clientWidth / 10 + 'px';

// }
// export function autoFix() {
//   let htmlDom = document.getElementsByTagName('html')[0]
//   let width = document.documentElement.clientWidth
//   htmlDom.style.fontSize = width / 7.5+ 'px'

//   console.log(window.devicePixelRatio)
// }

// window.onresize = function() {
//   autoFix()
// }
