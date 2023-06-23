import React from 'react'
import { FooterContainer, ListContainer, SocialLinks, StyledLogo, TextLinks } from './homeFooter.style'
// import Logo from '../../assets/logo.png'
import useIsMobile from '../../../hooks/hooks'

export const HomeFooter = () => {
  const isMobile = useIsMobile()

  return (
    <div>
    <FooterContainer>
        <ListContainer>
            <StyledLogo
                src="/images/logo.png"
                alt="logo"
            />
            <SocialLinks>
                <img src="/images/icons/icon-facebook.png" />
                <img src="/images/icons/icon-linkEdin.png" />
                <img src="/images/icons/icon-twitter.png" />
            </SocialLinks>
        </ListContainer>
        <ListContainer>
            <TextLinks>Blog</TextLinks>
            <TextLinks>About Us</TextLinks>
        </ListContainer>
        <ListContainer>
            <TextLinks>Contact us</TextLinks>
            <TextLinks>Privacy policy</TextLinks>
            <TextLinks>Terms and conditions</TextLinks>
        </ListContainer>
        <ListContainer>
            <TextLinks>Browse jobs by Category</TextLinks>
            <TextLinks>Browse jobs by Location</TextLinks>
            <TextLinks>Browse jobs by Title</TextLinks>
        </ListContainer>
        <ListContainer>
            <TextLinks>JobsBear UK</TextLinks>
            <TextLinks>JobsBear US</TextLinks>
            <TextLinks>JobsBear CA</TextLinks>
            <TextLinks>JobsBear ZA</TextLinks>
        </ListContainer>
    </FooterContainer>
    </div>
  )
}
