import styled from 'styled-components'

export const SayAboutUsContainer = styled.div`
  width: 100%;
  height: 631px;
  display: block;
  background: #F5F5F5;
  padding: 91px 209px 139px 209px;
  justify-content: space-between;
  font-family: Lato;
  background: url("/images/background-sayAboutUs.png") no-repeat;
  background-size: 100% 44%;
  background-position-y: 100%;

  @media only screen and (max-width: 600px) {
    padding: 26px 29px 38px 35px;
    height: 329px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    padding-left: 64px;
    height: 429px;
  }
  @media (min-width: 900px) and (max-width: 1366px) {
    padding-left: 80px;
    height: 550px;
  }
`

export const SayAboutUsCardContainer = styled.div`
  width: 100%;
  /* height: 400px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;