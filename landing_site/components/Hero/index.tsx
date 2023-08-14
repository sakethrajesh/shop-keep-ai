"use client";
import Image from "next/image";
import { useState } from "react";


const Hero = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://sheetdb.io/api/v1/14i8jmurh98te', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
              'id': "INCREMENT",
              'email': email,
              'time': "DATETIME"
          }
        ]
      })
    })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    setShowModal(true);
  });
  setEmail("")

  };

  return (
    <>
      {showModal && (
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50"></div>
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-black border border-black dark:border-white p-8 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 lg:h-1/4 flex flex-col justify-center items-center">
            <p className="text-black dark:text-white text-center mb-5">Thank you for joining the waitlist!<br></br> We will reach out shortly.</p>
            <button className="m-3 flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
        </>
      )}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                The only AI powered tool you need to grow your business.
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                </span>
              </h1>
              <p>
              cut down on time and costs with one AI tool
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email"
                      className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                    />
                    <button
                      aria-label="signup to newsletter"
                      className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                    >
                      Stay Connected
                    </button>
                  </div>
                </form>
                
                <p className="text-black dark:text-white mt-5">
                  Join our waitlist!
                </p>
              </div>
            </div>

            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                /> */}
                {/* <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                /> */}
                <div className=" relative aspect-[750/444] w-full">
                  <Image
                    className="dark:hidden shadow-solid-l"
                    src="/images/hero/mainUI.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block shadow-solid-l"
                    src="/images/hero/mainUI.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
