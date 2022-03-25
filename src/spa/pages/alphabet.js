import React from 'react';

class Alphabet extends React.Component {
    //state = {  } 

    changeColor = (event)=>{
        console.log("Mouse is over: " + this.props.children)
        console.log(event)
        console.log(event.pageX)
        console.log(event.pageY)
    }

    render() { 
        return (
            <span 
                style={{color:this.props.color, fontSize:"100px"}}
                onMouseMove={this.changeColor}
                >
                {this.props.children}
            </span>
        );
    }
}
 
export default Alphabet;