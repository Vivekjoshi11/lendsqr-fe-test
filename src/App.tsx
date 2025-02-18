// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React yes
//         </a>

//       </header>
//       <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;


import React from "react";
import AppRoutes from "./routes";

function App() {
  return <AppRoutes />;
}

export default App;
