import React from 'react'
import { TitleBarContainer, BearImg, LeftContainer, TextContainer, SubTextContainer, VerticalDivider, MobileChangedText, ButtonInput, SearchBar, InputContainer, StyledInput, SelectWrapper, IconButton, AboutTextContainer } from './titleBar.styles'
import { Button } from '../common/Button/Button'
import useIsMobile from '../../hooks/hooks'
import { TextLabel } from '../common/TextLabel/TextLabel'

export const TitleBar = ({about, imgUrl}) => {
  const isMobile = useIsMobile()
  return (
    <TitleBarContainer about={about}>
        {!about ? 
        <LeftContainer>
            <TextContainer>
                <span>We learn{!isMobile ? "." : ","}</span>
            </TextContainer>
            <TextContainer>
                <MobileChangedText isMobile={isMobile}>We</MobileChangedText> <span>understand{!isMobile ? "." : ","}</span>
            </TextContainer>
            <TextContainer>
                <MobileChangedText isMobile={isMobile}>We </MobileChangedText><span style={{color: '#D92CFF'}}>deliver jobs.</span>
            </TextContainer>
            <SubTextContainer>
                <span>Personalizing each and every search for millions of job seekers</span>
            </SubTextContainer>
            <SearchBar>
                {!isMobile ? 
                    <InputContainer>
                    <ButtonInput>
                        <IconButton>
                            <img src="/images/icons/icon-map.svg" width={20} height={20} />
                        </IconButton>
                        <StyledInput placeholder='search jobs, keywords, companies'></StyledInput>
                    </ButtonInput>
                    <VerticalDivider />
                    <ButtonInput>
                        <IconButton>
                            <img src="/images/icons/icon-search.svg" width={20} height={20} />
                        </IconButton>
                        <StyledInput placeholder='Enter location or “remote”'></StyledInput>
                    </ButtonInput>
                    </InputContainer> :
                    <InputContainer>
                        <ButtonInput>
                            <StyledInput placeholder='Search job Titles, keywords, companies'></StyledInput>
                        </ButtonInput>
                    </InputContainer>
                }
                <Button title="Search Jobs"></Button>
            </SearchBar>
        </LeftContainer>
        :
        <LeftContainer>
            <TextLabel text="About us" />
            <AboutTextContainer>Our advanced job recommendation engine leverages machine learning<br /> to deliver personalized recommendations based on user׳s skills<br /> and preferences, making the search process easier.<br />  At JobsBear, we strive to provide a customized experience that helps our<br /> users/job seekers find the right opportunities efficiently and effortlessly.<br /><br />
                JobsBear currently operates in the UK, US, Canada, and South Africa, with plans<br /> to expand into Europe and Latin America. Our team of experienced professionals<br /> is dedicated to delivering the best job search experience to our users.
            </AboutTextContainer>
        </LeftContainer>}
        <BearImg imgUrl={imgUrl} />
    </TitleBarContainer>
  )
}
