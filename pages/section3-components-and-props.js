/**
 * Created by yuyongyu on 2018/1/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/***********************************
 *  组件书写形式
 ***********************************/

//1.方法性组件（functional components）：没有状态，适合只用来渲染元素，没有任何逻辑操作的组件
function FunctionalComponent(props) {
    return (<h1>Hello, {props.name}</h1>);
}

//2.类组件（class components）：有状态，内部有逻辑
class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name} </h1>
        );
    }
}


/***********************************
 *  rendering a component
 *
 *  1.Always start component names with a capital letter.
 *  2.React treats components starting with lowercase letters as DOM tags.
 ***********************************/

const element = (<ClassComponent name="class component"/>);


/***********************************
 *  composing components
 ***********************************/

function App() {
    return (
        <div>
            <ClassComponent name="yu"/>
            <ClassComponent name="yong"/>
            <ClassComponent name="Yu"/>
        </div>
    );
}


/***********************************
 *  extracting components
 ***********************************/

const author = {
    name: 'yuyy',
    avatarUrl: 'http://img.zcool.cn/community/01c9ad589c2a0fa801219c77603e1d.jpg'
};


function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <img src={props.author.avatarUrl} alt={props.author.name}/>
                <div className="name">{props.author.name}</div>
            </div>
            <div className="text">
                {props.text}
            </div>
            <div className="date">
                {props.date}
            </div>
        </div>
    )
}


function Avatar(props) {
    return (
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    )
}

function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="name">{props.user.name}</div>
        </div>
    )
}

function IntegratedComment(props) {
    return (
        <div className="commet">
            <UserInfo user={props.author}/>
            <div className="text">{props.text}</div>
            <div className="date">{props.date}</div>
        </div>
    )
}


/***********************************
 *  props are read-only: All React components must act like pure functions with respect to their props.
 ***********************************/






ReactDOM.render(
    <IntegratedComment author={author} text="好帅!!!" date="2017-12-31"/>,
    document.getElementById('app')
);