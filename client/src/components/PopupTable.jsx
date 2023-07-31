import React from 'react';

const dayOfWeek = (day) => {
  switch (day) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Invalid day';
  }
};

const PopupTable = ({ data }) => {
  return (
    <div className="max-w-md mx-auto p-2 bg-white shadow-md rounded-md">
      <div className="my-0 flex justify-between">
        <span className="text-lg font-semibold my-0">Crash Date: </span>
        <span className="text-lg font-normal">
          {' '}
          {data.COLLISION_DATE.split('T')[0]}{' '}
        </span>
      </div>
      <div className="my-1 flex justify-between">
        <span className="text-lg font-semibold my-0">Time: </span>
        <span className="text-lg font-normal"> {data.COLLISION_TIME} </span>
      </div>
      <div className="my-1 flex justify-between">
        <span className="text-lg font-semibold my-0">Day of Week: </span>
        <span className="text-lg font-normal">
          {' '}
          {dayOfWeek(data.DAY_OF_WEEK)}{' '}
        </span>
      </div>
      <div className="my-1 flex justify-between">
        <span className="text-base  my-0">
          <a
            href={`http://maps.google.com/maps?q=&layer=c&cbll=${data.POINT_Y},${data.POINT_X}&cbp=11,0,0,0,0`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Street View
          </a>{' '}
        </span>
      </div>
    </div>
  );
};

export default PopupTable;
