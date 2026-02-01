export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex flex-row cursor-pointer bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-4 py-1.5 rounded-sm border border-zinc-700">
      {children}
    </button>
  );
}
