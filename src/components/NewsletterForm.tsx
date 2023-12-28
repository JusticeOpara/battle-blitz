import React from "react";

const NewsletterForm = () => {
  return (
    <section className="bg-yellow-300 h-[392px] flex flex-col justify-between">
      {/* <div className="max-w-6xl mx-auto pxd-4 s:px-6"> */}
      <div className="w-full">
          <h1 className="font-medium text-[30px] font-Poppins">Lorem Ipsum</h1>

          <p className="text-base w-[505px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>

        </div>
        <div className="relative w-full bg-blue-600 py-10 rounded-[15px] px-8 md:py-16 md:px-12 aos-init">
       
          <div className="relative flex flex-col lg:flex-row justify-between  items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-blue-200 text-lg">
              Subscribe to receive the latest news and updates about TDA.
We promise not to spam you! 
              </p>
            </div>
            <form className="w-full lg:w-1/2 bg-red-200">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none bg-blue-700 border border-blue-500 focus:border-blue-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-blue-400"
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                />
                <a
                  className="flex justify-center items-center font-semibold p-2 text-blue-600 bg-blue-100 hover:bg-white shadow"
                  href="#0"
                >
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default NewsletterForm;
