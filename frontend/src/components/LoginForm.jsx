import React, {useState} from 'react';
import Auth from "../services/Auth";
import {useNavigate} from "react-router-dom";

function LoginForm(props) {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        email: "", password: ""
    });
    const inputHandler = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Auth.login(inputData)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                navigate("/posts");
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    };
    return (
        <form>
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onInput={inputHandler} value={inputData.email}/>
            <input type="password" className="form-control mt-3" name="password" placeholder="Password"
                   onInput={inputHandler} value={inputData.password}/>
            <button className="btn btn-primary mt-3" onClick={handleSubmit}>Login</button>
        </form>
    );
}

export default LoginForm;