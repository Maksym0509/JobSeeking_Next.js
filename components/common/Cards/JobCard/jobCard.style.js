import styled from "styled-components";

export const CardContainer = styled.div`
  border-bottom: 5px solid rgba(217, 44, 255, 0.5);
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const LocationCardContainer = styled.div`
  margin-top: 53px;
  border-bottom: 5px solid rgba(217, 44, 255, 0.5);
  width: 18%;
  display: block;
  height: 83px;
  padding-bottom: 18px;
`;

export const IndustryIcon = styled.span`
  margin: auto;
  /* width: 50%; */
`;

export const DetailContainer = styled.div`
  width: 50%;
  margin: auto;
`;

export const IndustryTitle = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  color: #3E4598;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const LocationTitle = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  color: #3E4598;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const IndustryDescription = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  color: #3E4598;
  margin-bottom: 20px;
  width: 90%;
`;

export const IndustryMore = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #D92CFF;
`;