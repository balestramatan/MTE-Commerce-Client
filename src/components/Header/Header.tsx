import React, {useState, useRef} from "react";
import styled, {keyframes} from "styled-components";
import {MenuItemType} from "../../interfaces/interfaces";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: grey;

  border: 1px solid grey;
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
    background-color: white;
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
  color: grey;
  z-index: 1;
  border: 1px solid grey;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
`;

const Logo = styled.div`
  background-color: #555;
`;

const Profile = styled.div`
  background-color: red;
`;

const mockMenuItems: MenuItemType[] = [
    {
        id: "menu-item-1",
        label: "Menu Option 1",
    },
    {
        id: "menu-item-2",
        label: "Menu Option 2",
    },
    {
        id: "menu-item-3",
        label: "Menu Option 3",
    },
];

const Header = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

    const handleMouseEnter = (menuItemId: string) => {
        setActiveMenuItem(menuItemId);
    };

    return (
        <HeaderContainer>
            <Logo>Logo</Logo>
            <Menu>
                {mockMenuItems.map((menuItem: MenuItemType) => (
                    <MenuItem key={menuItem.id} onMouseEnter={() => handleMouseEnter(menuItem.id)}>
                        {menuItem.label}
                        {(
                            <Dropdown className="dropdown">
                                <h3>Dropdown Content {menuItem.id}</h3>
                                <p>Some more details here...</p>
                            </Dropdown>
                        )}
                    </MenuItem>
                ))}
            </Menu>
            <Profile>Profile</Profile>
        </HeaderContainer>
    );
};

export default Header;
