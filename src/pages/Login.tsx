import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
// import { ToastContainer, toast } from 'react-toastify';
import "../styles/login.scss";

const Login = () => {
  const navigate = useNavigate(); // Hook to redirect after login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Mock API response (replace with real API later)
  const mockUsers = [
    { email: "admin@lendsqr.com", password: "password123" },
    { email: "user@lendsqr.com", password: "userpass" },
    {email:"vivek@gmail.com", password:"passwordVivek"}
  ];

  // Handle Form Submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email & password validation
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    // Check if user exists in mock database
    const user = mockUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("authToken", "fake-jwt-token"); // Store a fake token
      localStorage.setItem("userEmail", email); // Store user email for session
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid email or password.");
      // toast.error("Invalid email or password")
    }
  };

  return (
    <div className="login-container">
      {/* Left Side with Logo and Image */}
      <div className="login-left">
        <div className="title-container-head">
          <img
            src="https://pecunia.lendsqr.com/assets/logo.svg"
            alt="title-logo"
            className="head-image"
          />
        </div>
        <img
          src="https://customers.deejos.co.in/images/signin-singup.png"
          alt="Welcome"
          className="login-image"
        />
      </div>

      {/* Right Side with Login Form */}
      <div className="login-right">
        <div className="login-form">
          <div className="login-welcome">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>

          <form onSubmit={handleLogin}>
            {error && <p className="error-message">{error}</p>} {/* Show Error if exists */}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>

            <a href="#">FORGOT PASSWORD?</a>

            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
