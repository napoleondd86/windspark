const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business needs"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications using cutting-edge technologies"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications"
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on technology strategy and implementation"
    }
  ];

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;