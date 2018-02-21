/**
 * Created by yuyongyu on 2018/1/25.
 */

import React from 'react';
import ReactDOM from 'react-dom';

let element;
/***********************************
 *  实现组合：通过props.children来指定卡槽
 ***********************************/

function FancyBorder(props) {
    return(
        <div>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder>
            <h1>welcome</h1>
            <p>Thank you for visiting our home!</p>
        </FancyBorder>
    )
}


/***********************************
 *  实现组合：可以自定义多个卡槽
 ***********************************/

function Contacts() {
    return (
        <ul>
            <li>Tom</li>
            <li>Jerry</li>
        </ul>
    )
}

function Message() {
    return (
        <span>this is unread message.</span>
    )
}

function SplitPane(props) {
    return (
        <div>
            <span>
                left pane:
                {props.left}
            </span>
            <span>
                right pane:
                {props.right}
            </span>
        </div>
    )
}

function App() {
    /* 组件可以接受任何属性（props）：原始数值、react元素、方法*/
    return (
        <SplitPane left={<Contacts/>} right={<Message/>} />
    )
}


/***********************************
 *  实现组合：具体化（定义一个通用组件，通过属性定制具体化组件）
 ***********************************/

function Dialog(props) {
    return (
        <FancyBorder>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    constructor(props){
        super(props);

        this.state = {login: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(e) {
        this.setState({login: e.target.value})
    }

    handleSignUp(){
        alert(`Welcome aboard, ${this.state.login}`);
    }

    render(){
        return(
            <Dialog title="Mars Exploration Program" content="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        )
    }
}






element = <SignUpDialog/>;

ReactDOM.render(
    element,
    document.getElementById('app')
);