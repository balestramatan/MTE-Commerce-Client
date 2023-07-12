import React, {useState} from "react"
import {Flipper} from "react-flip-toolkit"

import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"

import DropdownContainer from "./DropdownContainer"
import CompanyDropdown from "./DropdownContents/CompanyDropdown"
import DevelopersDropdown from "./DropdownContents/DevelopersDropdown"
import ProductsDropdown from "./DropdownContents/ProductsDropdown"

const navbarConfig = [
    {title: "Products", dropdown: ProductsDropdown},
    {title: "Developers", dropdown: DevelopersDropdown},
    {title: "Company", dropdown: CompanyDropdown}
]

const AnimatedNavbar = () => {
    const [animationState, setAnimationState] = useState<{ activeIndices: [] | number[], animatingOut: boolean }>({
        activeIndices: [],
        animatingOut: false
    });
    const [animatingOutTimeout, setAnimatingOutTimeout] = useState<number | null>(null);
    const resetDropdownState = (i: number | []) => {
        setAnimationState({
            activeIndices: typeof i === "number" ? [i] : [],
            animatingOut: false
        });
        setAnimatingOutTimeout(null);
    }

    const onMouseEnter = (i: any) => {
        if (animatingOutTimeout) {
            clearTimeout(animatingOutTimeout)
            resetDropdownState(i)
            return
        }
        if (animationState.activeIndices[animationState.activeIndices.length - 1] === i)
            return

        setAnimationState({
            activeIndices: animationState.activeIndices.concat(i),
            animatingOut: false
        })
    }

    const onMouseLeave = () => {
        setAnimationState({animatingOut: true, activeIndices: animationState.activeIndices});
        setAnimatingOutTimeout(setTimeout(
            resetDropdownState,
            250
        ))
    }

    let CurrentDropdown: any
    let PrevDropdown: any
    let direction: any

    const currentIndex = animationState.activeIndices[animationState.activeIndices.length - 1]
    const prevIndex =
        animationState.activeIndices.length > 1 &&
        animationState.activeIndices[animationState.activeIndices.length - 2]

    if (typeof currentIndex === "number")
        CurrentDropdown = navbarConfig[currentIndex].dropdown
    if (typeof prevIndex === "number") {
        PrevDropdown = navbarConfig[prevIndex].dropdown
        direction = currentIndex > prevIndex ? "right" : "left"
    }

    return (
        <Flipper
            flipKey={currentIndex}
            spring={{stiffness: 10, damping: 10}}
        >
            <Navbar onMouseLeave={onMouseLeave}>
                {navbarConfig.map((n, index) => {
                    return (
                        <NavbarItem
                            key={n.title}
                            title={n.title}
                            index={index}
                            onMouseEnter={onMouseEnter}
                        >
                            {currentIndex === index && (
                                <DropdownContainer
                                    direction={direction}
                                    animatingOut={animationState.animatingOut}
                                >
                                    {CurrentDropdown}
                                    {PrevDropdown}
                                </DropdownContainer>
                            )}
                        </NavbarItem>
                    )
                })}
            </Navbar>
        </Flipper>
    )
}

export default AnimatedNavbar
