import React from 'react'
import { HeaderContainer, ImageWrapper, NavItem, StyledSelect, SelectWrapper, StyledLogo } from './homeHeader.styles'
// import Logo from '../../assets/logo.png'
import useIsMobile from '../../../hooks/hooks'
import { IconButton } from '../../TitleBar/titleBar.styles'
import Link from 'next/link'

export const HomeHeader = (props) => {
  const {title, text, buttonTitle, setLocation, location} = props
  const isMobile = useIsMobile()

  return (
    <div>
    <HeaderContainer>
        <ImageWrapper>
            <Link href="/">
                <StyledLogo
                    src="/images/logo.png"
                    alt="logo"
                />
            </Link>
            <Link href="about">
                <NavItem>
                    <span>About Us</span>
                </NavItem>
            </Link>
            <NavItem>
                <span>View Jobs</span>
            </NavItem>
            <NavItem>
                <span>Blog</span>
            </NavItem>
        </ImageWrapper>
        <SelectWrapper>
            <StyledSelect onChange={(e) => setLocation(e.target.value)} value={location}>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="CA">CA</option>
                <option value="ZA">ZA</option>
            </StyledSelect>
        </SelectWrapper>
        {isMobile ? <IconButton style={{marginRight: '0px'}}>
            <img
                src="/images/icons/icon-menu.svg"
                width={19}
                height={16}
            />
        </IconButton> : null}
    </HeaderContainer>
    </div>
  )
}
