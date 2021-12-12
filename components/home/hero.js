import Head from 'next/head';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";


export default function Hero() {
    return (
      <div>
        {/* <Head>
          <meta name="description" content={this.props.description} />
          <meta name="keywords" content={this.props.keywords} />
          <meta name="author" content={this.props.author} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="revisit-after" content="1 days" />
          <meta name="language" content="english" />
          <meta name="distribution" content="global" />
          <meta name="rating" content="general" />
          <meta name="expires" content="never" />
        </Head> */}
        <main className="flex-col mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-2 justify-between">
          <div className="flex mx-auto max-w-7xl">
            <h1 className="tracking-tight">
              <span className="text-2xl md:text-4xl block font-semibold ">
                Dashboard{""}
              </span>
              <span className="text-xl block text-blue-600">
                Hi Drishtant
              </span>
            </h1>
          </div>
          {/* <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block xl:inline text-yellow-500 ">
                Vision To Project{" "}
              </span>
              7
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              This is just an project out of creativity to re-create mock
              ecommerce experience for Amazon. This is a project that I have
              done for my self. I have used Next JS, Tailwind CSS, and Node JS.
              In no way is this project a product.
              <br />
              BE ALERT SINCE ITS NOT ACTUAL AMAZON SITE.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              This is just an project out of creativity to re-create mock
              ecommerce experience for Amazon. This is a project that I have
              done for my self. I have used Next JS, Tailwind CSS, and Node JS.
              In no way is this project a product.
              <br />
              BE ALERT SINCE ITS NOT ACTUAL AMAZON SITE.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div> 
          </div>*/}
        </main>
      </div>
    );
}