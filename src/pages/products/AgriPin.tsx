import { Link } from 'react-router-dom'

const AgriPin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e1b4b] to-cyan-500">
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <h1 className="text-5xl font-bold text-white mb-8">AgriPin</h1>

        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 mb-4">
                AgriPin is a cutting-edge geolocation application specifically designed for the agricultural sector.
                Our solution helps farmers and agricultural businesses optimize their operations through precise
                location tracking and mapping capabilities.
              </p>

              <h3 className="text-2xl font-bold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Field mapping and boundary overlays</li>
                <li>Task management with locations</li>
                <li>Shareable task lists</li>
                <li>Equipment location management</li>
                <li>Real-time agricultural data visualization</li>
              </ul>

              <div className="flex flex-row gap-4 justify-center ">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Request Early Access
                </Link>
                <a
                  className="inline-block bg-none text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition border-2 border-blue-600"
                  href="/agripin/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div>
              <img
                src="/images/agripin-logo.png"
                alt="AgriPin"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgriPin
