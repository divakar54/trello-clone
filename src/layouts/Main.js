import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
  background-color: '#98b39f';
  color: '#98b39f';
  padding: 2em 1.5em;
` 
const Main = (props) => {
  return (
    <StyledMain>{props.children}</StyledMain>
  )
}

export default Main