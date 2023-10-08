// 1、导入React
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import './styles/index.css' // 引入全局样式

// 安装：yarn add react-router-dom  导入路由核心
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { routers } from '../src/router/index'

// 使用Router组件包裹整个应用
// 使用Link组件作为导航菜单，路由人口
// 使用Route组件配置路由规则和要展示的组件，路由出口，exact属性表示精确匹配
const App = () => (
	<Router>
		<div>
			<h1>React路由基础</h1>
			<div style={{ textAlign: 'center', marginBottom: '22px' }}>
				{routers.map((item, index) => {
					return (
						<Link key={index} to={item.path} style={{ marginRight: '16px' }}>
							{item.name}
						</Link>
					)
				})}
			</div>
			<Routes>
				{routers.map((item, index) => {
					return (
						<Route
							exact
							key={index}
							path={item.path}
							element={<item.component />}></Route>
					)
				})}
			</Routes>
		</div>
	</Router>
)

// 2、创建React元素
const root = ReactDOM.createRoot(document.getElementById('root'))

// 3、渲染React元素
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
