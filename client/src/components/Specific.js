import React, { useState } from 'react'
import { Form, Card, Button, Container } from 'react-bootstrap'

function Specific({ profile, onClose }) {
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [userId, setUserId] = useState(profile.id);
    const [likes, setLikes] = useState("0");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/addpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image,
            caption,
            user_id: userId,
            likes
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((data) => console.log(data));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
  return (
      <>
        <div className="overlay">
        <div className="overlay-inner">
        <Container className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "370px" }}>
          <button className="close" onClick={onClose}>X</button>
          <br/>
              <h4 style={{ textAlign: "center", paddingBottom: "30px" }}>Create Post</h4>
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="image">
                      <Form.Control name="image_url" 
                      placeholder="Enter image link" 
                      type="text" 
                      value={image} 
                      onChange={(e) => setImage(e.target.value)}
                      required/>
                  </Form.Group>
                  <Form.Group id="post-caption">
                      <Form.Control name="post-caption"
                       placeholder='Enter post caption'  
                       type="text" 
                       value={caption} 
                       onChange={(e) => setCaption(e.target.value)}
                       required/>
                  </Form.Group>
                  <br />
                  <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Add Post"}</Button>
              </Form>
        </div>
        </Container>
        </div>
    </div>
      </>
  )
}

export default Specific