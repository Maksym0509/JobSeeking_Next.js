import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  height: 199px;
  display: flex;
  background: #808EE0;
  padding: 42px 287px 42px 212px;
  justify-content: space-between;
  font-family: Lato;
  gap: 90px;
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
export const SocialLinks = styled.div`
  margin-left: 10px;
  margin-top: 27px;
  display: inline-flex;
  gap: 24px;
`;

export const TextLinks = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #FFFFFF;
  /* flex: none;
  order: 1;
  flex-grow: 0; */
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLogo = styled.img`
  object-fit: contain;
  width: 116px;
  height: 21px;
`
