import Link from "next/link";

export default function Button({
  children,
  isLink,
  target,
  href = "#",
}: {
  children: React.ReactNode;
  isLink?: boolean;
  target?: string;
  href?: string;
}) {
  if (isLink) {
    return (
      <Link
        href={href}
        target={target}
        className="flex flex-row cursor-pointer items-center bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-4 py-1.5 rounded-sm border border-zinc-700 focus:outline-offset-2 focus:outline-zinc-400 focus:outline"
      >
        {children}
      </Link>
    );
  }

  return (
    <button className="flex flex-row cursor-pointer items-center bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-4 py-1.5 rounded-sm border border-zinc-700 focus:outline-offset-2 focus:outline-zinc-400 focus:outline">
      {children}
    </button>
  );
}
