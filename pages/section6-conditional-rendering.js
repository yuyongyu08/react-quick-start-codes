/**
 * Created by yuyongyu on 2018/1/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';


/***********************************
 *  1.用元素的变量
 ***********************************/

function UserGreeting(props) {
    return (
        <h1>Welcome back!</h1>
    )
}

function GuestGreeting(props) {
    return (
        <h1>Please login in，honey!</h1>
    )
}

function Greeting(props) {
    if(props.isLoggedIn){
        return <UserGreeting/>
    }

    return <GuestGreeting/>
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>login in</button>
    )
}


function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>login out</button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState(
            {isLoggedIn: true}
        );
    }

    handleLogoutClick() {
        this.setState(
            {isLoggedIn: false}
        );
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        }else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        )
    }
}


/***********************************
 *  2.用逻辑操作符：&&
 ***********************************/

function Mailbox(props) {
    const unreadMessages = props.unreadMessage;

    return (
        <div>
            <h1>Hello!</h1>
            {
                (unreadMessages && unreadMessages.length > 0) &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
            }
        </div>
    )
}

const messages = ['react is good', 'react-router is on the way', 'what is redux?'];



/***********************************
 *  3.用三目运算符
 ***********************************/

class LoginControlCopy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState(
            {isLoggedIn: true}
        );
    }

    handleLogoutClick() {
        this.setState(
            {isLoggedIn: false}
        );
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div>
                This user is {isLoggedIn ? 'currently' : 'not'} logged!<br/>
                {isLoggedIn ? (<LogoutButton onClick={this.handleLogoutClick}/>) : (<LoginButton onClick={this.handleLoginClick}/>)}
            </div>
        )
    }
}


/***********************************
 *  4.通过render返回null
 ***********************************/

function WarningBanner(props) {
    if(!props.warn){
        return null
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(provProps => ({
            showWarning: !provProps.showWarning
        }));

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}




let element = <Page/>;

ReactDOM.render(
    element,
    document.getElementById('app')
);