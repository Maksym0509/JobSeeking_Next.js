import React from "react";
import { WhyJobsBearCardContainer, WhyJobsBearContainer } from "./whyJobsBear.style";
import { TextLabel } from "../common/TextLabel/TextLabel";
import useIsMobile from '../../hooks/hooks'
import { WhyJobsCard } from "../common/Cards/WhyJobsCard/WhyJobsCard";
import { WhyJobsData } from "./CardData";

export const WhyJobsBear = () => {
    const isMobile = useIsMobile()

    return (
        <WhyJobsBearContainer>
            <TextLabel text={!isMobile ? "Why JobsBear?" : `Why search with JobsBear?`} />
            <WhyJobsBearCardContainer>
                {WhyJobsData.map((item, index) => <WhyJobsCard key={index} iconUrl={item.icon} title={item.title} description={item.description} />)}
            </WhyJobsBearCardContainer>
        </WhyJobsBearContainer>
    )
}
