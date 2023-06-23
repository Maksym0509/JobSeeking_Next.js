import React from "react";
import { InfoContainer, InfoNode, NumberInfo, TextInfo } from "./numericalInfo.style";

export const NumericalInfo = () => {
    return(
        <InfoContainer>
            <InfoNode>
                <NumberInfo>
                9,000,000
                </NumberInfo>
                <TextInfo>
                Visitors per Month
                </TextInfo>
            </InfoNode>
            <InfoNode>
                <NumberInfo>
                5,000,000
                </NumberInfo>
                <TextInfo>
                Job recommendations a day
                </TextInfo>
            </InfoNode>
            <InfoNode>
                <NumberInfo>
                20,000,000
                </NumberInfo>
                <TextInfo>
                open positions 
                </TextInfo>
            </InfoNode>
        </InfoContainer>
    )
}