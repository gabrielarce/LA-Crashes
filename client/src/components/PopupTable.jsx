import React from 'react';

const PopupTable = ({ data }) => {
  return (
    // <table>
    //   <tbody>
    //     {' '}
    //     {Object.entries(data).map(([key, value]) => (
    //       <tr key={key}>
    //         <td> {key} </td> <td> {value} </td>{' '}
    //       </tr>
    //     ))}{' '}
    //   </tbody>{' '}
    // </table>
    <div className="max-w-md mx-auto p-2 bg-white shadow-md rounded-md">
      <div className="my-0 flex justify-between">
        <span className="text-lg font-semibold my-0">Crash Date: </span>
        <span className="text-lg font-normal">
          {' '}
          {data.COLLISION_DATE.split('T')[0]}{' '}
        </span>
      </div>
      <div className="my-0 flex justify-between">
        <span className="text-lg font-semibold my-0">Time: </span>
        <span className="text-lg font-normal"> {data.COLLISION_TIME} </span>
      </div>
      <div className="my-0 flex justify-between">
        <span className="text-lg font-semibold my-0">Day of Week: </span>
        <span className="text-lg font-normal"> {data.DAY_OF_WEEK} </span>
      </div>
    </div>
  );
};

export default PopupTable;
