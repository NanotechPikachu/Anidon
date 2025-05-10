export function SkeletonSearch() {
  return (
    <div className="flex w-full flex-col mb-2">
      <div className="w-full border-2 border-blue-800 rounded-lg p-4 mb-4 flex flex-row gap-4 hover:border-blue-500">
        <div>
          <div className="w-30 h-40 bg-gray-300 animate-pulse" />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 mr-5">
          <div className="text-center text-xl font-bold truncate overflow-hidden w-40 lg:w-4/5">
            <div className="w-full h-6 bg-gray-300 animate-pulse rounded" />
          </div>
          <div className="flex flex-row items-center justify-between w-full gap-3 pl-3 pr-3 pt-2 lg:pl-10 lg:pr-10 lg:pt-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-center text-sm lg:text-base">
                <div className="w-20 h-4 bg-gray-300 animate-pulse rounded" />
              </div>
              <div className="text-center text-sm lg:text-base">
                <div className="w-20 h-4 bg-gray-300 animate-pulse rounded" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-center text-sm lg:text-base">
                <div className="w-20 h-4 bg-gray-300 animate-pulse rounded" />
              </div>
              <div className="text-center text-sm lg:text-base">
                <div className="w-20 h-4 bg-gray-300 animate-pulse rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
