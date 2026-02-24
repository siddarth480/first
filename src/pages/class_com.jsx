import {react,  Component } from "react"; 

class Class_com extends Component  {

    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}


export default Class_com;
