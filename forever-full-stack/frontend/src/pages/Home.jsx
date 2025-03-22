import React from 'react';
import Hero from '../components/Hero';
import FeaturedSkills from '../components/FeaturedSkills';
import TopFreelancers from '../components/TopFreelancers';
import HowItWorks from '../components/HowItWorks';
import CommunitySpotlight from '../components/CommunitySpotlight';
import NewsletterBox from '../components/NewsletterBox';


const Home = () => {
  return (
    <div className='bg-[#E3F2FD] text-[#1A237E] font-[Inter] min-h-screen'>
      <Hero />
      <section className='py-10'>
        <FeaturedSkills />
      </section>
      <section className='py-10 bg-[#BBDEFB]'>
        <TopFreelancers />
      </section>
      <section className='py-10'>
        <HowItWorks />
      </section>
      <section className='py-10 bg-[#90CAF9]'>
        <CommunitySpotlight />
      </section>
      <section className='py-10'>
        <NewsletterBox />
      </section>
    </div>
  );
};

export default Home;
