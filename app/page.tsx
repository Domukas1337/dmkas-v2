export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen mx-10 sm:mx-0">
      <h1 className="text-4xl mb-2">
        Welcome to <span className="text-blue-400">DMKAS</span>
      </h1>
      <p className="text-lg sm:text-2xl text-center font-semibold text-gray-200">
        A website for searcing manga and anime
      </p>
      <p className="text-base text-center">
        Try searching for your favorite manga or anime by hovering the{" "}
        <span className="font-bold">search </span>
        button
      </p>
    </div>
  );
}
