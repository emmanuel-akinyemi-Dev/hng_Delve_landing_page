import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <img src={assets.delvelogo} alt="" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Delve</h2>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded mr-2">
            Download
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Download
          </button>
        </div>

        {/* About & Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-2">
            <li>Courses</li>
            <li>Quests</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help and Support</h3>
          <ul className="space-y-2">
            <li>Delve FAQs</li>
            <li>School FAQs</li>
            <li>Disclosure</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Up to Date</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-2 rounded-l w-full text-black"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-purple-700 mt-8 pt-4 text-center text-sm">
        <p>©2025 Delve. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
