import React, { useState } from 'react';
import styles from "./SignIn.module.css"
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

   // SignIn Function  
   const handleSignin = (e) => {
      e.preventDefault();
      const url = "https://cricketecommerce.onrender.com/User/login";

      if(validate()) {
        console.log('check validation-----');

        const data = {
          email: 'admin@name.com',
          password: 'password',
          role: 'Admin'
        }

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          },
        })
        .then(response=> {
          return response.json() })
        .then((res) => {
          console.log(res)
          // Navigate to Product page
           navigate('/productPage');
        })
        .catch((e) => console.log("SignIn Failed due to: ", e.message))
      }
  }

const validate = () => {
  let result = true;
  if(email === '' || email === null){
    result = false;
    console.log('Please enter Email');
  }
  if(password === '' || password === null){
    result = false;
    console.log('Please enter Password');
  }
  if(role === '' || role === null){
    result = false;
    console.log('Please enter Role');
  }

  return result;
}

  return (
    // Sign In Form
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignin}>
        <div className={styles.content}>
          <h3 className={styles.title}>Sign In</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input type="email" className="form-control mt-1" placeholder="Enter email address"
              id='email'
              value={email} 
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control mt-1" placeholder="Enter password"
              id='password'
              value={password} 
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Role</label>
            <input type="role" className="form-control mt-1" placeholder="Enter role"
              id='role'
              value={role} 
              onChange={e=>setRole(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
