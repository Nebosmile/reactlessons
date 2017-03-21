import React, { Component } from 'react';


export default class NewComponent extends Component{

    constructor(props){
        super(props);

        console.log("constructor")
    }

    componentWillMount(){
        console.log('componentWillMountf');
    }
    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render');
        return(
            <div className= "news">
                <h3>Some text1</h3>
            </div>

        );

    }
}
