import styled from 'styled-components'

export const SiteInfoContainer = styled.div`
  width: 100%;
  height: 674px;
  display: inline-flex;
  background: #F5F5F5;
  padding: 105px 211px 105px 209px;
  justify-content: space-between;
  font-family: Lato;

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

export const InfoContainer = styled.div`
  width: 77%;
  /* height: 400px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 23%;
`;

export const TitleContainer = styled.div`
  color: #3E4598;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  width: 100%;
  margin-bottom: 44px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
`;