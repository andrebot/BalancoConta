import React from 'react';
import Button from '../../components/button/button.jsx';
import './accountPage.styl';

export default () => {
  return (
    <div>
      <div className="acc-page-row">
        <div className="container page-containers">
          <div className="container-title">
            <div></div>
            <span>Income</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Where</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Salário</td>
                <td>8</td>
                <td>Brasil PJ</td>
                <td>Radical Imaging</td>
                <td>R$ 54.950,00</td>
              </tr>
              <tr>
                <td>LCI IPCA</td>
                <td>10</td>
                <td>XP Invest</td>
                <td>Computador 2023</td>
                <td>R$ 1.543,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container page-containers">
          <div className="container-title">
            <div></div>
            <span>Budget</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Spent</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Pessoal</td>
                <td>R$ 650,00</td>
                <td>R$ 950,00</td>
              </tr>
              <tr>
                <td>Casa</td>
                <td>R$ 543,00</td>
                <td>R$ 1.543,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="acc-page-row">
        <div className="container page-containers">
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
        <div className="container page-containers">
          <div className="container-title">
            <div></div>
            <span>Transfers</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Brasil PJ</td>
                <td>Inter PF</td>
                <td>10</td>
                <td>R$ 34.950,00</td>
              </tr>
              <tr>
                <td>Inter PF</td>
                <td>XP invest</td>
                <td>11</td>
                <td>R$ 30.000,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="acc-page-row">
        <div className="container page-containers">
          <div className="container-title">
            <div></div>
            <span>Expanses</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Bank</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Cartão XP</td>
                <td>4</td>
                <td>XP Invest</td>
                <td>-</td>
                <td>R$ 4.950,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Trigopane</td>
                <td>4</td>
                <td>Inter PF</td>
                <td>Dieta</td>
                <td>R$ 40,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container page-containers">
          <div className="container-title">
            <div></div>
            <span>Investments</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Bank</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>LCI 98%</td>
                <td>15</td>
                <td>XP Invest</td>
                <td>Computador 2023</td>
                <td>R$ 4.950,00</td>
              </tr>
              <tr>
                <td>CDB 125%</td>
                <td>15</td>
                <td>XP Invest</td>
                <td>Férias 2021</td>
                <td>R$ 5.200,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="acc-page-row">
      <div className="container page-containers">
          <div className="container-title">
            <div></div>
            <span>Credit Card - XP Invest</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Bank</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>LCI 98%</td>
                <td>15</td>
                <td>XP Invest</td>
                <td>Computador 2023</td>
                <td>R$ 4.950,00</td>
              </tr>
              <tr>
                <td>CDB 125%</td>
                <td>15</td>
                <td>XP Invest</td>
                <td>Férias 2021</td>
                <td>R$ 5.200,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container page-containers">
          <div className="container-title">
            <div></div>
            <span>Credit Card - Bradesco</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Bank</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>LCI 98%</td>
                <td>15</td>
                <td>XP Invest</td>
                <td>Computador 2023</td>
                <td>R$ 4.950,00</td>
              </tr>
              <tr>
                <td>CDB 125%</td>
                <td>15</td>
                <td>XP Invest</td>
                <td>Férias 2021</td>
                <td>R$ 5.200,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
