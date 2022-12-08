import React from 'react'
import { Card } from 'react-bootstrap'

// const [images, setImages] = ([])

function MyPosts({ profile }) {
  return (
    <>
    <div className='myposts'>
    {profile.posts.map((prof) => {
      return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prof.image} />
    </Card>
)})}
</div>
  </>
  )
}
export default MyPosts