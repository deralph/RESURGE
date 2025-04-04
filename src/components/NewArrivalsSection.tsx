import React from "react";
import tees from "../assets/TeesImage.png";

const products = [
  {
    id: 1,
    title: "T-Shirt And Jeans",
    image: tees,
    price: "$29.99",
  },
  {
    id: 2,
    title: "Hat And Sunglasses",
    image: tees,
    price: "$19.99",
  },
  {
    id: 3,
    title: "Watch And Belt",
    image: tees,
    price: "$49.99",
  },
  {
    id: 4,
    title: "Shoes And Socks",
    image: tees,
    price: "$59.99",
  },
];

const NewArrivals = () => {
  return (
    <section id="shop" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-8">
          New Arrival
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto mb-4"
              />
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.price}</p>
              <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
