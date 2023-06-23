import React from "react";
import { SayAboutUsCardContainer, SayAboutUsContainer } from "./sayAboutUs.style";
import { TextLabel } from "../common/TextLabel/TextLabel";
import useIsMobile from '../../hooks/hooks'
import { SayAboutUsCard } from "../common/Cards/SayAbotUsCard/SayAboutUsCard";
import { SayAboutUsData } from "./CardData";

export const SayAboutUs = () => {
    const isMobile = useIsMobile()

    return (
        <SayAboutUsContainer>
            <TextLabel text={!isMobile ? "Here’s what people say about us" : "What people say about us"} />
            <SayAboutUsCardContainer>
                {SayAboutUsData.map((item, index) => 
                    <SayAboutUsCard key={index} avatar={item.avatar} name={item.name} description={item.description} />
                )}
            </SayAboutUsCardContainer>
        </SayAboutUsContainer>
    )
}
