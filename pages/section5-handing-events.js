/**
 * Created by yuyongyu on 2018/1/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/*推荐*/
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevProps => ({ //如果需要用state计算state，则要用这种方式
            isToggle: !prevProps.isToggle
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggle ? 'ON' : 'OFF'}
            </button>
        )
    }
}

/*声明时箭头函数（实验性语法）*/
class LoggingButton extends React.Component {
    // handleClick = () => {
    //     console.log('this is:', this);
    // };

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
}

/*调用时箭头函数（性能问题：回调每次创建，组件就会渲染）*/
class LoggingButton1 extends React.Component {
    handleClick() {
        console.log('this is ', this)
    };

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        )
    }
}



/***********************************
 *  给事件处理器传参数:两种方式
 ***********************************/

class ToggleComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name){
        this.setState(
            {
                username: name
            }
        );
    }

    render(){
        return (
            <div>
                <div>you choose {this.state.username}</div>
                <button onClick={(e) => this.handleClick('Tom', e)}>Tom</button>
                <button onClick={this.handleClick.bind(this, 'Jerry')}>Jerry</button>
            </div>
        )
    }
}

ReactDOM.render(
    <ToggleComponent/>,
    document.getElementById('app')
);