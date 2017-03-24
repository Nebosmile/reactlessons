import React, { Component } from 'react';


export default class NewComponent extends Component{

    constructor(props){

        super(props);
        this.rendme =this.props.child_props.map(function(item,index){
            return(
                <div key = {index}>
                    <div>{item.author}</div>
                    <div>{item.text}</div>
                    <div>первый вариант</div>
                </div>

            )
        });
    }
    renderItem(item, index){

        return(
            <div key = {index}>
                <div>{item.author}</div>
                <div>{item.text}</div>
                <div>второй вариант</div>
            </div>

        )
    }



    render() {

        return(
            <div className= "news">
                {this.rendme || this.props.child_props.map(this.renderItem)}
            </div>

        );

    }
}
    
