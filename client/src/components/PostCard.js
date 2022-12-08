import React,{ useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { AiOutlineHeart } from "react-icons/ai";

function PostCard() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
      fetch("/posts")
        .then((r) => r.json())
        .then(setPost);
    }, []);

  //   function handlelikes(){
  //     const updateObj = {
  //       likes: posts.likes + 1,
  //     }
  //     fetch(`/likes`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       updateObj
  //     }),
  //   })
  // }

  return (
    <>
    {posts.map((post) => (
      <Card style={{ width: '38rem' }} id="insta">
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title>
          <AiOutlineHeart />
        </Card.Title>
        <Card.Text>
          {post.likes} likes
        </Card.Text>
        <Card.Text>
          posted by - {post.user.username}
        </Card.Text>
      </Card.Body >
    </Card>
     ))}
  </>

  )
}

export default PostCard