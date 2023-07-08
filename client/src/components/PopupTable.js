import React from 'react';

const PopupTable = ({ data }) => {
  return (
    <table>
      <tbody>
        {' '}
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td> {key} </td> <td> {value} </td>{' '}
          </tr>
        ))}{' '}
      </tbody>{' '}
    </table>
  );
};

export default PopupTable;
