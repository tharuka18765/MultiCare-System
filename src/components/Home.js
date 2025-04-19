import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import MenuLink from './MenuLink';



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Top Bar */}
      <header className="top-bar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h2 className="logo-title">MultiCare System </h2>
        <div>
      
        <MenuLink linkname = "Home" url = "/"/>
        <MenuLink linkname = "About Us" url = "about"/>
        <MenuLink linkname = "Contact Us" url = "contact"/>
        
        </div>
      </header>

      {/* Main Section */}
      <section className="main-section" style={{
        backgroundImage: "url('building.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 100px",
        color: "#fff"
      }}>
        <h1 style={{
            fontSize: "4rem",
            fontWeight: "bold",
            lineHeight: "1.2",
            margin: "10px auto",
            paddingTop: "80px",
            maxWidth: "50%",
            textAlign: "center",
            color: "black", // Explicitly setting black color
            zIndex: "2"
          }}>
          MultiCare System
        </h1>
      </section>

      {/* Login Buttons */}
      <div className="login-buttons">
        <button className="admin-btn" onClick={() => navigate("/admin-login")}>Admin Login</button>
        <button className="user1-btn" onClick={() => navigate("/user-login-1")}>User Login 1</button>
        <button className="user2-btn" onClick={() => navigate("/user-login-2")}>User Login 2</button>
      </div>
    </div>
  );
};

export default Home;
