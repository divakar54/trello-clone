import React from 'react'
import titleImage from '../../assets/unsplash.jpg'
import Chip from '../Chip/Chip'
import TeamMemberList from '../TeamMemberList/TeamMemberList'
import {StyledCard, StyledImage} from './Card.styles'
const Card = () => {
  return (
    <StyledCard>
        <div>
          <StyledImage src={titleImage} alt="title"/> 
        </div>
        <div>✋🏿 Move anything that is actually started here</div> 
        <div>
          <Chip />
          <Chip />
        </div>
        <TeamMemberList />
    </StyledCard>
  )
}

export default Card
