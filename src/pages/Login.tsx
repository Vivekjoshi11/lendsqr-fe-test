import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Save mock users in localStorage (only runs once when the component mounts)
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // If no users exist, initialize with mock users
    if (existingUsers.length === 0) {
      const mockUsers = [
        { email: "admin@lendsqr.com", password: "password123" },
        { email: "user@lendsqr.com", password: "userpass" },
        { email: "vivek@gmail.com", password: "passwordVivek" },
      ];
      localStorage.setItem("users", JSON.stringify(mockUsers));
    }
  }, []);

  // Handle Form Submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if user exists
    const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("authToken", "fake-jwt-token"); // Simulate authentication
      localStorage.setItem("userEmail", email); // Store logged-in user email
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <div className="title-container-head">
          <img src="https://pecunia.lendsqr.com/assets/logo.svg" alt="title-logo" className="head-image" />
        </div>
        <img src="https://customers.deejos.co.in/images/signin-singup.png" alt="Welcome" className="login-image" />
      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="login-form">
          <div className="login-welcome">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>

          <form onSubmit={handleLogin}>
            {error && <p className="error-message">{error}</p>}

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "HIDE" : "SHOW"}</span>
            </div>

            <a href="http">FORGOT PASSWORD?</a>

            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
