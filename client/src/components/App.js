import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Account from "./Account";
import Posts from "./Posts";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import CreateEvents from "./CreateEvents";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return  (
    <>
    <Navbar profile={user} setUser={setUser}/>

      <Routes>
        <Route path="/" element={ <Header/> } />
        <Route exact path="/trending" element={<Posts profile={user}/>} />
        <Route exact path="/createevents" element={<CreateEvents user={user}/>} />
        <Route exact path="/accounts" element={<Account profile={user} />} />
      </Routes>
    </>
  )
}

export default App;
