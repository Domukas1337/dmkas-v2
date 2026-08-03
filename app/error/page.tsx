'use client'
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const [params] = useSearchParams();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold text-3xl">Something went wrong :{"("}</h1>
      <p>{params[1]}</p>
    </div>
  );
}
