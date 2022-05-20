import React from 'react'
import Nav from '../../Container/Nav/Nav'
import './profile.css'
import '../../assets/profile.jpg'
import { useSelector } from 'react-redux'
import { selectuser } from '../../features/counter/userSlice'
import { auth } from '../../firebase'

const Profile = () => {

  const user = useSelector(selectuser);
  
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profile_info'>
          <div className='profile_image'>
            <img src='../'/>
          </div>
          <div className='profile_infomation'>
            <div className='profile_document'>
              <p>{user.email}</p>
            </div>
            <div className='profile_plans'>
              <h4>Plans (Current Plan:premium)</h4>
            </div>
          </div>
        </div>
        <div className='profileScreen_option'>
          <h4>Renewal date:04,005,2022</h4>
          <div className='profile_options'>
            <div className='profile_standand'>
              <div className='profile_standard_words'>
                <h6>Netflix Standard</h6>
                <p>1080p</p>
              </div>
              <div className='subscrib'>
                <button>Subscribe</button>
              </div>
            </div>
            <div className='profile_standand'>
              <div className='profile_standard_words'>
                  <h6>Netflix Basic</h6>
                  <p>480p</p>
                </div>
                <div className='subscrib'>
                  <button>Subscribe</button>
                </div>
              </div>
            <div className='profile_standand'>
              <div className='profile_standard_words'>
                  <h6>Netflix Premium</h6>
                  <p>4k+HDR</p>
                </div>
                <div className='subscrib premium'>
                  <button>Current Package</button>
                </div>
              </div>
          </div>
        </div>
       <div className='sign_out'>
         <button onClick={() => {
           auth.signOut();
         }
         }>Sign Out</button>
       </div>
      </div>
    </div>
  )
}

export default Profile