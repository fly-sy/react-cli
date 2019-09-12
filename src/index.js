// 1. 引入 react
import React from 'react'
// 2. 引入虚拟DOM继续包
import ReactDOM from 'react-dom'


ReactDOM.render(
  <div>react-cli</div>,     // 类似于vue的 template: '<div>vue</div>'
  // div,
  document.querySelector('#root')   // 类似于vue 的 el: '#app'
)

