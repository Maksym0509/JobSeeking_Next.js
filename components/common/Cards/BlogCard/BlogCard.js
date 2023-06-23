import React from "react";
import { CardContainer, TitleContainer, ImgContainer, ReadMore } from "./blogCard.style";

export const BlogCard = (props) => {
    const {title, imgUrl} = props

    return (
        <>
        <CardContainer>
            <ImgContainer imgUrl={imgUrl} />
            <TitleContainer>{title}</TitleContainer>
            <ReadMore>Read more &gt; </ReadMore>
        </CardContainer>
        </>
    )
}