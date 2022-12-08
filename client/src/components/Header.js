import React from 'react'
import EventList from './EventList'
let headerPic = require("../Houses.gif")

function Header() {
  return (
      <>
      <div className='header-comp'>
          <div className='headertext'>
              <h2>Get updates on all the buzzing
                  <br />
                  Post and events in your neighborhood
              </h2>
              <p>
                  Catch up with your neighbors and network
                  <br />
                  see all available events
              </p>
          </div>

    <div className='headerImage'>
        <img src={headerPic} alt={headerPic}></img>
    </div>
      </div>
      <div className='header-events'>
      <h2>Events</h2>
      <br />
      <p>Having fun while still hanging out
          <br/>
          click to see the events
      </p>
      </div>
      <div className='listComponent'>
          <EventList />
        </div>
    </>
  )
}

export default Header