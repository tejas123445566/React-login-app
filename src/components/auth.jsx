import React, { useState } from 'react';
import { auth } from '../config/firebase.jsx';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Logo from '../assets/logo.png'
import GoogleIcon from '@mui/icons-material/Google';
import { CheckBox } from '@mui/icons-material';



export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google Sign-In successful ✅");
    } catch (err) {
      alert(err.message);
    }
  };




  return (
    <div>
      <img src={Logo} alt="Logo" className='logo' />
      <div className='page'>

        <h2>Login / Signup <PersonIcon fontSize='large' className='person' /></h2>

        <input
          label='Username'
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <EmailIcon fontSize='medium' className='email' />

        <input
          label='Password'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <KeyIcon fontSize='medium' className='key' />
        <br></br>
        <div className="remember">
          <input className='check'
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label>Remember me</label>
        
        <button className="login-btn" id = "google-btn" onClick={signInWithGoogle}>
          <img className='google'
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="google"
            style={{ width: "20px" }}
          />
          Sign in with Google
        </button>
        </div>
        <button className='login-btn' onClick={signIn}>Login</button>
        <p>Don't have an account ? </p>
        <button className='login-btn' onClick={signUp}>Signup</button>
      </div>
    </div>
  );

}