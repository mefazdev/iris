import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Donate() {
  return (
    <div>
      <Navbar/>
      <div style={{ backgroundColor: "rgb(0, 119, 182)" }} className="pb-20">
        
        <div className=" p-5 lg:w-10/12 m-auto lg:p-0 pt-10 lg:pt-32">
          <h3 className="text-white font-sans text-3xl font-bold">
            Why Donate?
          </h3>
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-11 text-white font-sans text-lg">
            <p>
              Change lives with your generosity. The IRIS Foundation funds
              projects that improve education, healthcare, and community
              development worldwide. Your donation can set a positive chain
              reaction into motion.
            </p>
            <p>
              Champion a cause close to your heart and join a community that
              cares. With the IRIS Foundation&apos;s transparent approach, you can
              rest assured that your contribution makes a genuine impact.
            </p>
          </div>

          <div className="md:w-6/12 m-auto mt-16 lg:mt-28 text-white">
            <h4 className="font-sans text-4xl font-bold text-center">
              Donate Now
            </h4>
            <p className="text-center mt-4 text-lg">
              Don&apos;t wait, make a difference today! Unleash your inner
              philanthropist and empower communities to reach their full
              potential.
            </p>

            <button className="font-sans  m-auto flex mt-4 bg-slate-700 p-2 rounded px-6 text-base hover:bg-slate-600">
              Make a Donation
            </button>
          </div>

          <div className="text-white text-sans md:w-6/12">
            <h3 className="text-2xl font-bold mt-20">How to Donate?</h3>
            <p className="text-lg">
              It&apos;s simple: choose the project you&apos;re passionate about,
              enter your desired donation amount, and follow the steps.
            </p>

            <div className="mt-5 grid grid-cols-3">
              <div>
                <h6 className="text-xl font-semibold">300</h6>
                <p className="font-semibold">Supported Projects</p>
              </div>
              <div>
                <h6 className="text-xl font-semibold">450</h6>
                <p className="font-semibold">Happy Donors</p>
              </div>
              <div>
                <h6 className="text-xl font-semibold">150</h6>
                <p className="font-semibold">Communities Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
