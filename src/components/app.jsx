import React, { Component } from 'react';
import Navbar from './Navbar';


class App extends Component{
    state={
        data:[],
        falanaComponent:{
            headingMain:"NoteBook"
        }
    }
    componentDidMount(){
        console.log("Mounted");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(res){return res.json()})
        .then((res)=>{
            this.setState({
                data:res,
            })
        })
    }
    render(){

        var html=this.state.data.map(function(v,i){
            return(
                <li key={i}>{v.name}</li>
            )
        })
        return(
            <div>
                <ul>
                    {html}
                </ul>
                <Navbar data={this.state.falanaComponent} />
            </div>
        )
    }
}


export default App;