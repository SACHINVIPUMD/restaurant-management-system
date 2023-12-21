import React, { useContext, useState } from 'react';
import bgImg from '../Assets/food1.jpeg';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from './UserContext';

export default function LoginForm() {
  const { signinHandler } = useContext(Context);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const onSubmit = async (data) => {
    try {
      // Add additional validation logic if needed
      if (data.password !== 'securepassword') {
        throw new Error('Invalid password format');
      }

      // Call signinHandler with form data
      await signinHandler(data.username, data.password);
      // Navigate to the desired location after successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section>
      <h1 style={{
        marginTop: '10px',
        textShadow: '2px 2px 2px grey',
        textAlign: 'center',
      }}
      >Dine On
      </h1>
      <div className="register">
        <div className="col-1">
          <h2>LOGIN</h2>
          <span>Login and enjoy the service</span>
          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register('username', { required: 'Username is required' })}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Username'
            />
            {errors.username && <p>{errors.username.message}</p>}
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              placeholder='Password'
            />
            {errors.password && <p>{errors.password.message}</p>}
            
            <button className='btn' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </button>
            {errors.general && <p>{errors.general.message}</p>}
          </form>
          <Link to='/Signup'>New User! Register now</Link>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
