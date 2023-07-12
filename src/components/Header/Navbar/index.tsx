import React from "react"
import styled from "styled-components"

const NavbarEl = styled.nav`
  margin: auto;
`

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`

interface IProps {
    children: React.ReactNode;
    onMouseLeave: () => void;
}

const Navbar = (props: IProps) => {
    const {children, onMouseLeave} = props
    return (
        <NavbarEl onMouseLeave={onMouseLeave}>
            <NavbarList>{children}</NavbarList>
        </NavbarEl>
    )
}

export default Navbar
