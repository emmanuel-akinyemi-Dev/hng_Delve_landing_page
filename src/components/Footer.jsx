import React from "react";
import { Input } from "./ui/input";
import { Facebook, Linkedin, Youtube } from "lucide-react";

const DelveFooter = () => {
  return (
    <footer className="w-full bg-purple-800 text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-10">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start mb-20">
          {/* Logo and Download Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="./delve logo 3d 1.svg" alt="logo" />
              <span className="text-2xl font-semibold">Delve</span>
            </div>
            <div className="flex flex-row space-x-2">
              <button className="bg-purple-700 cursor-pointer rounded-[10px] hover:bg-purple-600 flex items-center justify-center gap-2 p-[10px] shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M0.5 1.47282V22.5261C0.500152 22.5718 0.514823 22.6164 0.542175 22.6544C0.569527 22.6923 0.60834 22.722 0.65375 22.7395C0.699159 22.7571 0.749142 22.7618 0.797431 22.7531C0.84572 22.7444 0.890166 22.7226 0.925195 22.6906L12.7308 12L0.925195 1.30836C0.890166 1.27629 0.84572 1.25454 0.797431 1.24583C0.749142 1.23712 0.699159 1.24184 0.65375 1.25941C0.60834 1.27697 0.569527 1.30659 0.542175 1.34456C0.514823 1.38252 0.500152 1.42714 0.5 1.47282ZM17.6809 7.6072L2.87809 0.034445L2.86886 0.0296236C2.61386 -0.0989461 2.37155 0.221407 2.5804 0.407833L14.1841 10.7106L17.6809 7.6072ZM2.58155 23.5922C2.37155 23.7786 2.61386 24.0989 2.87001 23.9704L2.87925 23.9656L17.6809 16.3928L14.1841 13.2884L2.58155 23.5922ZM23.6567 10.6607L19.523 8.54683L15.6362 12L19.523 15.4516L23.6567 13.3393C24.7811 12.7623 24.7811 11.2377 23.6567 10.6607Z"
                    fill="white"
                  />
                </svg>
                Download
              </button>
              <button className="bg-purple-700 cursor-pointer rounded-[10px] hover:bg-purple-600 flex items-center justify-center gap-2 p-[10px] shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.4829 0.0120105C17.4243 -0.0449893 15.3136 0.0345104 13.4767 1.77C11.6399 3.50399 11.9225 5.49298 11.9638 5.54398C12.0052 5.59498 14.583 5.67448 16.2285 3.65699C17.8741 1.6395 17.5415 0.0705102 17.4829 0.0120105ZM23.1933 17.6114C23.1106 17.4674 19.1871 15.7604 19.5524 12.4784C19.9177 9.19646 22.4386 8.29497 22.4782 8.19747C22.5178 8.09997 21.4495 7.01248 20.3174 6.46198C19.4861 6.07423 18.5662 5.85189 17.6242 5.81098C17.4381 5.80648 16.792 5.66848 15.4635 5.98498C14.5881 6.19348 12.6152 6.86848 12.0724 6.89548C11.5279 6.92248 9.90819 6.11248 8.16613 5.89798C7.05128 5.71048 5.86924 6.09448 5.02319 6.38998C4.17888 6.68398 2.57295 7.52097 1.44948 9.74546C0.326023 11.9685 0.9136 15.4904 1.33404 16.5854C1.75447 17.6804 2.41097 19.4714 3.52754 20.7794C4.52005 22.2554 5.8365 23.2799 6.38617 23.6279C6.93584 23.9759 8.48663 24.2069 9.56184 23.7284C10.4268 23.2664 11.988 23.0009 12.6048 23.0204C13.22 23.0399 14.433 23.2514 15.6754 23.8289C16.6593 24.1244 17.5898 24.0014 18.522 23.6714C19.4542 23.3399 20.8033 22.0829 22.3783 19.5344C22.9756 18.3494 23.2473 17.7084 23.1933 17.6114Z"
                    fill="white"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-10 md:mb-0">
            {/* Navigation Links - First Column */}
            <div className="space-y-2 flex flex-col justify-start">
              <a
                href="#"
                className="block text-lg font-semibold hover:underline"
              >
                About
              </a>

              <div className="space-y-2 ">
                <a href="#" className="block text-sm hover:underline">
                  Courses
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Quizzes
                </a>
              </div>
            </div>

            {/* Navigation Links - Second Column */}
            <div className="flex flex-col justify-start space-y-2">
              <a
                href="#"
                className="block text-lg font-semibold hover:underline"
              >
                Help and Support
              </a>
              <div className="space-y-2 ">
                <a href="#" className="block text-sm hover:underline">
                  Delve FAQs
                </a>
                <a href="#" className="block text-sm hover:underline">
                  School FAQs
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Disclosure
                </a>
              </div>
            </div>

            {/* Navigation Links - Third Column */}
            <div className="flex flex-col justify-start space-y-2">
              <a
                href="#"
                className="block text-lg font-semibold hover:underline"
              >
                Privacy and Terms
              </a>
              <div className="space-y-2 ">
                <a href="#" className="block text-sm hover:underline">
                  Community guidelines
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Terms
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Privacy
                </a>
              </div>
            </div>

            {/* Navigation Links - Fourth Column */}
            <div className="flex flex-col justify-start space-y-2">
              <a
                href="#"
                className="block text-lg font-semibold hover:underline"
              >
                Contact Us
              </a>
              <div className="space-y-2 ">
                <a href="#" className="block text-sm hover:underline">
                  +234 912 296 4215
                </a>
                <a href="#" className="block text-sm hover:underline">
                  +234 803 371 5522
                </a>
                <a
                  href="mailto:hello@delve.fun"
                  className="block text-sm hover:underline"
                >
                  hello@delve.fun
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4 flex flex-col justify-start w-full md:w-auto">
            <h3 className="font-medium uppercase text-left">Stay up to date</h3>
            <div className="flex md:flex-col space-x-3 md:space-y-3 mb-10 md:mb-0">
              <Input
                type="email"
                placeholder="Enter your email here"
                className="bg-white border-gray-200"
              />
              <div className="flex justify-end">
                <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-[10px] px-4 py-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-purple-300">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter/X">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm">&copy;2025 Delve. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default DelveFooter;