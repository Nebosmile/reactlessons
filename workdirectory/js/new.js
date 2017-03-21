import React, { Component } from 'react';


export default class NewComponent extends Component{

    constructor(props){
        super(props);
    }
    renderItem(item, index){
        return(
            <div key = {index}>
                <div>{item.author}</div>
                <div>{item.text}</div>
            </div>

        )
    }

    render() {
        console.log('this.', this.props.array)
        return(
            <div className= "news">
                {this.props.array.map(this.renderItem.bind(this))}
            </div>

        );

    }
}
