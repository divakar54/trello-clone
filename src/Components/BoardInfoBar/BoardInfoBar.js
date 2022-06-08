import React from 'react'
import Main from '../../layouts/Main'
import Flex from '../../layouts/Flex'
import WideButton from '../WideButton/WideButton'
import { mdiLock } from '@mdi/js';
import TeamMemberList from '../TeamMemberList/TeamMemberList';

const BoardInfoBar = () => {
  return (
      <Main>
        <Flex>
            <WideButton mr='2.5em' rotate={180} iconType={mdiLock} btnText='Private' />
            <TeamMemberList />
        </Flex>
      </Main>
  )
}

export default BoardInfoBar