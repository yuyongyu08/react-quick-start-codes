/**
 * Created by yuyongyu on 2018/1/25.
 */

import React from 'react';
import ReactDOM from 'react-dom';

let element;


function BoilingVerdict(props) {
    return (
        <p>The water would {props.temperature >= 100 ? '' : 'not'} boil.</p>
    )
}

class SimpleCalculator extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value})
    }

    render(){
        const temperature = this.state.temperature;

        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={this.state.temperature} onChange={this.handleChange}/>

                <BoilingVerdict temperature={this.state.temperature}/>
            </fieldset>
        )
    }
}

/***********************************
 *  需求：提供摄氏和华氏两种刻度，在一个刻度中输入，另一个刻度同步更新
 ***********************************/


class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.handleTemperatureChange(e.target.value);
    }

    render(){
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };

        return (
            //将此处的state提升至父组件，用props传递
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input value={this.props.temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}



class PerfectCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        };

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    handleCelsiusChange(temperature){
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange(temperature){
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }

    render(){
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsiusTemperature = scale === 'c' ? temperature : this.tryConvert(this.state.temperature, this.toCelsius);
        const fahrenheitTemperature = scale === 'f' ? temperature : this.tryConvert(this.state.temperature, this.toFahrenheit);

        return (
            //向子组件传递state和方法
            <div>
                <TemperatureInput scale="c" temperature={celsiusTemperature} handleTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheitTemperature} handleTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict temperature={this.state.temperature}/>
            </div>
        )
    }
}






element = <PerfectCalculator/>;

ReactDOM.render(
    element,
    document.getElementById('app')
);