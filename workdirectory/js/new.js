import React, { Component } from 'react';

export default class NewComponent extends Component{

    constructor(props){
        super(props),
        function() {
            console.log('export fine')
        }
    }


    render() {
        return(
            <div>
                <h3>New Component</h3>
                <p>{ this.props.text }</p>
            </div>
        );

    }
}
