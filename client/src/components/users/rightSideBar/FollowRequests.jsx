import React from "react";

function FollowRequests() {
  return (
    <div>
      <div className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {" "}
            Requests
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                </div>
                <div className="flex justify-between gap-2 text-base font-semibold text-gray-900 dark:text-white">
                  <button className="bg-accent text-white font-normal px-2 py-2 rounded-md ">
                    Accept
                  </button>
                  <button className="bg-secondary text-gray-700 font-normal px-1 py-2 rounded-md">
                    Reject
                  </button>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                </div>
                <div className="flex justify-between gap-2 text-base font-semibold text-gray-900 dark:text-white">
                  <button className="bg-accent text-white font-medium px-1 py-2 rounded-md">
                    Accept
                  </button>
                  <button className="bg-secondary text-gray-700 font-medium px-1 py-2 rounded-md">
                    Reject
                  </button>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                </div>
                <div className="flex justify-between gap-2 text-base font-semibold text-gray-900 dark:text-white">
                  <button className="bg-accent text-white font-medium px-1 py-2 rounded-md">
                    Accept
                  </button>
                  <button className="bg-secondary text-gray-700 font-medium px-1 py-2 rounded-md">
                    Reject
                  </button>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                </div>
                <div className="flex justify-between gap-2 text-base font-semibold text-gray-900 dark:text-white">
                  <button className="bg-accent text-white font-medium px-1 py-2 rounded-md">
                    Accept
                  </button>
                  <button className="bg-secondary text-gray-700 font-medium px-1 py-2 rounded-md">
                    Reject
                  </button>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                </div>
                <div className="flex justify-between gap-2 text-base font-semibold text-gray-900 dark:text-white">
                  <button className="bg-accent text-white font-medium px-1 py-2 rounded-md">
                    Accept
                  </button>
                  <button className="bg-secondary text-gray-700 font-medium px-1 py-2 rounded-md">
                    Reject
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FollowRequests;
