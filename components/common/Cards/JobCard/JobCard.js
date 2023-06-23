import React from "react";
import { CardContainer, DetailContainer, IndustryDescription, IndustryIcon, LocationTitle, IndustryMore, IndustryTitle, LocationCardContainer } from "./jobCard.style";

export const JobCard = (props) => {
    const {isByIndustry, title, description, iconUrl} = props

    return (
        <>
        {isByIndustry ? 
        <CardContainer>
            <IndustryIcon>
                <img src={iconUrl} />
            </IndustryIcon>
            <DetailContainer>
                <IndustryTitle>{title}</IndustryTitle>
                <IndustryDescription>{description}</IndustryDescription>
                <IndustryMore>VIEW JOBS &gt; </IndustryMore>
            </DetailContainer>
        </CardContainer> 
        : 
        <LocationCardContainer>
            <LocationTitle>{title}</LocationTitle>
            <IndustryMore>VIEW JOBS &gt; </IndustryMore>
        </LocationCardContainer>}
        </>
    )
}