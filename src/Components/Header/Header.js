import React from 'react'
import logo from '../../assets/Logo.svg'
import { StyledHeader, SearchInput, SearchButton, ProfilePopover } from './Header.styles'
import Flex from '../../layouts/Flex'
import { mdiDotsGrid } from '@mdi/js';
import WideButton from '../WideButton/WideButton'
import BoardName from '../BoardName/BoardName';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo"/>
        <Flex>
            <BoardName />
            <WideButton mr={'10em'} iconType={mdiDotsGrid} btnText='All Board'/>
        </Flex>
      </div>
      <div>
        {/* give position absolute to SearchButton and position relative to outer div */}
        <div>
            <SearchInput placeholder='Keyword...' />
            <SearchButton>Search</SearchButton>
        </div>
        <ProfilePopover></ProfilePopover>
      </div>
    </StyledHeader>
  )
}

export default Header