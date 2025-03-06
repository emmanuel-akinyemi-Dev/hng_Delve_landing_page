import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Email, call or fill the form to learn how Delve can enhance your language learning journey.
        </p>
        <div className="mt-4 text-gray-800">
          <p className="font-medium">info@delve.io</p>
          <p className="font-medium">303-278-912</p>
        </div>
      </div>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
        <p className="text-gray-600">You can reach out anytime</p>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;



