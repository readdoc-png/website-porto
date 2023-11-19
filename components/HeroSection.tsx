"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/PasFoto.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, i'm Muhamad Yusuf Hidayat</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              3rd Year Computer Science student{" "}
            </span>
            based in Bandung, Indonesia. I excessively interested in UI/UX and Game Development industry
          </p>
        <div>
    <div>
    <div style={{ display: 'flex', gap: '1cm' }}>
  <a
    href="https://github.com/readdoc-png"
    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Recommended for security when using target="_blank"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/muhamad-yusuf-hidayat/"
    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Recommended for security when using target="_blank"
  >
    LinkedIn
  </a>
</div>

</div>
</div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
      </div>
    </section>
  )
}

export default HeroSection