import React from "react";
import { FaShippingFast, FaHeadphones, FaMoneyBillAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-3xl mb-2 text-gray-700" />,
      title: "Free Shipping",
      description: "Free shipping on all orders above $50.",
    },
    {
      icon: <FaHeadphones className="text-3xl mb-2 text-gray-700" />,
      title: "Support 24/7",
      description: "We are here to assist you round the clock.",
    },
    {
      icon: <FaMoneyBillAlt className="text-3xl mb-2 text-gray-700" />,
      title: "Money Return",
      description: "30 days money back guarantee.",
    },
  ];

  return (
    <section className="container mx-auto mt-6 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {feat.icon}
            <h3 className="font-bold text-lg font-montserrat mb-2">
              {feat.title}
            </h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
