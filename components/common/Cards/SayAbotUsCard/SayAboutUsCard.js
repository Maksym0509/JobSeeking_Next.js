import React from "react";
import { CardContainer, PanelContainer, AvatarContainer, DescriptionContainer, NameContainer } from "./sayAboutUsCard.style";
import { IconContainer } from "../WhyJobsCard/whyJobsCard.style";

export const SayAboutUsCard = (props) => {
    const {avatar, starCount, description, name} = props

    return (
        <>
        <CardContainer>
            <AvatarContainer>
                <img src={avatar} />
            </AvatarContainer>
            <PanelContainer>
                <IconContainer>
                    <img src="/images/icons/icon-comma.svg" width={21} height={16} />
                </IconContainer>
                <IconContainer style={{marginTop: '11px'}}>
                    <img src="/images/icons/icon-stars.svg" width={96} height={16} />
                </IconContainer>
                <DescriptionContainer>{description}</DescriptionContainer>
                <NameContainer>{name}</NameContainer>
            </PanelContainer>
        </CardContainer>
        </>
    )
}