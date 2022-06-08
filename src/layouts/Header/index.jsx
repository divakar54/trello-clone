import logo from '../../assets/Logo.svg'
import { StyledHeader, ProfilePopover } from './Header.styles'
import BoardName from '../../Components/BoardName/BoardName'
import WideButton from '../../Components/WideButton/WideButton'
import SearchInput from '../../Components/SearchInput/SearchInput'
import Flex from '../Flex'
import { mdiDotsGrid } from '@mdi/js'

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
        <SearchInput />
        <ProfilePopover></ProfilePopover>
      </div>
    </StyledHeader>
  )
}

export default Header