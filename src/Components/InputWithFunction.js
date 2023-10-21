
import { useState , useEffect } from "react";

export default function Input(){

    const [name,setName] = useState("Harry");
    const [lastName,setLastname] = useState("Potter");

    useEffect(()=>{
        document.title = name+" "+lastName;
    },[name,lastName]);  // performs the work of both componentDidMount & componentDidUpdate 
    // useEffect is performed(i.e here title is updated) as soon as component is mounted 
    // [name,lastName] i.e useEffect is performed whenever name OR lastName is changed after component is mounted


    useEffect(()=> {
        const timer = setInterval(() => {
            console.log("Window-width: ",window.innerWidth);
        }, 2000);

        return(()=>{clearInterval(timer)})
        }
   );

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input"
                            value={name} 
                            onChange={(e)=> setName(e.target.value)}
                    />
            </Row >
            <Row label="Last Name">
                    <input className="input"
                            value={lastName} 
                            onChange={(e)=> setLastname(e.target.value)}
                    />
            </Row >
        </div>

        <h2>Hello, {name + " " +lastName}</h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
