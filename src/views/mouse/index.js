import React from 'react'

class Mouse extends React.Component {
	// 初始化state
	state = {
		x: 0,
		y: 0,
	}

	// 渲染UI
	render() {
		return (
			<div>
				<h1>
					鼠标位置: {this.state.x}, {this.state.y}
				</h1>
				<img
					src={require('../../static/images/cat.png')}
					alt="猫"
					style={{
						position: 'absolute',
						top: this.state.y - 62,
						left: this.state.x - 62,
					}}
				/>
			</div>
		)
	}

	// 组件挂载，监听鼠标移动
	componentDidMount() {
		window.addEventListener('mousemove', this.handleMouseMove)
	}

	// 组件卸载，移除监听
	componentWillUnmount() {
		window.removeEventListener('mousemove', this.handleMouseMove)
	}

	// 鼠标移动事件处理程序
	handleMouseMove = e => {
		this.setState({
			x: e.clientX,
			y: e.clientY,
		})
	}
}

export default Mouse
