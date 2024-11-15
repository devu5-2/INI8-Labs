import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

    const users = {
        fname: "",
        lname: "",
        email: "",
        dateofbirth: ""
    }

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", user)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/")
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='backpic'>
            <div className='addUser'>
                <Link to={"/"} className='addButton'>Back</Link>
                <h2 className='heading2'>Add New User</h2>
                <form className='addUserForm' onSubmit={submitForm}>
                    <div className="inputGroup">
                        <label htmlFor="fname">First name</label>
                        <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First name' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="lname">Last name</label>
                        <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="dateofbirth">Date Of Birth</label>
                        <input type="date" onChange={inputHandler} id="dateofbirth" name="dateofbirth" autoComplete='off' placeholder='DOB' />
                    </div>
                    <div className="inputGroup">
                        <button type="submit">ADD USER</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Add