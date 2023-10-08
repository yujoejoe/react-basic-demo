import React from 'react'
import './index.css'

import WidthUseNavigate from '../../utils/widthUseNavigate'

class LoginComp extends React.Component {
	// 数据
	state = {
		username: '',
		password: '',
	}
	// 表单-受控组件
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	// 点击登录
	handleLogin = () => {
		if (this.state.username && this.state.password) {
			this.props.to('/home') // 调用高阶组件传来的to方法跳转
		} else {
			alert('请输入用户名和密码')
		}
	}
	// 渲染dom
	render() {
		return (
			<div className="login-wrap">
				<div className="login-content">
					<h1>用户登录</h1>
					<input
						type="text"
						placeholder="请输入用户名"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}></input>
					<input
						type="text"
						placeholder="请输入密码"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}></input>
					<button onClick={this.handleLogin}>登 录</button>
				</div>
			</div>
		)
	}
}

// 使用高阶组件包裹当前类组件
const Login = WidthUseNavigate(LoginComp)

// 导出包裹后的类组件
export default Login
