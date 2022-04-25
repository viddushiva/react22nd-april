import React from "react"
class Classy extends React.Component{
    constructor(){
        super();
        this.state={
            age:23
        }
    }
    changing=()=>{
this.setState({
    age:this.state.age+1
})
    }
    render(){
        return(
            <>
            hello {this.props.bert}{this.state.age}<br/>
<button onClick={this.changing}>click me</button>
            </>
        )
    }
}
export default Classy