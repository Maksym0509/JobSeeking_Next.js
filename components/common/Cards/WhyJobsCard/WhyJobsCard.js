import React from "react";
import { CardContainer, TitleContainer, DescriptionContainer, IconContainer } from "./whyJobsCard.style";
import { ButtonLarge } from "../../Button/Button";

export const WhyJobsCard = (props) => {
    const {title, description, iconUrl} = props

    return (
        <>
        <CardContainer>
            <IconContainer>
            <img src={iconUrl} width={58} height={58} />
            </IconContainer>
            <TitleContainer>{title}</TitleContainer>
            <DescriptionContainer>{description}</DescriptionContainer>
            <ButtonLarge title="Learn more >" />
        </CardContainer>
        </>
    )
}