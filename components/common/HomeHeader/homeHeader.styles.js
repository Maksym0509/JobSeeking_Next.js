import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 101px;
  display: flex;
  background: #808EE0;
  padding-left: 244px;
  padding-right: 99px;
  justify-content: space-between;
  font-family: Lato;
  @media only screen and (max-width: 600px) {
    padding-left: 32px;
    padding-right: 32px;
    height: 56px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    padding-left: 64px;
    height: 56px;
  }
  @media (min-width: 900px) and (max-width: 1366px) {
    padding-left: 120px;
    height: 56px;
  }
`
export const ImageWrapper = styled.div`
  height: inherit;
  display: flex;
  gap: 50.3px;
`
export const NavItem = styled.div`
  margin: auto;
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    // display: none;
  }
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media (min-width: 600px) and (max-width: 900px) {
  }
`
export const StyledLogo = styled.img`
  object-fit: contain;
  width: 158px;
  height: 33px;
  margin: auto;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 99px;
    height: 19px;
  }
`
