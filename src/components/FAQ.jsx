import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { assets } from "../assets/assets";

const faqs = [
  {
    question: "What is Delve?",
    answer:
      "Delve is a platform that helps you learn new languages interactively.",
  },
  {
    question: "How does Delve help me learn a language?",
    answer:
      "We provide immersive lessons, practice exercises, and real-life scenarios.",
  },
  {
    question: "How does the practice feature work?",
    answer:
      "You can practice with AI-driven exercises, quizzes, and conversation simulations.",
  },
  {
    question: "What languages can I learn with Delve?",
    answer:
      "We offer Spanish, French, German, Japanese, and more. New languages are added based on demand.",
  },
  {
    question: "Can I learn more than one language at a time?",
    answer:
      "Yes! You can learn multiple languages and track progress separately.",
  },
  {
    question: "Can I set my own learning goals?",
    answer:
      "Absolutely! You can customize your learning plan based on your preferences.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 md:px-24 py-22 bg-gray-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - FAQ Intro & Icon */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Find answers to the most common questions about using our platform.
            If you need more help, our support team is here for you.
          </p>
          {/* Question Mark Icon */}
          <div className="hidden md:flex  justify-center  md:justify-center mt-6">
            <img src={assets.question} alt="" />
          </div>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left px-6 py-4 text-gray-900 font-medium"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
