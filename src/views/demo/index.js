import React from 'react'
import './index.css'

/**
 * 评论组件
 */
class PostComments extends React.Component {
	// 数据
	state = {
		name: '',
		comment: '',
		commentList: [],
	}
	//表单-受控组件
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
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
			<div className="content">
				<div>我是发表评论组件</div>
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
			</div>
		)
	}
}

export default PostComments
