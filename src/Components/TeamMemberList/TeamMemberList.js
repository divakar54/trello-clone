import React from 'react'
import TeamMemberItem from '../TeamMemberItem/TeamMemberItem'
import people from '../../assets/people.jpg'
import { TeamMemberListContainer } from './TeamMemberList.styles'

const TeamMemberList = () => {
  const imageList = [
    {
      id: 1,
      url: people,
      alt: "people"
    }
    ,{
      id: 2,
      url: people,
      alt: "people"
    },
    {
      id: 3,
      url: people,
      alt: "people"
    }
  ]
  return (
    <TeamMemberListContainer>
        {
          imageList.map((image) => {
            return (
              <TeamMemberItem url={image.url} alt={image.alt} />
            )
          })
        }
    </TeamMemberListContainer>
  )
}

export default TeamMemberList