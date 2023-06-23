import styled from "styled-components";

export const CardContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  margin: 0px;
  /* margin: auto; */
  border-radius: 10px;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-image: ${(props) => `url("${props.imgUrl}")`};
`;

export const TitleContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-transform: capitalize;
  color: #0C264C;
  width: 70%;
`;

export const ReadMore = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 17px;
  text-transform: uppercase;
  color: #D92CFF;
`;
