import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

function EditProfile({ profile }) {
    const [username, setUsername] = useState(profile.username);
    const [email, setEmail] = useState(profile.email);
    const [profilepic, setProfilePic] = useState(profile.profile_pic);
    const [bio, setBio] = useState("hello world... its me");
    // const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/updateprofile", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            profile_pic: profilepic,
            bio
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((data) => console.log(data));
          } 
        });
      }
  return (
    <div className='w-100' id='ting' style={{ maxWidth: "370px" }}>
    <Form onSubmit={handleSubmit}>
    <Form.Group id="title">
    <Form.Label>Change username</Form.Label>
    <Form.Control
      type="text"
      autoComplete="off"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      />
    </Form.Group>
    <Form.Group id="category">
    <Form.Label>update email</Form.Label>
    <Form.Control
      type="text"
      autoComplete="off"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />
    </Form.Group>

  <Form.Group id="location">
    <Form.Label>update profile picture</Form.Label>
    <Form.Control
      type="text"
      value={profilepic}
      onChange={(e) => setProfilePic(e.target.value)}
      required
    />
  </Form.Group>
  <Form.Group id="image_url_event">
    <Form.Label>bio</Form.Label>
    <Form.Control
      type="text-area"
      value={bio}
      onChange={(e) => setBio(e.target.value)}
    />
  </Form.Group>
  <br />
  <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Edit"}</Button>
    {/* {errors.map((err) => (
      <Error key={err}>{err}</Error>
    ))} */}
    </Form>
    </div>
  )
}

export default EditProfile