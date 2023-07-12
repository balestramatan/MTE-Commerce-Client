import React from "react"
import styled from "styled-components"

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 18px;
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;

  &:hover, &:focus {
    opacity: 0.7;
    outline: none;
  }
`

const NavbarItemEl = styled.li`
  position: relative;
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`

interface IProps {
    onMouseEnter: (i: number) => void;
    title: string;
    index: number;
    children: React.ReactNode;
}

const NavbarItem = (props: IProps) => {
    const {title, children} = props
    const onMouseEnter = () => {
        props.onMouseEnter(props.index)
    }

    return (
        <NavbarItemEl onMouseEnter={onMouseEnter} onFocus={onMouseEnter}>
            <NavbarItemTitle>{title}</NavbarItemTitle>
            <DropdownSlot>{children}</DropdownSlot>
        </NavbarItemEl>
    )
}

export default NavbarItem;
