import Login from '../views/login/index'
import MouseHigher from '../views/mouseHigher/index'
import LifeCycle from '../views/lifeCycle/index'
import Communication from '../views/communication/index'
import Demo from '../views/demo/index'

export const routers = [
	{
		path: '/',
		name: '登录',
		component: Login,
	},
	{
		path: '/home',
		name: 'demo',
		component: Demo,
	},
	{
		path: '/communication',
		name: '组件间的通信',
		component: Communication,
	},
	{
		path: '/lifeCycle',
		name: '生命周期',
		component: LifeCycle,
	},
	{
		path: '/mouseHigher',
		name: '鼠标移动-高阶组件',
		component: MouseHigher,
	},
]
