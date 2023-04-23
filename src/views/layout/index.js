import './index.css';

/**
 * 条件渲染
 */
const loadData = () => {
  let isLoading = true
  let loadingText = isLoading ? 'loading...' : '数据加载完成'
  return loadingText
}

/**
 * 列表渲染
 * key 唯一属性
 */
const listRender = () => {
  const list = [
    {
      id: 1,
      name: '《遇见》',
      singer: '孙燕姿'
    },
    {
      id: 2,
      name: '《桃花诺》',
      singer: '邓紫棋'
    },
    {
      id: 3,
      name: '《交换余生》',
      singer: '林俊杰'
    },
  ]
  const dom = (
    <ul>
      {list.map(item => <li key={item.id}>{item.name}-{item.singer}</li>)}
    </ul>
  )
  return dom
}

/**
 * JSX基本使用
 * JSX中使用JavaScript表达式语法：{ JavaScript表达式 }
 * 
 * @returns dom
 */

function Layout() {
  const name = 'JSX'
  const htmlDom = (
    // 类名-className，行内样式-style
    <div className="layout">
      <div style={{ color: 'red', backgroundColor: 'black' }}> {loadData()} </div> 
      <div> Hello {name},  年龄 {2 * 9} </div>
      <div> {listRender()} </div>
    </div>
  )
  return htmlDom;
}

export default Layout;