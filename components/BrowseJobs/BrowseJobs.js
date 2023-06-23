import React, { useEffect, useState } from "react";
import useIsMobile from '../../hooks/hooks'
import { BrowseJobsContainer, JobCardsContainer, ViewAllContainer } from "./browseJobs.style";
import { TextLabel } from "../common/TextLabel/TextLabel";
import { SelectTab } from "../common/SelectTab/SelectTab";
import { JobCard } from "../common/Cards/JobCard/JobCard";
import { JobsByIndustry, JobsByLocation } from "./JobsData";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const BrowseJobs = () => {
    const {location} = useContext(AppContext)
    const isMobile = useIsMobile()
    const [isIndustry, setIsIndustry] = useState(true)
    const [isLocation, setIsLocation] = useState(false)

    useEffect(() => {
        console.log(location)
    }, [location])

    const handleIndustry = () => {
        setIsIndustry(true)
        setIsLocation(false)
    }

    const handleLocation = () => {
        setIsLocation(true)
        setIsIndustry(false)
    }
    return (
        <BrowseJobsContainer>
            <TextLabel text={isIndustry ? "Browse Jobs by" : `Browse Jobs in the ${location}`} />
            <SelectTab setIsIndustry={handleIndustry} isIndustry={isIndustry} setIsLocation={handleLocation} isLocation={isLocation} />
                <JobCardsContainer>
                    {isIndustry ? JobsByIndustry.map((item, index) => 
                        <JobCard key={index} isByIndustry title={item.title} iconUrl={item.icon} description={item.description}></JobCard>)
                    : 
                    JobsByLocation[`${location}`].map((item, index) => {
                        if(index < 9)
                        return(
                            <JobCard title={item.location}></JobCard>
                        )
                    })
                    }
                    {!isIndustry && <ViewAllContainer><div>Browse all Locations</div><span>VIEW All &gt;</span></ViewAllContainer>}
                </JobCardsContainer>
        </BrowseJobsContainer>
    )
}