import React from 'react'
import styled from 'styled-components'

const Flex = (props) => {

  const FlexDiv = styled.div.attrs(props => ({
    justifyContent : props.justifyContent || "flex-start",
    alignItems : props.alignItems || "center"
  }))`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
  `

  return (
    <FlexDiv>
        {props.children}
    </FlexDiv>
  )
}

export default Flex