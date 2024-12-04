import React from 'react'
import HeroFreelance from '../components/HeroFreelance'
import JobSearchFilter from '../components/JobSearchFilter'


import PostJobCTA from '../components/PostJobCTA'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Pagination from '../components/Pagination'

const Freelance = () => {
  return (
    <div>
        <HeroFreelance />
        <JobSearchFilter />

    
        <PostJobCTA />
        <Testimonials />
        <FAQ />
        <Pagination />
    </div>
  )
}

export default Freelance