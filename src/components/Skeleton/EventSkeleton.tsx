import React from "react";

const EventSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md animate-pulse">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-40 w-full">
          <div className="relative aspect-square bg-gray-300 rounded-t-lg md:rounded-ss-lg"></div>
        </div>
        <div className="flex-1 p-4 space-y-4">
          <div>
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="flex gap-2 flex-wrap mt-2">
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap">
              <div className="h-4 bg-gray-300 rounded w-32"></div>
              <div className="h-4 bg-gray-300 rounded w-24 ml-4"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-40 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-52 mt-2"></div>
          </div>
        </div>
      </div>
      <div className="px-4 space-y-4 mt-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
      <div className="px-4 pb-4 mt-2">
        <div className="h-4 bg-gray-300 rounded w-32"></div>
      </div>
    </div>
  );
};

export default EventSkeleton;
