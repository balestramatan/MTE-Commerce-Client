import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {menuItemType} from "../../interfaces/interfaces";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  padding: 1rem;
  color: grey;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
  margin: 0 2rem;

  &:hover .dropdown {
    display: block;
    animation: ${fadeIn} 0.3s ease-in-out;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #555;
  padding: 1rem;
  color: white;
  z-index: 1;
`;

const mockMenuItems: menuItemType[] = [
    {
        id: 'menu-item-1',
        label: 'Menu Option 1',
    },
    {
        id: 'menu-item-2',
        label: 'Menu Option 2',
    },
    {
        id: 'menu-item-3',
        label: 'Menu Option 3'
    }
];

const Header = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [menuItems, setMenuItems] = useState<menuItemType[]>(mockMenuItems);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <HeaderContainer>
            <Menu>
                {
                    menuItems.map((menuItem: menuItemType) => (
                        <MenuItem key={menuItem.id} id={menuItem.id} onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}>
                            {menuItem.label}
                            {isDropdownVisible && (
                                <Dropdown className="dropdown">
                                    <h3>Dropdown Content {menuItem.id}</h3>
                                    <p>Some more details here...</p>
                                </Dropdown>
                            )}
                        </MenuItem>
                    ))
                }
            </Menu>
        </HeaderContainer>
    );
};

export default Header;
