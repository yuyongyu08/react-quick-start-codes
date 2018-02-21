/**
 * Created by yuyongyu on 2018/1/23.
 */

/***********************************
 *  rendering an element into the DOM : ReactDOM.render(element, mountNode);
 ***********************************/




/***********************************
 *  updating the rendered element: In practice, most React apps only call ReactDOM.render() * once *.
 ***********************************/



/***********************************
 *  React only updates what's necessary
 ***********************************/

import React from 'react';
import ReactDOM from 'react-dom';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interal = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interal)
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        )
    }
}

ReactDOM.render(
    <Timer/>, document.getElementById('app')
)