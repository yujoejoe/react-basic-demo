import React from 'react'
import './index.css'

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
					<Node name="张" age={18} />
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
			<Child />
		</div>
	)
}

const Child = props => {
	return (
		<div className="fourth">
			<div>我是fourth-Child</div>
			<Consumer>{data => <span>我是first接收来的数据: {data}</span>}</Consumer>
		</div>
	)
}

export default Communication
