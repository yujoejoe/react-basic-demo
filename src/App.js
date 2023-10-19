/**
 * 根组件
 * 路由配置信息
 */

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

export default App
