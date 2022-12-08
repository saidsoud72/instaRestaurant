import React, {useState} from 'react'
import Specific from './Specific';
import PostCard from './PostCard';
import { MdOutlineAddToPhotos } from "react-icons/md";

function Posts({ profile }) {
  const [show,setShow]=useState(false);
  return (
    <>
    <div className='newpost'>
      <MdOutlineAddToPhotos onClick={()=>{setShow(true)}}></MdOutlineAddToPhotos>
      </div>
      {show && <Specific show={show} profile={profile} onClose={()=>setShow(false)} />}
      <PostCard />
    </>
  )
}

export default Posts