import React from "react";
import { BlogCard } from "../common/Cards/BlogCard/BlogCard";
import { JobsBlogCardContainer, JobsBlogContainer, LogoContainer } from "./jobsBlog.style";
import { JobsBlogData } from "./CardData";

export const JobsBlog = () => {
    return(
        <JobsBlogContainer>
            <LogoContainer>
                <img src="/images/icons/icon-blogLogo.svg" width={312} height={56} />
            </LogoContainer>
            <JobsBlogCardContainer>
                {JobsBlogData.map((item, index) => <BlogCard key={index} imgUrl={item.imgUrl} title={item.title} />)}
            </JobsBlogCardContainer>
        </JobsBlogContainer>
    )
}