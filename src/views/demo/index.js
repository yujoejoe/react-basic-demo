import React from 'react'
import './index.css'

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
function JsxUsage() {
	function handleClick() {
		console.log('点击事件触发了')
	}
	const name = 'JSX'
	const htmlDom = (
		// 类名-className，行内样式-style
		<div>
			<div style={{ color: 'red', backgroundColor: 'black' }}>
				我是函数创建的组件
			</div>
			<div>
				Hello {name}, 年龄 {2 * 9}
			</div>
			<button onClick={handleClick}>点击</button>
		</div>
	)
	return htmlDom
}

/**
 * 使用类创建组件（有状态组件）
 *
 * 类名称必须 大写字母开头
 * 类组件应继承 React.Component 父类
 * 类组件必须提供 render() 方法
 * render()方法必须 有返回值
 */
class JsxUsageC extends React.Component {
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
	// render()方法中的this为组件实例，可以获取到setState()
	render() {
		return (
			<div>
				<div style={{ color: 'red', backgroundColor: 'black' }}>
					我是类创建的组件
				</div>
				<a href="https://www.baidu.com/" onClick={this.handleClick}>
					百度一下
				</a>
				<div> 计数：{this.state.count} </div>
				<button onClick={this.onAdd}>点击+1</button>
			</div>
		)
	}
}

/**
 * css3构建3D模型
 */
class Css3dModel extends React.Component {
	render() {
		return (
			<div>
				{/* 雏形demo */}
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				{/* 成型demo */}
				<div className="warp">
					<div className="box">
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
						<div>6</div>
					</div>
				</div>
			</div>
		)
	}
}

/**
 * 评论组件
 */
class PostComments extends React.Component {
	// 数据
	state = {
		name: '',
		comment: '',
		commentList: [],
		isChecked: true,
	}
	//表单-受控组件
	handleChange = e => {
		// 获取当前DOM对象
		const target = e.target
		// 获取name（name设置需要和绑定的state值命名一致）
		const name = target.name
		// 根据表单类型获取值
		const value = target.type === 'checkbox' ? target.checked : target.value
		// 根据name设置对应state
		this.setState({ [name]: value })
	}
	// 发表评论
	handleClick = () => {
		if (!this.state.name.trim() || !this.state.comment.trim()) {
			alert('请输入评论人和评论内容')
			return
		}
		const obj = {
			name: this.state.name,
			comment: this.state.comment,
		}
		let commentList = this.state.commentList
		commentList.push(obj)
		this.setState({
			name: '',
			comment: '',
			commentList: commentList,
		})
	}
	// 条件渲染+列表渲染
	renderList = () => {
		const commentList = this.state.commentList
		if (!!commentList.length) {
			return (
				<ul>
					{commentList.map((item, index) => (
						<li key={index}>
							<div className="item-name">评论人：{item.name}</div>
							<div className="item-comment">评论内容：{item.comment}</div>
						</li>
					))}
				</ul>
			)
		} else {
			return '暂无评论'
		}
	}
	// 渲染dom
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="请输入评论人"
					name="name"
					value={this.state.name}
					onChange={this.handleChange}></input>
				<textarea
					className="textarea-class"
					placeholder="请输入评论内容"
					rows="5"
					name="comment"
					value={this.state.comment}
					onChange={this.handleChange}></textarea>
				<button onClick={this.handleClick}>发表评论</button>
				<div className="comment-list">{this.renderList()}</div>
				<div>
					勾选受控组件：{' '}
					<input
						type="checkbox"
						name="isChecked"
						checked={this.state.isChecked}
						onChange={this.handleChange}></input>
				</div>
			</div>
		)
	}
}

/**
 * 组件整合
 */
class Demo extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="content-demo">
					<h1>1、我是-发表评论组件</h1>
					<PostComments></PostComments>
				</div>
				<div className="content-demo">
					<h1>2、我是-JsxUsage组件</h1>
					<JsxUsage></JsxUsage>
					<JsxUsageC></JsxUsageC>
				</div>
				<div className="content-demo">
					<h1>3、我是-Css3dModel组件</h1>
					<Css3dModel></Css3dModel>
				</div>
			</div>
		)
	}
}

export default Demo
