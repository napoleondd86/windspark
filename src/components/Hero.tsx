const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1e1b4b] to-cyan-500">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">WindSpark.io</h1>
        <p className="text-xl mb-8">Innovative Software Solutions for Tomorrow's Challenges</p>
        <a 
          href="/contact" 
          className="bg-white text-blue-600 text-lg font-semibold px-8 py-3 rounded-full  hover:bg-opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero; 