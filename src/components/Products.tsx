


const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-r from-[#1e1b4b] to-cyan-500 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h3 className="text-2xl font-bold mb-4">AgriPin</h3>
                <p className="text-gray-600 mb-4">
                  A powerful geolocation application designed specifically for agricultural needs,
                  helping farmers and agricultural businesses optimize their operations through
                  precise location tracking and mapping.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full transition"
                >
                  In Development
                </a>
              </div>
              <div className="md:flex-1">
                {/* Add AgriPin screenshot or illustration here */}
                <div className="h-64 bg-none">
                  <img src='/images/agripin-logo.png' alt="AgriPin" className="w-full h-full object-contain" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
