import React, {useState} from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

function CreateEvents({ user }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah");
  const [userId, setUserId] = useState(user.id);
  const [image, setImage] = useState("https://previews.123rf.com/images/varijanta/varijanta1604/varijanta160400089/55848269-modern-thin-line-design-concept-for-events-website-banner-vector-illustration-concept-for-informatio.jpg");
  const [likes, setlikes] = useState("0");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/addevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        location,
        user_id: userId,
        description,
        image_url: image,
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
    <div className="container-events">
      <div className="events-images">
        <img src={image} alt="images" />
      </div>
      <div className='w-100' id='ting' style={{ maxWidth: "370px" }}>
        <h2 className="header-event">Create Event</h2>
          {errors.map((err) => (
          <Alert variant="danger">{err}</Alert>
        ))}
        <Form onSubmit={handleSubmit}>
        <Form.Group id="title">
        <Form.Label>event title*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group id="category">
        <Form.Label>Enter Category*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          />
        </Form.Group>

      <Form.Group id="location">
        <Form.Label>Description*</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="current-password"
          required
        />
      </Form.Group>
      <Form.Group id="image_url_event">
        <Form.Label>image url*</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Add event"}</Button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        </Form>
      </div>
    </div>
    </>
  )
}

export default CreateEvents