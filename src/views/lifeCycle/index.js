import React from 'react'

/**
 * 组件的生命周期三个阶段
 *
 * 创建时、更新时、卸载时
 */

class LifeCycle extends React.Component {
	// 事件处理程序
	handleClick = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}

	// 创建组件时：初始化state，为事件处理程序绑定this
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
		console.warn('生命周期钩子函数: constructor')
	}

	// 是否更新组件：先执行shouldComponentUpdate()，再执行render()
	shouldComponentUpdate(nextProps, nextState) {
		// 更新前的状态
		console.log('this.state', this.state)
		// 最新的状态
		console.log('最新的state', nextState)
		// 返回false的话，阻止组件重新渲染
		return true
	}

	// 渲染UI：注意，render中不能使用setState
	render() {
		console.warn('生命周期钩子函数: render')
		return (
			<div>
				组件生命周期
				<div>
					{this.state.count > 3 ? (
						<h1>到顶了~</h1>
					) : (
						<Counter count={this.state.count} />
					)}
				</div>
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}

	// 组件挂载后：进行DOM操作，发送ajax请求
	componentDidMount() {
		console.warn('生命周期钩子函数: componentDidMount')
	}
}

// 子组件
class Counter extends React.Component {
	// 渲染UI
	render() {
		console.warn('生命周期钩子函数--子组件: render')
		return <h2>统计次数: {this.props.count}</h2>
	}

	// 组件更新：注意，如果要setState必须放在一个if条件中，否则会触发父组件更新导致进入死循环
	componentDidUpdate(prevProps) {
		if (prevProps.count !== this.props.count) {
			this.setState({})
		}
		console.warn('生命周期钩子函数--子组件: componentDidUpdate')
	}

	// 组件卸载：清除定时器等
	componentWillUnmount() {
		console.warn('生命周期钩子函数--子组件: componentWillUnmount')
	}
}

export default LifeCycle
