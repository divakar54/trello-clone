import React from 'react'
import { StyledDiv, StyledImage } from './TeamMemberItem.styles'
import people from '../../assets/people.jpg'

const TeamMemberItem = (props) => {
  return (
    <StyledDiv>
        <StyledImage src={people} alt='people' />
    </StyledDiv>
  )
}

export default TeamMemberItem