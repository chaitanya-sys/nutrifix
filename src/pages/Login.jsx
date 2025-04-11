import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth, provider } from '../firebase';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setError('');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!form.email) {
      setError('Please enter your email to reset password.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, form.email);
      setMessage('Password reset email sent!');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Login to Nutrifix 🥗</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}

        <button type="submit" className="button-56">Login</button>

        <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="button-56"
          data-testid="login-button"
        >
          <span className="ButtonInner-sc-14ud5tc-0 klLdGL encore-bright-accent-set">
            <span className="encore-text encore-text-body-medium-bold">
              Sign in with Google
            </span>
          </span>
        </button>
      </form>

      <p>Don't have an account? <a href="/signup">Sign up for Nutrifix</a></p>
    </motion.div>
  );
}

export default Login;
