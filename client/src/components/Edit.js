import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EditProfile from './EditProfile';
import MyPosts from './MyPosts'

function Edit({ profile }) {
  return (
    <div className="tab-container">
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Posts">
        <MyPosts profile={profile} />
      </Tab>
      <Tab eventKey="profile" title="Edit">
        <EditProfile profile={profile}/>
      </Tab>
    </Tabs>
  </div>
  )
}

export default Edit