import React from "react";
import { assets } from "../assets/assets";

const testimonials = [
  {
    name: "Tara K.",
    language: "French learner",
    quote:
      "Delve is the language learning app I have been waiting for. I have been looking for a way to truly be immersed because that’s the best way to learn. Merci beaucoup!",
    image: assets.group1,
    rating: 5,
  },
  {
    name: "Chandler M.",
    language: "Spanish learner",
    quote:
      "Delve has completely transformed my approach to learning a language. Every session felt like a real conversation. I couldn’t ask for more!",
    image: assets.man2,
    rating: 5,
  },
  {
    name: "Todd K.",
    language: "Turkish learner",
    quote:
      "I never imagined language learning could feel so immersive and fun! Delve’s real-life simulations transported me straight into a new culture. Truly a game-changer!",
    image: assets.group2,
    rating: 5,
  },
  {
    name: "Shana L.",
    language: "Italian learner",
    quote:
      "Delve completely redefined my language learning experience! The immersive quests made every lesson exciting. It is a must-try for anyone serious language learner!",
    image: assets.man4,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white justify-center items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20  object-cover mr-4"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.language}</p>
                <p className="text-yellow-500">
                  {"⭐".repeat(testimonial.rating)}
                </p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
