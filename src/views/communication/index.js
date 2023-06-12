import React from 'react'
import './index.css'

import PropTypes from 'prop-types'

/**
 * 组件间的通信demo
 */

// 创建context得到提供和消费两个组件，方便无关组件之间的通信
// Provider设置value属性，表示要传递的数据
// Consumer接收数据
const { Provider, Consumer } = React.createContext()

class Communication extends React.Component {
	render() {
		return (
			<Provider value="red">
				<div className="first">
					我是first
					<Node name="张" age={16} />
				</div>
			</Provider>
		)
	}
}

const Node = props => {
	return (
		<div className="second">
			<div>我是second-Node</div>
			<div>
				父组件first接收来的数据: {props.name}-{props.age}
			</div>
			<SubNode
				getMsg={msg => {
					console.log('second-Node接收到子组件third-SubNode数据:', msg)
				}}
			/>
		</div>
	)
}

// Node组件 添加props校验
Node.propTypes = {
	name: PropTypes.string.isRequired, // string类型，必填
	age: PropTypes.number, // number类型
}

// Node组件 添加props默认值
Node.defaultProps = {
	age: 18,
}

const SubNode = props => {
	return (
		<div className="third">
			<div>我是third-SubNode</div>
			<button
				onClick={() => {
					props.getMsg('三儿')
				}}>
				点我给父组件second-Node传值
			</button>
			<Child>我是子节点</Child>
		</div>
	)
}

const Child = props => {
	return (
		<div className="fourth">
			<div>我是fourth-Child</div>
			<Consumer>{data => <span>我是first接收来的数据: {data}</span>}</Consumer>
			<div>组件标签的子节点：{props.children}</div>
		</div>
	)
}

export default Communication
