import React from 'react'
import Flex from '../../layouts/Flex'
import { StyledIcon, AllBoard } from './WideButton.styles'
import Icon from '@mdi/react'

const WideButton = (props) => {
  return (
    <Flex>
            <AllBoard mr={props.mr}>
              <Flex justifyContent="flex-end" alignContent="start">
                <Icon path={props.iconType}
                        title="Open Boards"
                        size={0.75}
                        horizontal
                        vertical
                        rotate={props.rotate}
                        color="#828282"
                    />
                {props.btnText}
              </Flex>
            </AllBoard>
    </Flex>
  )
}

export default WideButton