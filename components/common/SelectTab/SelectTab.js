import React from 'react'
import { TabsContainer } from './selectTab.style'
import { StyledTab } from './selectTab.style'

export const SelectTab = (props) => {
  const {isIndustry, isLocation, setIsIndustry, setIsLocation} = props
  return (
    <TabsContainer>
      {console.log(isIndustry, isLocation)}
      <StyledTab isActive={isIndustry} onClick={setIsIndustry}><span>Industry</span></StyledTab>
      <StyledTab isActive={isLocation} onClick={setIsLocation}><span>Location</span></StyledTab>
    </TabsContainer>
  )
}
