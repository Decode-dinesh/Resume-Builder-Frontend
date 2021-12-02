import React, {useContext} from 'react';
import { UserContext } from '../../App';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function Navbar() {

    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext)

    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/signin" className="logOutButton"
                    onClick={() => {
                        navigate('/signin')
                        localStorage.clear()
                        dispatch({ type: "CLEAR" })
                    }}
                >Logout</Link></li>
            ]
        } else {
            return [
                <li><Link to="/signin" className="logOutButton">Sign In</Link></li>,
                <li><Link to="/signup" className="logOutButton">Sign Up</Link></li>
            ]
        }
    }

    return (
        <nav className="navbarStyling">
            <div className="nav-wrapper">
                <container>
                    <Link to={state ? "/" : "/signin"} className="logoStyle left">Resume Builder</Link>
                    <ul id="nav-mobile" className="right">
                        {renderList()}
                    </ul>
                </container>
            </div>
        </nav>
    )
}
