import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);

        // Remove reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }

        window.location.reload(); // force reload on logout
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const storedName = sessionStorage.getItem("name");
        const storedEmail = sessionStorage.getItem("email");

        if (storedName) {
            setIsLoggedIn(true);
            setUsername(storedName);
        } else if (storedEmail) {
            // If name is not stored, extract it from email before "@"
            const nameFromEmail = storedEmail.split("@")[0];
            setIsLoggedIn(true);
            setUsername(nameFromEmail);

            // Store it in sessionStorage for future use
            sessionStorage.setItem("name", nameFromEmail);
        }
    }, []);

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/LandingPage">
                    StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
                </Link>
                <span>.</span>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link"><Link to="/LandingPage">Home</Link></li>
                <li className="link"><Link to="/search/doctors">Appointments</Link></li>
                <li className="link"><Link to="/healthblog">Health Blog</Link></li>
                <li className="link"><Link to="/instant-consultation">Instant Consultation</Link></li>
                <li className="link"><Link to="/reviews">Reviews</Link></li>

                {isLoggedIn ? (
                    <>
                        <li onClick={handleDropdown} className="link welcome-user">
                            <p>Welcome, {username}</p>
                            {showDropdown && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/profile">Your Profile</Link></li>
                                    <li><Link to="/reports">Your Reports</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="link">
                            <button className="btn2" onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/signup">
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/Login">
                                <button className="btn1">Login</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
