import React, { useState } from "react";

function UserLogin1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(
      `User Login 1 Attempt:\nUsername: ${username}\nPassword: ${password}`
    );
  };

  return (
    <div className="login-container">
      <h2>User Login 1</h2>
      <div className="login-form">
        <label>Username:</label>
        <input
          type="text"
          placeholder="User1 Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="User1 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default UserLogin1;
