import React from "react";
import "./index.css";
import BackgroundImage from "./bg-ez.jpeg";

function HomePage() {
  return (
      <div className="bg-gray-100 h-screen flex md:items-center justify-center">
        <div className="w-full mx-auto bg-white md:rounded-lg overflow-hidden md:max-w-3xl">
          <div className="md:flex items-center">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={BackgroundImage}
                alt="Background"
              />
            </div>
            <div className="p-8 flex flex-col gap-[15px]">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Hello, welcome to my new website !
              </div>
              <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
                My name is Ezra, <br />I am a{" "}
                <span className="text-indigo-500">JavaScript</span> developer
              </h1>
              <div className="tracking-wide text-sm font-medium">
                I'd like to discuss the benefits of using Github Pages for
                storing static content.
              </div>
              <ul className="list-disc list-inside">
                <li className="text-sm">It’s free & supports custom domains</li>
                <li className="text-sm">
                  Your repository syncs with any changes you made to your site.
                </li>
                <li className="text-sm">
                  It uses customizable GitHub Action workflows for builds and
                  deployments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HomePage;
