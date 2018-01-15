#### 概念

1. Redux的设计思想

		Web应用是一个状态机，视图和状态是一一对应的
		所有的状态，保存在一个对象里面
		
		
2. 基本概念

		Store是个保存数据的容器，该对象包含所有数据
		State是某个时点的数据集合，State的变化，会导致View的变化
		Action是View发出的通知，表示State要发生变化，改变State的唯一方法是使用Action
		Reducer是State的计算过程，Store收到Action以后，必须给出一个新的State，即接收Action和当前State作为参数，返回一个新的State。
		store.dispatch(Action)是View发出Action的唯一方法。
		
#### 操作

1. Actions：
	
		Actions必须有type属性，用来指示执行的Action类型

		
		