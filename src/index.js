// 1、导入React
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import './static/index.css' // 引入全局样式

// import JsxUsage from './views/jsx/index';
// import PostComments from './views/demo/index'
import Css3dModel from './views/css-3d-model/index'

// 2、创建React元素
const root = ReactDOM.createRoot(document.getElementById('root'))

// 3、渲染React元素
root.render(
	<React.StrictMode>
		{/* <JsxUsage /> */}
		<Css3dModel />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
