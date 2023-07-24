import { useState } from 'react';

export default function Sidebar({ crashes, setFiltered }) {
  const [open, setOpen] = useState(false);

  const handleFilterChange = async () => {
    // Implement your filter logic here
    // Fetch filtered data from the API or manipulate the existing crashes data
    // For simplicity, let's assume the filteredCrashes is the filtered data
    const filteredCrashes = await crashes.filter(
      (crash) => crash.ALCOHOL_INVOLVED === 'Y'
    );
    console.log('handleFilterChange function called');
    // Call the callback function to update the crashes data in Map component
    setFiltered(filteredCrashes);
  };

  const handleReset = () => {
    setFiltered(crashes);
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-40' : 'w-60 '
        } flex flex-col h-full p-3 bg-gray-800 shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white"> Filter </h2>{' '}
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>{' '}
            </button>{' '}
          </div>{' '}
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <button
                  onClick={handleFilterChange}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 3,0 C 2,0 2,0.4670568 2,1 L 2,3 C 2,4 0,4 0,6 l 0,7 c 0,0.566252 0.467057,1 1,1 l 4,0 c 0.599561,0 1,-0.400439 1,-1 L 6,6 C 6,4 4,4 4,3 L 4,1 C 4,0.4337479 4,0 3,0 z m 4,5 c 0,3 0.47106,5 3,5 l 0,2 c 0,0.666911 -1,1 -1.5,1 -1,0 -1.5,0 -1.5,1 l 7,0 C 14,13 13.5,13 12.5,13 12,13 11,12.633602 11,12 l 0,-2 c 2.47106,0 3,-2 3,-5 L 7,5 z"
                    />
                  </svg>{' '}
                  <span className="text-gray-100"> Alcohol Involved </span>{' '}
                </button>{' '}
              </li>{' '}
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>{' '}
                  <span className="text-gray-100"> Inbox </span>{' '}
                </a>{' '}
              </li>{' '}
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>{' '}
                  <span className="text-gray-100"> Orders </span>{' '}
                </a>{' '}
              </li>{' '}
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{' '}
                  <span className="text-gray-100"> Settings </span>{' '}
                </a>{' '}
              </li>{' '}
              <li className="rounded-sm">
                <button
                  onClick={handleReset}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>{' '}
                  <span className="text-gray-100"> Reset </span>{' '}
                </button>{' '}
              </li>{' '}
            </ul>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
