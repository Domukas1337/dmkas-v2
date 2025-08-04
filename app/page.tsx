import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen mx-10 lg:mx-0 gap-10 mt-24 sm:mt-0">
      <div className="flex flex-col fade-in-from-left">
        <h1 className="text-4xl">
          Welcome to <span className="accent-text">DMKAS</span>
        </h1>
        <p className="text-base sm:text-2xl font-semibold ">
          A website for searcing manga and anime
        </p>
        <p className="text-sm sm:text-base">
          Try searching for your favorite manga or anime by hovering or clicking
          the <span className="font-bold">search </span>
          button
        </p>
      </div>
      <div className="flex flex-col fade-in-from-top">
        <Image src="/homepage.png" alt="homepage" width={400} height={500} />
        <Link
          href="https://x.com/morinohitos"
          className="text-center hover:text-teal-300 transition-colors"
        >
          @morinohitos
        </Link>
      </div>
    </div>
  );
}
