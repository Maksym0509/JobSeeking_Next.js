import React, { useState } from 'react'
import { TitleBar } from '../components/TitleBar/TitleBar'
import { BrowseJobs } from '../components/BrowseJobs/BrowseJobs';
import { WhyJobsBear } from '../components/WhyJobsBear/WhyJobsBear';
import { SayAboutUs } from '../components/SayAboutUs/SayAboutUs';
import { SiteInfo } from '../components/SiteInfo/SiteInfo';
import { JobsBlog } from '../components/JobsBlog/JobsBlog';

const Index = (props) => {
    const {app, keyword} = props;
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
      <>
        <TitleBar imgUrl="/images/bear-guy-home.png" />
        <BrowseJobs />
        <WhyJobsBear />
        <SayAboutUs />
        <SiteInfo />
        <JobsBlog />
      </>
    );
}

export default Index;