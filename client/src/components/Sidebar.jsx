import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { FcFilledFilter, FcMenu } from 'react-icons/fc';
import Legend from './Legend';

export default function Sidebar({ crashes, setFiltered }) {
  const [open, setOpen] = useState(false);

  const handleFilterChange = async () => {
    // Implement  filter logic.
    const filteredCrashes = crashes.filter(
      (crash) => crash.ALCOHOL_INVOLVED === 'Y'
    );
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
        } flex flex-col justify-between h-full p-3 bg-gray-800 shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              Filter Data
              <FcFilledFilter />
            </h2>{' '}
            <button onClick={() => setOpen(!open)}>
              <FcMenu style={{ fontSize: 24 }} />
            </button>{' '}
          </div>{' '}
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <button
                  onClick={handleFilterChange}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaBeer style={{ fontSize: 24 }} />
                  <span className="text-gray-100"> Alcohol Involved </span>{' '}
                </button>{' '}
              </li>{' '}
              <li className="rounded-sm">
                <button
                  onClick={handleFilterChange}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaBeer style={{ fontSize: 24 }} />
                  <span className="text-gray-100"> Alcohol Involved </span>{' '}
                </button>{' '}
              </li>{' '}
              <li className="rounded-sm">
                <button
                  onClick={handleFilterChange}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaBeer style={{ fontSize: 24 }} />
                  <span className="text-gray-100"> Alcohol Involved </span>{' '}
                </button>{' '}
              </li>{' '}
              <li className="rounded-sm">
                <button
                  onClick={handleFilterChange}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaBeer style={{ fontSize: 24 }} />
                  <span className="text-gray-100"> Alcohol Involved </span>{' '}
                </button>{' '}
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
        <Legend />
      </div>{' '}
    </div>
  );
}
