/**
 * Created by yuyongyu on 2018/1/24.
 */

import React from 'react';
import ReactDOM from 'react-dom';

/***********************************
 *  渲染多个组件
 ***********************************/


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number, index) =>
    <li key={index}>{number}</li> //don’t recommend using indexes for keys
);

let rootElemeent = <ul>{listItems}</ul>;


/***********************************
 *  基本列表组件
 ***********************************/
const fruits = ['apple', 'banana', 'orange'];

function OrderList(props) {
    const listItems = props.items.map((item) => {
            return  <li>{item}</li>
        }
    );

    return (
        <ul>{listItems}</ul>
    );
}

function NumberList(props) {
    const items = props.items;
    const listItems = items.map((item) =>
        <li>{item}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

function OrderListWithKey(props) {
    const listItems = props.items.map((item, index) => {
            return  <li key={index.toString() + item.toString()}>{item}</li>
        }
    );

    return (
        <ul>{listItems}</ul>
    );
}



/***********************************
 *  key应该放在组件上
 ***********************************/

function Item_Bad(props) {
    const item = props.item;

    return (
        <li key={item.toString()}>{item}</li>
    )
}


function List_Bad (props) {
    const items = props.items.map((item) => {
       return <Item_Bad item={item}/>
    });

    return (
        <ul>
            {items}
        </ul>
    )
}


function Item_Good(props) {
    const item = props.item;
    
    return (
        <li>{item}</li>
    )
}

function List_Good(props) {
    const items = props.items.map((item, index) => {
        return <Item_Good key={index + item.toString()} item={item}/>
    });

    return (
        <ul>
            {items}
        </ul>
    )
}


/***********************************
 *  key必须在兄弟级别上唯一，不必在全局级别唯一
 ***********************************/

function Sidebar(props) {
    const posts = props.posts;

    const items = posts.map((post, index) => {
        return (<li key={index + post.title.toString()}>{post.title}</li>)
    });

    return (
        <ul>
            {items}
        </ul>
    )
}

function Post(props) {
    const post = props.post;

    console.log('post.id: ', post.id);
    console.log('post.key: ', post.key); //组件内接受不到key

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
}

function Content(props) {
    const posts = props.posts;

    const postList = posts.map((post, index) => {
        return <Post id={post.id} key={post.id} post={post}/>; //key并不能传到组件内，如果需要其值，可以用一个具体的属性名传递
    });

    return (
        <div>
            {postList}
        </div>
    )
}

function Blog(props) {
    const posts = props.posts;

    return (
        <div>
            <Sidebar posts={posts}/>
            <Content posts={posts}/>
        </div>
    )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];





let element = <Blog posts={posts}/>;


ReactDOM.render(
    element,
    document.getElementById('app')
);