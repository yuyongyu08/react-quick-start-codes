/**
 * Created by yuyongyu on 2018/1/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/***********************************
*  embedding expressions in JSX
***********************************/
function formatName(user) {
    return user.lastName + ' ' + user.firstName;
}

const user = {
    firstName: 'yongyu',
    lastName: 'yu',
    avatarURL: 'www.baidu.com'
};

const element = (
  <h1>
      Hello, {formatName(user)}!
  </h1>
);


/***********************************
 *  JSX is an expression too
 ***********************************/

function getGreeting(user) {
    if(user){
        return (
            <h1>
                hello, {formatName(user)}
            </h1>
        )
    }else{
        return (
            <h1>
                Hello, Stranger!
            </h1>
        )
    }
}


/***********************************
 *  specifying attributes with JSX
 ***********************************/

const element1 = (
    <div tabIndex="0">hello</div>
);

const element2 = (
    <img src={user.avatarURL}></img>
);


/***********************************
 *  JSX prevents injection attacks
 ***********************************/

const title = '';//if title is potentially malicious input

const elementTitle = (<h1>{title}</h1>); // it is safe still


/***********************************
 *  JSX represents objects
 ***********************************/

const element3 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

const element4 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, react createElement'
);





ReactDOM.render(
    getGreeting(user),
    document.getElementById('app')
);

