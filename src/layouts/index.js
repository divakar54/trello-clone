import React from 'react'
import Header from './Header/index'

const Layout = (props) => {
  return (
    <div>
        <Header />
        { props.children }
    </div>
  )
}

export default Layout