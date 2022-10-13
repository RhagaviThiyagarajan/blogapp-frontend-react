import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

function TopBar() {
  const {user,dispatch} = useContext(Context);


  const PF ="https://blogapp-node-portfolio.herokuapp.com/images/"

  const handleLogout=()=>
  {
    dispatch({
      type:"LOGOUT"
    });
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">Center</div>
      <ul className="topList">
        <li className="topListItem">
          
          <Link className="link" to="/" >
            HOME
          </Link>
        </li>

        {/* <li className="topListItem">
          <Link className="link" to="/">
            ABOUT
          </Link>
        </li> */}

        {/* <li className="topListItem">
          <Link className="link" to="/">
            CONTACT
          </Link>
        </li> */}


        <li className="topListItem">
          <Link className="link" to="/write">
            WRITE
          </Link>
        </li>
<li className="topListItem" onClick={handleLogout}>
    {user && "LOGOUT"}
      </li>
      </ul>
      <div className="topRight">
       
        {user ? (
           <Link to="/settings">
          <img
            className="topImg"
            src={PF+user.profilePicture}
            alt=""
          />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            
            </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
