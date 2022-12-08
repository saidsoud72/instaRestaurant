import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Navbar({ profile, setUser }) {
    console.log(profile)

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
  return (
      <>
      <div id="navbar">
          <div className='logo'>
             <Link className="a" to={"/"}><h2>Jirani</h2></Link>
          </div>
          <ul className='nav'>
          <Link className="a" to={'/trending'}>Trending</Link>
          <Link className='a' to={'createevents'}>Events</Link>
          <Link className="a" to={'/accounts'}><img src={profile.profile_pic} className="pfp" alt="pfp"/></Link>
          <Button id="logout" onClick={handleLogoutClick}>
          Logout
        </Button>
          </ul>

      </div>
      </>
  )
}

export default Navbar