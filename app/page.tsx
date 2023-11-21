import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden">
      <div className="flex flex-grow bg-gradient-to-r from-[#FFF7CC] to-[#FFBCC9] relative">
        <a className="w-40 absolute top-2 left-2 m-2 z-0" href="/">
          <img src="./logo.png" className="w-full" />
        </a>

        <div className="z-50 w-full px-6 py-8 md:p-14 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-start w-full md:w-3/4">
            <div className="w-full md:w-3/4 mt-20 mb-20">
              <h1 className="text-[#1E293A] text-7xl font-black">
                How can we help you?
              </h1>
            </div>
            <h2 className="text-[#1E293A] text-3xl font-black">FAQ's</h2>
            <div className="mt-6 w-full md:w-3/4 flex flex-wrap text-[#1E293A]">
              <div className="hover:cursor-pointer faq-item bg-[#FFBCC9] px-6 py-2 mx-1 rounded-full hover:bg-[#FF9DB0] mb-4 transition-all duration-150">
                Do we get data from Omron cuffs?
              </div>
              <div className="hover:cursor-pointer faq-item bg-[#FFBCC9] px-6 py-2 mx-1 rounded-full hover:bg-[#FF9DB0] mb-4 transition-all duration-150">
                Who are Terra API?
              </div>
              <div className="hover:cursor-pointer faq-item bg-[#FFBCC9] px-6 py-2 mx-1 rounded-full hover:bg-[#FF9DB0] mb-4 transition-all duration-150">
                How does pricing work?
              </div>
              <div className="hover:cursor-pointer faq-item bg-[#FFBCC9] px-6 py-2 mx-1 rounded-full hover:bg-[#FF9DB0] mb-4 transition-all duration-150">
                How does pricing work?
              </div>
              <div className="hover:cursor-pointer faq-item bg-[#FFBCC9] px-6 py-2 mx-1 rounded-full hover:bg-[#FF9DB0] mb-4 transition-all duration-150">
                Is there a cost for us to add this integration or is something
                that Terra does to improve its own solution?
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/4 flex flex-col justify-center items-center">
            <div className="flex-none bg-white text-[#1E293A] w-full mt-8 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-semibold mb-6">
                Terra <sup className="text-purple-500">AI</sup>
              </h1>
              <div className="chat-message bot mb-8">
                Can I be of assistance today?
              </div>
              <div className="chat-message user">
                <input
                  type="text"
                  name="userMessage"
                  placeholder={`Don't be shy...`}
                  className="w-full border p-2 rounded-md"
                />
              </div>
            </div>

            <iframe
              className="border my-4 md:mx-4 shadow-md"
              width="400"
              height="250"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8CQrxZUO56KkuTgyzGugHv%2FTERRA-App-Design-Hackathon%3Ftype%3Ddesign%26node-id%3D833%253A913%26mode%3Ddesign%26t%3DcrZkv0ZmOXOi5rjK-1"
            ></iframe>
          </div>
        </div>

        {/* BACKGROUND IMAGES */}
        <div className="z-0">
          <div className="w-full absolute bottom-[-180px] right-0">
            <img src="./Vector-2.svg" className="w-full" alt="Vector 2" />
          </div>
          <div className="w-full absolute bottom-[-200px] right-0">
            <img src="./Vector.svg" className="w-full" alt="Vector" />
          </div>
          <div className="w-full absolute top-[-120px] right-0 pt-2">
            <img src="./Vector-1.svg" className="w-full" alt="Vector 1" />
          </div>
        </div>
      </div>
    </main>
  );
}
