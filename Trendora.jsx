
import React from "react";

const products = [
  {
    name: "Nordic Minimalist Lamp",
    price: "$45",
    image: "https://images.unsplash.com/photo-1616627982648-29ce97c6485c",
  },
  {
    name: "Eco Bamboo Toothbrush Set",
    price: "$12",
    image: "https://images.unsplash.com/photo-1590080876270-c5f5e9d877bc",
  },
  {
    name: "Aesthetic Wall Print - Abstract Line",
    price: "$18",
    image: "https://images.unsplash.com/photo-1606813905924-d7dd32c3c90b",
  },
  {
    name: "Leather Handmade Journal",
    price: "$30",
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
  },
];

export default function Trendora() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-black text-white p-6 text-center">
        <h1 className="text-4xl font-bold tracking-wide">Trendora</h1>
        <p className="mt-2 text-sm tracking-wider">Curated Lifestyle Finds</p>
      </header>

      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-2xl p-4 shadow hover:shadow-xl transition">
              <img
                src={product.image + '?auto=format&fit=crop&w=400&q=80'}
                alt={product.name}
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-100 p-6 text-center text-sm text-gray-500">
        Connect with us on Instagram — <span className="text-blue-500">@trendora.shop</span>
      </footer>
    </div>
  );
}
