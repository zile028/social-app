import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    const [fullName, setFullName] = useState({
        firstName: "", lastName: ""
    });
    const [names, setNames] = useState([]);
    const [timer, setTimer] = useState(0);

    useEffect(() => {

        console.log("Mount");
        console.log("Update");
        return () => {
            
        };
    }, [fullName.firstName]);


    const showNames = (e) => {
        e.preventDefault();
        console.log(fullName);
        setNames([...names, fullName]);
        setFullName({
            firstName: "", lastName: ""
        });
    };

    const inputHandler = (e) => {
        // let copyFullName = {...fullName};
        // copyFullName[e.target.name] = e.target.value;
        // setFullName(copyFullName);
        setFullName({...fullName, [e.target.name]: e.target.value});
    };

    return (
        <div className="App">
            <p>Hello App</p>
            <form action="">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    onInput={inputHandler} value={fullName.firstName}/>
                <input type="text" name="lastName" placeholder="Last name"
                       onInput={inputHandler} value={fullName.lastName}/>
                <button onClick={showNames}>Click</button>
            </form>
            {names.map((name, index) => {
                return <p key={index}>{name.firstName} {name.lastName}</p>;
            })}

        </div>
    );
}

export default App;
