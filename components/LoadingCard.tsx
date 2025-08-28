export default function LoadingCard() {
  return (
    <div className="relative group bg-gray-400/30 rounded-lg overflow-hidden w-[280px] h-full flex flex-col">
      <div className="relative h-[200px] overflow-hidden">
        <div className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h2 className="bg-gray-600 text-gray-600/0 font-bold text-lg">
            placegholder
          </h2>
          <h3 className="bg-gray-600 text-gray-600/0 text-sm">placegholder</h3>
          <p className="bg-gray-600 text-gray-600/0 text-sm">placegholder</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-600 text-gray-600 text-xs font-medium px-3 py-1">
            placegholder
          </span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-loading-gradient" />
      </div>
    </div>
  );
}
