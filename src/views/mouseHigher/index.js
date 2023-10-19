import React from 'react'

/**
 * 高阶组件
 */

// 获取组件名
// function getDisplayName(WrappedComponent) {
// 	return WrappedComponent.displayName || WrappedComponent.name || 'Component'
// }

// 创建高阶组件
function withMouse(WrappedComponent) {
	// 该组件提供复用的状态逻辑
	class Mouse extends React.Component {
		// 初始化state
		state = {
			x: 0,
			y: 0,
		}

		// 渲染UI，可以将state和props 一起传递给组件
		render() {
			return (
				<WrappedComponent {...this.state} {...this.props}></WrappedComponent>
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

	// 设置displayName  这个为了调试区分用，可以不设置
	// Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

	// 返回公用类
	return Mouse
}

// 位置组件，用来测试高阶组件
const Position = props => (
	<div>
		<h2>
			鼠标位置: {props.x}, {props.y}
		</h2>
		MousePosition组件: 接收的参数 a == {props.a}
	</div>
)

// 猫抓老鼠组件，用来测试高阶组件
const Cat = props => (
	<div>
		<img
			src={require('../../assets/images/cat.png')}
			alt="猫"
			height="22px"
			style={{
				position: 'absolute',
				top: props.y - 10,
				left: props.x - 10,
			}}
		/>
		MouseCat组件: 接收的参数 a == {props.a}
	</div>
)

// 获取增强后的组件
const MousePosition = withMouse(Position)
const MouseCat = withMouse(Cat)

// 使用
class MouseHigher extends React.Component {
	// 渲染增强后的组件
	render() {
		return (
			<div>
				<MousePosition a="111"></MousePosition>
				<MouseCat a="222"></MouseCat>
			</div>
		)
	}
}

export default MouseHigher
