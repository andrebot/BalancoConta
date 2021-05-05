import React from 'react';
import Button from '../../components/button/button.jsx';
import './accountPage.styl';

export default () => {
  return (
    <div className="container recurrent-expanses">
      <div className="container-title">
        <div></div>
        <span>Recurrent Expanses</span>
        <Button icon="/icons/plus.svg" isCircle={true}/>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due Day</th>
            <th>Type</th>
            <th>Value</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Condomínio</td>
            <td>15</td>
            <td>Casa</td>
            <td>R$ 950,00</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Contador</td>
            <td>10</td>
            <td>Empresa</td>
            <td>R$ 576,00</td>
            <td><input type="checkbox" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
