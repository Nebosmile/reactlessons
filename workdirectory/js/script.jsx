console.log('worked');

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            text: 'value'
        };
    }

    inputOnChange(event){
        const text = event.target.value;
        this.setState({ text });
    }

    render() {
        return(
            <div style={{border:"1px solid #000", color:"#b68448"}} className ="test">
                <h1>App works</h1>
                <input type='text' value = {this.state.text} onChange={this.inputOnChange.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementsByClassName('workdiv')[0]
)
// class App extends React.Component {
//     btnOnClick(event){
//         console.log("rise of rise", event.target);
//     }
//     render() {
//         console.log(this.props)
//         return(
//             <div style={{border:"1px solid #fff", color:"#b68448"}} className ="test">
//                 <h1>App works</h1>
//                 <p>!naturlich</p>
//                 <p>dfhh</p>
//                 <button style={{padding:'20px'}} onClick ={this.btnOnClick}>{this.props.name}</button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <App name="Some Name"/>,
//     document.getElementsByClassName('workdiv')[0]
// )
