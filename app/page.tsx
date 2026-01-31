export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col text-center">
        <h1 className="sm:text-4xl text-2xl jetbrains-mono">
          Welcome to <span className="text-accent font-black">DMKAS</span>
        </h1>
        <p className="sm:text-lg text-sm jetbrains-mono">
          Find your favorite manga and anime with ease.
        </p>
      </div>
    </div>
  );
}
