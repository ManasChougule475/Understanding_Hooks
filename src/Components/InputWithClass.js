import React from "react";

export default class Input extends React.Component{

    constructor(){
        super();
        this.state = {
            name:"Tony",
            lastName: "Stark",
        }
    }
    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    handleLastnameChange = (e) =>{
        this.setState({
            lastName: e.target.value
        })
    }

    // with below both methods title also gets updated dynamically  as user types name & lastName
    componentDidMount(){

        // :- title changes from React App to new value as soon as component is mounted
        document.title = this.state.name+" "+this.state.lastName;  

        //:- set the timer
        this.timer = setInterval(() => {
            console.log("Window-width: ",window.innerWidth);
          }, 2000);
  
    }  
    componentDidUpdate(){

        // :- title changes from old value in mounting phase to new one  whenever user updates name & lastName
        document.title = this.state.name+" "+this.state.lastName; 
        
    }  

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    
    render(){
        return(
            <>
            <div className ="section">
                <Row label="Name">
                     <input className="input" 
                            value={this.state.name} 
                            onChange={this.handleNameChange}
                     />
                </Row >
                <Row label="Last Name">
                     <input  className="input" 
                            value={this.state.lastName} 
                            onChange={this.handleLastnameChange}
                     />
                </Row >
                

                {/* <Row1 label="Last Name" handleLastnameChange={this.handleLastnameChange} lastName={this.state.lastName}></Row1> */}
                {/* <Row2 label="Last Name" handleLastnameChange={this.handleLastnameChange}>{this.state.lastName}</Row2> */}


                {/* <Row3 label="Last Name" >Ram<h6>sham</h6></Row3> */}
                {/* In Row3 you cannot make changes to <h6>sham</h6> cause  React typically doesn't work this way for child components , use functional component */}
            </div>


            <h2>Hello, {this.state.name + " " +this.state.lastName}</h2>
            </>
        )
    }
}


function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}  
        {/* here props.children is {this.state.name} */}
        <hr />
        </>
    )
}






// function Row1(props){
//     const{label,lastName,handleLastnameChange} = props;
//     return(
//         <>
//         <label>{label}<br/></label>
//         <input  className="input" 
//             value={lastName}  
//             onChange={handleLastnameChange}    
//         />
//         <hr />
//         </>
//     )
// }


// function Row2(props) {
//     const { label, handleLastnameChange, children } = props;
//     return (
//         <>
//             <label>{label}<br/></label>
//             <input className="input" 
//                 value={children} 
//                 onChange={handleLastnameChange}    
//             />
//             <hr />
//         </>
//     )
// }


// function Row3(props){
//     const{label,handleLastnameChange,children} = props;
//     console.log('children',children[1]);
//     return(
//         <>
//         <label>{label}<br/></label>
//         <input  className="input" 
//             value={props.children[1].props.children}  // props.children[1] is object of sham
//         />
//         <hr />
//         </>
//     )
// }