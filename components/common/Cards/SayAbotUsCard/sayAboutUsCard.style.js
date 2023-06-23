import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 58px;
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  margin: auto;
  position: relative;
  top: 14px;
  & img{
    border-radius: 50%;
  }
`;

export const PanelContainer = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 26px 24px 17px 24px;
  height: 228px;
`;

// export const TitleContainer = styled.div`
//   margin-top: 28px;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 45px;
//   text-align: center;
//   text-transform: capitalize;
//   color: #3E4598;
// `;

export const DescriptionContainer = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #414042;
  width: 100%;
  margin-top: 14px;
`;

export const NameContainer = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 72px;
  text-align: center;
  color: #414042;
`;
