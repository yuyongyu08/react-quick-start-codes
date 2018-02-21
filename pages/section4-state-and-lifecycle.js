/**
 * Created by yuyongyu on 2018/1/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/***********************************
 *  converting a function to a class
 ***********************************/
class Clock extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


/***********************************
 *  adding local state to a class
 ***********************************/

class StatefulClock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render () {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}!</h2>
            </div>
        )
    }
}


/***********************************
 *  adding lifecycle methods to a class
 ***********************************/

class PerfectClock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {//The componentDidMount() hook runs after the component output has been rendered to the DOM
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            {date: new Date()}
        )
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}!</h2>
            </div>
        )
    }
}

/*
* 执行过程：
* 1.ReactDOM.render()
* 2.constructor()：声明state
* 3.render()：将jsx挂载到DOM
* 4.componentDidMount()：挂载完成后
* 5.tick()：更新了state
* 6.render()：重新渲染
* 7.componentWillUnmount() 如果组件销毁，解除挂载
* */



/***********************************
 *  using state correctly
 ***********************************/

/*
* 1.不要直接修改this.state，使用this.setState()，唯一可以直接给this.state赋值的地方只有在constructor()
* 2.由于this.state和this.props的更新可能是异步的，所以不要用他们计算state。解决方法：this.setState(function(proState, props){})
* 3.state的更新可以被合并
* */



/***********************************
 *  the data flows down
 ***********************************/

/*
* 1.一个组件可能会选择将其state作为props传递给他的子组件
* 2.react采用是"自上而下"或"单向"数据流，这就决定了组件的state总是影响在它下面的组件
* 3.加入把组件树想像成props的瀑布，那么，每个组件的state就是额外的水源，随时补充，一直向下流
* */






ReactDOM.render(
    <PerfectClock/>,
    document.getElementById('app')
);