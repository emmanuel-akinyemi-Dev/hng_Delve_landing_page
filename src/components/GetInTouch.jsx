import React from 'react';

const GetInTouch = () => {
  return (
    <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-2">
            Email, call or fill the form to learn how Delve can enhance your language learning journey
          </p>
          <p className="text-gray-800 font-medium">info@delve.io</p>
          <p className="text-gray-800 font-medium mb-4">303-278-912</p>
          <a href="#" className="text-purple-600 underline">Customer Support</a>

          <div className="mt-6 border-t pt-4">
            <h3 className="font-bold">Feedback & Suggestions</h3>
            <p className="text-gray-600 mb-4">Your input is crucial in shaping the input of Delve</p>

            <h3 className="font-bold">Customer Support</h3>
            <p className="text-gray-600">Our support team is available around the clock to address any concerns or queries you may have</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">You can reach out anytime</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="johndoe@gmail.com" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea className="w-full p-2 border rounded-md" placeholder="Write your message here" rows="4"></textarea>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
