import styled from 'styled-components'

export const TitleBarContainer = styled.div`
  width: 100%;
  height: 531px;
  padding-left: 244px;
  padding-right: 25px;
  padding-top: ${(props) => props.about ? '36px' : '57px'};
  display: flex;
  justify-content: space-between;
  font-family: Lato;
  background-image: url(images/background.png);
  background-size: ${(props) => props.about ? `100% 30%` : 'cover'};
  background-repeat: no-repeat;
  background-position-y: ${(props) => props.about ? `100%` : '0%'};
  @media only screen and (max-width: 600px) {
    padding-left: 32px;
    padding-top: 98px;
    height: 416px;
    background-image: url(images/background-sm.png);
  }
  @media (min-width: 600px) and (max-width: 900px) {
    padding-left: 50px;
    padding-top: 57px;
    height: 416px;
  }
  @media (min-width: 900px) and (max-width: 1366px) {
    padding-left: 100px;
    padding-top: 57px;
    height: 480px;
  }
`
export const BearImg = styled.div`
  width: 549px;
  height: 454px;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    margin: auto;
    width: 300px;
    height: 280px;
  }
`
export const VerticalDivider = styled.div`
  width: 1px;
  height: 29px;
  margin: auto;
  border: 1px solid #E5E5E5;
`

export const LeftContainer = styled.div`
  width: 60%;
  height: inherit;
  display: flex;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 85px;
  color: #3E4598;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    font-size: 45px;
    line-height: 45px;
    width: 100%;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 55px;
    line-height: 60px;
    width: 100%;
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: 65px;
    line-height: 70px;
    width: 70%;
  }
`
export const SearchBar = styled.div`
  width: 100%;
  height: 63px;
  background-color: white;
  background: #FFFFFF;
  border-radius: 5px;
  padding-left: 23px;
  padding-right: 20px;
  display: flex;
  gap: 16px;
  @media only screen and (max-width: 600px) {
    padding-right: 9px;
    height: 50px;
  }
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`
export const ButtonInput = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 16px;
`
export const IconButton = styled.div`
  width: 20px;
  height: 20px;
  margin: auto;
  display: flex;
  @media only screen and (max-width: 600px) {
    &:hover {
      background-color: gray;
    }
  }
`

export const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  margin: auto;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px) {
    text-transform: 10px;
  }
`

export const MobileChangedText = styled.span`
  text-transform: ${(props) => (props.isMobile ? `lowercase` : `capitalize`)};
`;

export const SubTextContainer = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700; 
  line-height: 75px;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
`

export const NavItem = styled.div`
  margin: auto;
  color: white;
`
export const StyledSelect = styled.select`
  background: #808EE0;
  color: white;
  border: 1px solid white;
  height: 40px;
  width: 57px;
`
export const SelectWrapper = styled.div`
  margin: auto;
  margin-right: 0px;
`
export const AboutTextContainer = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #1D1D1B;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
`;
