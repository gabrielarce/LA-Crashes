import React from 'react';

const dayOfWeek = (day) => {
  switch (day) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day';
  }
};

function convertToAmPmTime(militaryTime) {
  if (militaryTime === undefined) {
    return 'Time not recorded';
  }

  let [hours, minutes] = militaryTime.split(':').map(Number);
  let period = 'AM';

  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }
  return `${hours}:${String(minutes).padStart(2, '0')} ${period}`;
}

const PopupTable = ({ data }) => {
  return (
    <div className="max-w-md mx-auto p-2 bg-white shadow-md rounded-md">
      <div className="my-0 flex justify-between">
        <span className="text-lg font-semibold">Crash Date: </span>
        <span className="text-lg font-normal ml-3">
          {' '}
          {data.COLLISION_DATE.split('T')[0]}{' '}
        </span>
      </div>
      <div className="my-1 flex justify-between">
        <span className="text-lg font-semibold my-0">Time: </span>
        <span className="text-lg font-normal">
          {' '}
          {convertToAmPmTime(data.COLLISION_TIME)}{' '}
        </span>
      </div>
      <div className="my-1 flex justify-between">
        <span className="text-lg font-semibold my-0">Day of Week: </span>
        <span className="text-lg font-normal ml-3">
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
