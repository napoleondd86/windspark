import { SiLinkedin } from 'react-icons/si';

const About = () => {



  return (
    <div className='bg-gradient-to-r from-[#1e1b4b] to-cyan-500 w-full min-h-screen  grid justify-center py-16 gap-12'>
      <section id="about" className='p-4 justify-center items-center flex flex-col max-w-5xl'>
        <h2 className='text-[#1e1b4b] text-4xl font-bold'>Our Story</h2>
        <div className='mt-8 flex flex-col gap-6 max-w-xl text-lg px-4 mx-auto  text-center'>
          <p>
            Building products that make a difference with a focus on improving work flows and worker efficiency, by leveraging technology. Our goal is to make your business more efficient.
          </p>

        </div>
      </section>

      <div className='flex flex-col gap-6 max-w-5xl'>
        <h2 className="text-4xl font-bold text-white text-center">Meet Our Team</h2>
        <div className='flex flex-col sm:flex-row gap-12 px-4 mx-auto justify-center items-stretch'>

          {/* Team Member Cards - using grid to ensure equal widths */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-full'>
            {/* Kurt's Card */}
            <div className='flex flex-col bg-[#1e1b4b] rounded-lg overflow-hidden'>
              <img
                className="w-full aspect-square object-cover"
                src="/images/kurtsuit.jpg"
                alt="Kurt Wensmann"
              />
              <div className="p-6 flex flex-col h-full ">
                <h3 className="text-2xl font-semibold text-white">Kurt Wensmann</h3>
                <p className="text-xl text-gray-300 mb-4">Founder & CEO</p>
                <p className="text-gray-300 flex-grow">
                  As an entrepreneur, Kurt has a passion for creating innovative solutions that make a real impact.
                </p>
                <div className="flex gap-4 items-center justify-end mt-4">
                  <a href="https://linkedin.com/in/kurt-wensmann" className="p-2">
                    <SiLinkedin className='text-[2rem] text-white hover:text-[#504c7e]' />
                  </a>
                  <a
                    href="mailto:kurt@windspark.io"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-md hover:opacity-90 text-white"
                  >
                    Talk with Kurt
                  </a>
                </div>
              </div>
            </div>

            {/* Peter's Card */}
            <div className='flex flex-col bg-[#1e1b4b] rounded-lg overflow-hidden'>
              <img
                className="w-full aspect-square object-cover"
                src="/images/peter.jpg"
                alt="Peter Krause"
              />
              <div className="p-6 flex flex-col h-full justify-end">
                <div className=''>
                  <h3 className="text-2xl font-semibold text-white">Peter Krause</h3>
                  <p className="text-xl text-gray-300 mb-4">Founder & CTO</p>
                  <p className="text-gray-300 flex-grow">
                    As our technical leader, Peter brings deep expertise in software development
                    and system architecture to drive our technological innovation.
                  </p>
                </div>
                <div className="flex gap-4 items-center justify-end mt-4">
                  <a href="https://linkedin.com/in/peter-krause-9465662a4" className="p-2">
                    <SiLinkedin className='text-[2rem] text-white hover:text-[#504c7e]' />
                  </a>
                  <a
                    href="mailto:peter@windspark.io"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-md hover:opacity-90 text-white"
                  >
                    Talk with Peter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-auto flex gap-8 max-w-5xl  pt-24'>

      </div>

    </div>
  )
}

export default About