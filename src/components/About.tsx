import Headshot from '../images/headshot-1-to-1.jpg'
import TechStackContainer from './TechStackContainer'
const About = () => {



  return (
    <section id="about" className='rounded-3xl bg-rainee bg-opacity-60  mx-4 mt-16 p-4 justify-center items-center flex flex-col max-w-7xl'>
      <h2>About Me</h2>
      <img src={Headshot} className='Kurt w-64 h-64 rounded-full mt-4 ' alt="Kurt" />
      <div className='mt-8'>
        <h3 className='text-3xl font-semibold'>My Story</h3>
        <p className='mt-4 mx-4 md:px-20'>
          With 8 years of experience in building and managing a dual-focused business in logistics/transportation and residential construction, leading a team of up to 5 employees, I bring a wealth of practical business acumen and team leadership skills. Recently, I've expanded my expertise by graduating from the University of Minnesota Fullstack Web Development Bootcamp, where I gained hands-on experience in software development, specializing in React, Express, MongoDB, and NodeJS. I am now seeking full stack web development opportunities in a dynamic small team or company, where my unique blend of business insight and technical skills can make a substantial impact.
        </p>
      </div>
      <div className='my-8'>
        <h3 className='text-3xl font-semibold'>Technologies and Tools</h3>
        <p className='mt-4 mx-4 md:px-20'>
          I have experience with the following technologies and tools:
        </p>
        <div className='techstack mt-8 flex flex-wrap justify-evenly'>
          <TechStackContainer />
        </div>
      </div>
    </section>
  )
}

export default About