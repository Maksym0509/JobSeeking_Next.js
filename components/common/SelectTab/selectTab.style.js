import styled from 'styled-components'

export const TabsContainer = styled.div`
  display: flex;
  width: 222px;
  justify-content: space-between;
  height: 56px;
  @media only screen and (max-width: 600px) {
    height: 24px;
  }
`
export const StyledTab = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 75px;
  color: #3E4598;
  display: flex;
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};
  width: 93px;
  justify-content: start;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    height: 20px;
    width: 63px;
  }
  & span {
    border-bottom: ${(props) => (props.isActive ? `3px solid #D92CFF` : `none`)};
  }
`

export const BUttonContent = styled.button`
  background: #D92CFF;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  border: none;
  font-weight: 600;
  height: 32px;
  width: 114px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 120px;
    font-size: 11px;
    font-weight: 700;
    height: 27px;
  }
`
