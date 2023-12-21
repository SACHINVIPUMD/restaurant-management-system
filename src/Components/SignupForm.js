import React from 'react'
import bgImg from '../Assets/food1.jpeg';
import { useState , useContext } from "react";
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { Context } from "./UserContext";
export default function SignupForm() {
    const { register, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const Navigate = useNavigate();
    const [Username , setUsername] = useState('');
    const [Email , setEmail] = useState('');
    const [Password , setPassword] = useState('');
    const [flag, setFlag] = useState(false);
    const { signinHandler } = useContext(Context);
    function validate() {
        return true;
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(Email);
        if(validate()) {
          signinHandler(Username);
          Navigate('/');
        }
        else {
          //handle err
        }
      }
  return (
    <section>
        <h1 style={{
            marginTop:'10px',
            textShadow:'2px 2px 2px grey',
            textAlign:'center'}}
            >Dine On</h1>
        <div className="register">
            <div className="col-1">
                <h2>Sign Up</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    {/* <button className='btn'>Sign Up</button> */}
                    <input type="submit"  className="btn" />
                </form>
            <Link to='/Login'>Already a User! Login</Link>
            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
