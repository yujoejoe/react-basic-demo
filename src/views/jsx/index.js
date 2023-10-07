import React from 'react'
import './index.css'

/**
 * 条件渲染
 */
// const loadData = () => {
//   let isLoading = true
//   let loadingText = isLoading ? 'loading...' : '数据加载完成'
//   return loadingText
// }

/**
 * 列表渲染（key 唯一属性）
 *
 * 箭头函数创建组件
 */
const listRender = () => {
	const list = [
		{
			id: 1,
			name: '《遇见》',
			singer: '孙燕姿',
		},
		{
			id: 2,
			name: '《桃花诺》',
			singer: '邓紫棋',
		},
		{
			id: 3,
			name: '《交换余生》',
			singer: '林俊杰',
		},
	]
	const dom = (
		<ul>
			{list.map(item => (
				<li key={item.id}>
					{item.name}-{item.singer}
				</li>
			))}
		</ul>
	)
	return dom
}

/**
 * 使用函数创建组件（无状态组件）
 *
 * 函数名称必须 大写字母 开头
 * 函数组件必须 有返回值
 * 函数名称作为组件标签名
 *
 * JSX中使用JavaScript表达式语法：{ JavaScript表达式 }
 *
 * @returns dom
 */
// function JsxUsage() {
//   function handleClick() {
//     console.log('点击事件触发了');
//   }
//   const name = 'JSX'
//   const htmlDom = (
//     // 类名-className，行内样式-style
//     <div className="content">
//       <div style={{ color: 'red', backgroundColor: 'black' }}> 我是函数创建的组件 </div>
//       <div> {loadData()} </div>
//       <div> Hello {name},  年龄 {2 * 9} </div>
//       <div> {listRender()} </div>
//       <button onClick={handleClick}>点击</button>
//     </div>
//   )
//   return htmlDom;
// }

/**
 * 使用类创建组件（有状态组件）
 *
 * 类名称必须 大写字母开头
 * 类组件应继承 React.Component 父类
 * 类组件必须提供 render() 方法
 * render()方法必须 有返回值
 */
class JsxUsage extends React.Component {
	// 初始化state
	state = {
		count: 0,
		txt: '',
		isChecked: false,
	}
	// 点击事件处理程序
	handleClick(e) {
		e.preventDefault() // 阻止浏览器的默认行为
		console.log('点击事件触发了', e)
		console.log('事件处理程序中的this是未定义的', this)
	}
	// 事件处理程序
	onAdd = () => {
		// 注意：setState()是异步更新数据的
		// this.setState({ count: this.state.count + 2 }) // 这个不触发，不执行
		// console.log('异步更新程序后的数值a', this.state.count) // 0
		// 多次调用setState()只会触发一次重新渲染
		// this.setState({ count: this.state.count + 1 }) // 这个触发执行了
		// console.log('异步更新程序后的数值b', this.state.count) // 0

		// 推荐语法，这种写法可以保持state是最新的，可以多次触发
		this.setState(
			(state, props) => {
				return {
					count: state.count + 1,
				}
			},
			// 第二个参数，可有可无，状态更新后立即执行的操作
			() => {
				console.log('状态更新完成', this.state.count)
			}
		)
		console.log('异步更新程序后的数值', this.state.count)
	}
	// 受控组件
	handleChange = e => {
		// 获取当前DOM对象
		const target = e.target
		// 根据表单类型获取值
		const value = target.type === 'checkbox' ? target.checked : target.value
		// 获取name（name设置需要和绑定的state值命名一致）
		const name = target.name
		// 根据name设置对应state
		this.setState({ [name]: value })
	}
	render() {
		// render()方法中的this为组件实例，可以获取到setState()
		return (
			<div className="content">
				<div>我是类创建的组件</div>
				<a href="https://www.baidu.com/" onClick={this.handleClick}>
					百度一下
				</a>
				<div> {listRender()} </div>
				<div> 计数：{this.state.count} </div>
				<button onClick={this.onAdd}>点击+1</button>
				<input
					type="text"
					name="txt"
					value={this.state.txt}
					onChange={this.handleChange}></input>
				<input
					type="checkbox"
					name="isChecked"
					checked={this.state.isChecked}
					onChange={this.handleChange}></input>
			</div>
		)
	}
}

export default JsxUsage
