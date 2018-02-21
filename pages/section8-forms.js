/**
 * Created by yuyongyu on 2018/1/25.
 */

import React from 'react';
import ReactDOM from 'react-dom';

let element;
/***********************************
 *  受控组件
 ***********************************/

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            {value: e.target.value.toUpperCase()}
        )
    }

    handleSubmit(e) {
        alert('a name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}


/***********************************
 *  <textarea>
 ***********************************/

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Please write an essay about your favorite DOM element'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            {value: e.target.value}
        )
    }

    handleSubmit(e) {
        alert('An essay was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}


/***********************************
 *  <select>
 ***********************************/

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bestFlavor: '',
            favoriteFlavor: []
        };

        this.handleBestFlavorChange = this.handleBestFlavorChange.bind(this);
        this.handleFavoriteFlavorChange = this.handleFavoriteFlavorChange.bind(this);
    }

    handleBestFlavorChange(e) {
        this.setState(
            {bestFlavor: e.target.value}
        )
    }

    handleFavoriteFlavorChange(e) {
        this.setState(
            {favoriteFlavor: e.target.value}
        );

        console.log(this.state.favoriteFlavor)
    }

    handleSubmit(flavors, e) { /*注意参数顺序*/
        alert('Your favorite flavor is : ' + flavors.toString());
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form id="best" onSubmit={this.handleSubmit.bind(this, this.state.bestFlavor)}>/*注意传参方式*/
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.bestFlavor} onChange={this.handleBestFlavorChange}>
                            <option value="apple">apple</option>
                            <option value="banana">banana</option>
                            <option value="cherry">cherry</option>
                        </select>
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <form id="all" onSubmit={this.handleSubmit.bind(this, this.state.favoriteFlavor)}>
                    <label>
                        Pick all favorite flavors:
                        <select multiple={true} value={this.state.favoriteFlavor} onChange={this.handleFavoriteFlavorChange}>
                            <option value="apple">apple</option>
                            <option value="banana">banana</option>
                            <option value="cherry">cherry</option>
                        </select>
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>

        )
    }
}


/***********************************
 *  <input type="file">
 ***********************************/

class FileInput extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.fileInput);
        alert(`Selected file - ${this.fileInput.files[0].name}` )
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    upload file: <input type="file" ref={input => {this.fileInput = input}}/>
                </label>
                <br/>
                <button type="submit">submit</button>
            </form>
        )
    }

}

/***********************************
 *  用name区分同类标签
 ***********************************/

class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isGroup: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type == 'checkbox' ? target.checked : target.value;

        this.setState({[name]: value}); /*精华所在*/
    }


    render() {
        return(
            <form>
                <label>
                    Is group: <input name="isGroup" type="checkbox" checked={this.state.isGroup} onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of guest:<input name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>

                <br/>
                Today, there will be {this.state.numberOfGuests} guests, it {this.state.isGroup ? 'is' : 'not'} group!

            </form>
        )
    }
}


/***********************************
 *  一个输入框如果不想指定具体值，同时还能可以输入，就可以赋值为null。这种做法会被警告。
 ***********************************/

function NullInput() {
    return (
        <div>
            <input value='hi'/>

            <input value={null}/>
        </div>

    )
}




element = <NullInput/>;



ReactDOM.render(
    element,
    document.getElementById('app')
);