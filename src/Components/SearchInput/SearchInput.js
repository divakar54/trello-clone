import React from 'react'
import { Input, SearchButton } from './SearchInput.styles'

const SearchInput = () => {
  return (
    <div>
        <Input placeholder='keyword...'/>
        <SearchButton>Search</SearchButton>
    </div>
  )
}

export default SearchInput