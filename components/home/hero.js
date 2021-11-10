import Head from 'next/head';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";


export default function Hero() {
    return (
      <div>
        <Head>
          <title>Home</title>
          {/* <meta name="description" content={this.props.description} />
          <meta name="keywords" content={this.props.keywords} />
          <meta name="author" content={this.props.author} /> */}
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
        </Head>
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">This Project is Aimmed for </span>
              <span class="block text-indigo-600 xl:inline">
                Amazon Redesign
              </span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              This is just an project out of creativity to re-create mock ecommerce experience
              for Amazon. This is a project that I have done for my self. I have used Next JS, Tailwind CSS, and Node JS.
              In no way is this project a product.<br/>BE ALERT SINCE ITS NOT ACTUAL AMAZON SITE.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

