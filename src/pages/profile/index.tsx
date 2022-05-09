import { Container } from './styles'
import profileImg from '../../assets/male-profile.jpg'
import { Camera } from 'phosphor-react'
import { InfoProfile } from '../../components/infoProfile'
import { useState } from 'react'

export function Profile () {
  const [ isEditProfile, setIsEditProfile ] = useState(false)

  const handleStateProfileEdit = () => {
    setIsEditProfile(!isEditProfile)
  }

  return (
    <Container>
      <div className="title-content">
        <span></span>
        { isEditProfile ? <h2>Edit Profile</h2> : <h2>Profile</h2> }
      </div>
      <div className="content">
        <div className="photo">
          <button
            className="photoIcon"
            style={{
              backgroundImage: `url(${profileImg})`,
            }}
          >
            <Camera />
          </button>
        </div>
        <InfoProfile onProfileChangeStateProfileEdit={handleStateProfileEdit} onProfileStateProfileEdit={isEditProfile} />
      </div>
    </Container>
  )
}
