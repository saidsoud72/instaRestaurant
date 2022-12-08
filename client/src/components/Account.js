import React from 'react'
import  Edit  from './Edit'
function Account({ profile }) {
  
    return (
        <>
      <div className='accounts'>
          <div className='profile-pic'>
              <img class="pic" src={profile.profile_pic} alt="pfp" />
              <div className='content'>
              <h2>{profile.username}</h2>
              <p>{profile.email}</p>
              <div className='bio'>
                  <p>
                      {profile.bio}
                  </p>
                  <div className="btn-profile">
                  </div>
              </div>
              </div>
          </div>
          <div className='details-card'>
              <div className="followers">
                  <p>Friends Count</p>
                  <p>{profile.followers}</p>
              </div>
          </div>
      </div>
      <Edit profile={profile}/>
      </>
  )
}

export default Account