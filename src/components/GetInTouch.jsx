import { FaGooglePlay, FaApple } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="bg-gray-100 py-22">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Left Side: Contact Details */}
        <div className="md:w-1/2 hidden md:block">
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-800">
            Email, call, or fill the form to learn how Delve can enhance your
            language learning journey.
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-900">
            info@delve.io
          </p>
          <p className="text-lg font-semibold text-gray-900">303-278-912</p>
          <p className="mt-4 font-semibold text-purple-600 underline">
            Customer Support
          </p>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-gray-900">
                Feedback & Suggestions
              </h3>
              <p className="text-gray-700 text-sm">
                Your input is crucial in shaping the input of Delve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-gray-900">Customer Support</h3>
              <p className="text-gray-700 text-sm">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2 mt-12 md:mt-0 md:ml-12">
          <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg ml-auto">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-700">You can reach out anytime</p>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full p-4 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full p-4 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Write your message here"
                className="w-full p-4 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
              ></textarea>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
