import React from 'react';

import './table.styl';

const Table = ({ children, header, data }) => {
  const emptyPlaceReg = / +/g;

  return (
    <table>
      <thead>
        <tr>
          {header && 
            header.map((head, index) => 
              <th key={index}>{head}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {data && 
          data.map((line, index) =>
            <tr key={`line${index}`}>
              {header.map((head, indexH) =>
                <td key={`td${indexH}`}>{line[head.toLowerCase().replace(emptyPlaceReg, '')]}</td>
              )}
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default Table;
