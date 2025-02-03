import React from "react";
import ServiceCard from "../cards/ServiceCard";
import { motion } from "framer-motion";
import { Code, Paintbrush, Megaphone } from "lucide-react";

interface ServicesSectionProps {
  services?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const defaultServices = [
    {
      title: "Web Development",
      description:
        "Custom web solutions built with cutting-edge technologies to drive your business forward.",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Design Services",
      description:
        "Creative and intuitive designs that capture your brand's essence and engage your audience.",
      icon: <Paintbrush className="h-6 w-6 text-primary" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that increase your visibility and drive meaningful results.",
      icon: <Megaphone className="h-6 w-6 text-primary" />,
    },
  ];

  const displayServices = services || defaultServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we can help transform your business with our
            comprehensive range of services.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {displayServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => console.log(`Clicked ${service.title}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
