import React from 'react'
import './index.css'

/**
 * css3构建3D模型
 */
class Css3dModel extends React.Component {
	render() {
		return (
			<div className="content">
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

export default Css3dModel
