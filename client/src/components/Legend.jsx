import React from 'react';

const Legend = () => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-slate-500 mb-2">
      <h2 className="text-lg font-semibold mb-4">Legend</h2>
      <div className="flex items-center mb-2">
        <div className="w-4 h-4 mr-2 bg-blue-500 rounded-full"></div>
        <span className="text-sm">Severe Injuries</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 bg-red-500 rounded-full"></div>
        <span className="text-sm">Fatality</span>
      </div>
    </div>
  );
};

export default Legend;
