import React from 'react';

import './table.styl';

const Table = ({ header, data }) => {
  const emptyPlaceReg = / +/g;

  return (
    <table>
      <thead>
        <tr>
          {header && 
            header.map((head, index) => 
              <th key={index}>{head.title}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {data && 
          data.map((line, index) =>
            <tr key={`line${index}`}>
              {header.map((head, indexH) =>
                <td key={`td${indexH}`}>{line[head.title.toLowerCase().replace(emptyPlaceReg, '')]}</td>
              )}
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default Table;
