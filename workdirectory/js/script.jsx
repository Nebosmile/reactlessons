console.log('worked');

import React from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';
console.log(React);

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];


class App extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            timer: 0,
            arr :[

            ]
        };
    }

    componentWillMount(){
        setInterval(()=>{
            this.setState({timer: this.state.timer+1});
        },100);
    }

    render() {
        return(
            <div style={{border:"1px solid #000", color:"#b68448"}} arry ={this.state.arr}>
                <h1>App works</h1>
                {this.state.timer <50 ? <NewComponent news = {my_news}/> : null}
                <p>{this.state.timer}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementsByClassName('workdiv')[0]
)

// class App extends React.Component {
//
//     constructor(props){
//         super(props);
//
//         this.state ={
//             text: 'value'
//         };
//     }
//
//     inputOnChange(event){
//         const text = event.target.value;
//         this.setState({ text });
//     }
//
//     render() {
//         return(
//             <div style={{border:"1px solid #000", color:"#b68448"}} className ="test">
//                 <h1>App works</h1>
//                 <input type='text' value = {this.state.text} onChange={this.inputOnChange.bind(this)}/>
//             </div>
//         );
//     }
// }


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
