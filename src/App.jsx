import React, { useState } from 'react'
import {GlobalStyle, GeneralContainer, ProfilesSection} from './GlobalStyle'
import {Header} from './components/Header/Header'
import {Matches} from './components/Matches/Matches'
import {ProfileCard} from './components/ProfileCard/ProfileCard'


function App() {

  const [showMatches, setShowMatches] = useState(false)
  
  return (
    <GeneralContainer>
      <GlobalStyle/>
      <ProfilesSection>
          <Header showMatches={showMatches} setShowMatches={setShowMatches}/>
          {showMatches? <Matches/> : <ProfileCard/>}
      </ProfilesSection>
    </GeneralContainer>
  )
}

export default App
