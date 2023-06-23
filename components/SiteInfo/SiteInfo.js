import React from "react";
import { ImageContainer, InfoContainer, SiteInfoContainer, TitleContainer } from "./siteInfo.style";
import { TextLabel } from "../common/TextLabel/TextLabel";
import useIsMobile from '../../hooks/hooks'
import { NumericalInfo } from "../common/NumericalInfo/NumercialInfo";

export const SiteInfo = () => {
    const isMobile = useIsMobile()

    return (
        <SiteInfoContainer>
            <InfoContainer>
                <TitleContainer>
                    <span>Join one of the world’s</span>
                    <span>fastest-growing Jobs Aggregator</span>
                </TitleContainer>
                <NumericalInfo />
            </InfoContainer>
                <ImageContainer>
                    <img src="/images/phone-middle.png" />
                </ImageContainer>
        </SiteInfoContainer>
    )
}
