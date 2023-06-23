import styled from 'styled-components'

export const BrowseJobsContainer = styled.div`
  width: 100%;
  height: 599px;
  display: block;
  background: #F5F5F5;
  padding: 41px 209px 59px 207px;
  justify-content: space-between;
  font-family: Lato;
  @media only screen and (max-width: 600px) {
    padding: 26px 29px 38px 35px;
    height: 606px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    padding-left: 64px;
  }
  @media (min-width: 900px) and (max-width: 1366px) {
    padding-left: 120px;
  }
`

export const JobCardsContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ViewAllContainer = styled.div`
  width: 18%;
  margin-top: 50px;
  height: 83px;
  padding-bottom: 18px;
  & div {
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #3E4598;
    display: flex;
    justify-content: center;
  }

  & span {
    margin-top: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    display: flex;
    justify-content: center;
    color: #D92CFF;
  }
`;