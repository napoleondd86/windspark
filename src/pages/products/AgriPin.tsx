import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { MapPin, Share2, Map, Wifi, Users, Sliders } from 'react-feather'

const AgriPin = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    emailjs.init("ckB0XAhgG8gqguVtO")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const result = await emailjs.send(
        'service_jn9o0bn',
        'template_ma5gnao',
        {
          reply_to: email,
          message: 'Requesting early access to AgriPin',
          user_name: 'Early Access Request'
        },
        'ckB0XAhgG8gqguVtO'
      )
      console.log('Success:', result)
      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Error details:', error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e1b4b] to-cyan-500 pt-4">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex justify-center mb-8">
          <img
            src="/images/logo-silos-color.png"
            alt="Silos Logo"
            className="h-auto w-auto min-h-[8rem] max-h-[10rem]"
          />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 font-montserrat">AgriPin</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A geolocation app designed for farmers and agricultural businesses to efficiently manage tasks, fields, and operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4 w-full justify-center">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold font-montserrat">Task Management</h3>
            </div>
            <p className="text-gray-600">
              Assign and organize location-based tasks with customizable types like field rocks, driveways, or maintenance issues. With AgriPin's 'see something, mark something' approach, issues can be marked and added to shared lists for future resolution, ensuring nothing is forgotten
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4 w-full justify-center">
              <Share2 className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold font-montserrat">Shareable Lists</h3>
            </div>
            <p className="text-gray-600">
              Collaborate with your team by sharing individual tasks or entire lists.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4 w-full justify-center">
              <Map className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold font-montserrat">Field Mapping</h3>
            </div>
            <p className="text-gray-600">
              Define and manage field boundaries with intuitive mapping tools, and import your own field boundary data for seamless integration.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform  lg:col-span-1 lg:col-start-2">
            <div className="flex items-center mb-4 w-full justify-center">
              <Wifi className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold font-montserrat">Offline Mode</h3>
            </div>
            <p className="text-gray-600">
              Work seamlessly without connectivity, syncing tasks and updates when back online.
            </p>
          </div>
        </div>
        {/* Why Choose AgriPin? */}
        <div className="text-center mb-8 bg-[#1e1b4b] rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-8 font-montserrat">Why Choose AgriPin?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4 w-full justify-center">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold font-montserrat">Built by a Farmer for Farmers</h3>
              </div>
              <p className="text-gray-600">
                Developed with firsthand knowledge of agriculture's challenges
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4 w-full justify-center">
                <Sliders className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold font-montserrat">Tailored Solutions</h3>
              </div>
              <p className="text-gray-600">
                Flexible features for operations of all sizes
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                required
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#1e1b4b] text-white px-8 py-3 rounded-full border-2 border-[#1e1b4b] hover:border-white transition text-lg font-semibold disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : 'Request Early Access'}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-4 text-green-400">Thanks! We'll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
            )}
          </form>

          <a
            className="inline-block bg-white text-[#1e1b4b] px-8 py-3 rounded-full hover:bg-[#1e1b4b]/70 hover:text-white transition border-2 border-[#1e1b4b] text-lg font-semibold"
            href="/agripin/privacy-policy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default AgriPin
