import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em 1em;
    box-shadow: 0px 2px 2px 0px #0000000D;

`

export const SearchInput = styled.input`
    border-radius: 8px;
    border: none;
    /* margin: 1em; */
    box-shadow: 2px 2px 2px 0px #0000000D;
    padding: 0.5em 1em;
    /* outline: solid; */

`

export const SearchButton = styled.button`
    position: relative;
    
    right: 25%; //give values in px
    padding: 0.5em 1em;
    font-size: 12px;
    background-color: #2F80ED;
    border-radius: 8px;
    border: none;
    color: white;
`

export const BoardName = styled.div`
    margin-right: 1.5em;
    padding-right: 1.5em;
    border-right: 2px solid #E0E0E0;
`

export const ProfilePopover = styled.div`

`