import React, { Component } from 'react'

export default class App extends Component {

  render() {
    let isboy=true
    let f=function(msg){
       return '------'+msg+'--------'
    }
    let obj={
      price:100,
      size:'small'
    }
    return (
      <div>
        {
          isboy?'男':'女'
         }
         {
           f('调用函数')
          
         }
         {
           obj.price
         }
         -----
         {
           obj.size
         }
      </div>
    )
  }
}







// //引入依赖
// import React,{Component} from "react"
// //引入css文件
// import "./App.css"


// export default class App extends Component {
//   render() {
//     let title=['Pull requests','lssues','Marketplace','Explore']
//     return (
//       <div class="test">
//         <ul>
//           {
//             title.map((v,i) => <li key={i}>{v}</li>)
//           }

//         </ul>
//       </div>
//     )
//   }
// }



