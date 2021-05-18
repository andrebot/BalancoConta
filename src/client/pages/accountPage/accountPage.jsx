import React, { useState } from 'react';
import Button from '../../components/button/button.jsx';
import ButtonDatePicker from '../../components/datePicker/buttonDatePicker.jsx';
import Table from '../../components/table/table.jsx';

import { getMonth } from '../../helpers/date.js';

import './accountPage.styl';

export default () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="acc-page">
      <div className="header slider">
        <Button icon="/icons/down-chevron-black.svg" />
        <div>
          <ButtonDatePicker initDate={date} setDate={setDate} pickMethod="month" type="type2">
            {getMonth(date.getMonth())} - {date.getFullYear()}
          </ButtonDatePicker>
        </div>
        <Button icon="/icons/down-chevron-black.svg" />
      </div>
      <div className="left-panel">
        <div className="page-containers">
          <div className="container-title">
            <div></div>
            <span>Account Balance</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <Table 
            header={['Account', 'Balance']}
            data={[
              {account: 'Inter PF', balance: 'R$ 650,00'},
              {account: 'Brasil PF', balance: 'R$ 543,00'},
              {account: 'Brasil PJ', balance: 'R$ 324,00'},
              {account: 'XP Invest', balance: 'R$ 1.200,00'},
            ]}
          >
          </Table>
        </div>
        <div className="page-containers">
          <div className="container-title">
            <div></div>
            <span>Budget</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <Table
            header={['Name', 'Spent', 'Budget']}
            data={[
              {name: 'Pessoal', spent: 'R$ 650,00', budget: 'R$ 950,00'},
              {name: 'Casa', spent: 'R$ 543,00', budget: 'R$ 1.543,00'},
            ]}
          >
          </Table>
        </div>
        <div className="page-containers">
          <div className="container-title">
            <div></div>
            <span>Income</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <Table
            header={['Name', 'Date', 'Where', 'Type', 'Value']}
            data={[
              {name: 'Salário', date: 8, where: 'Brasil PJ', type: 'Radical Imaging', value: 'R$ 1.543,00'},
              {name: 'LCI IPCA', date: 10, where: 'XP Invest', type: 'Computador 2023', value: 'R$ 1.543,00'},
            ]}
          >
          </Table>
        </div>
      </div>
      <div className="content slider">
        <Button icon="/icons/down-chevron-black.svg"></Button>
        <div className="main">
          <div className="container-title">
            <div></div>
            <span>Expanses</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <Table
            header={['Item', 'Date', 'Account', 'Category', 'Value']}
            data={[
              {item: 'Cartão XP', date: 4, account: 'XP Invest', category: '-', value: 'R$ 4.950,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
              {item: 'Trigopane', date: 4, account: 'Inter PF', category: 'Dieta', value: 'R$ 40,00'},
            ]}
          >
          </Table>
        </div>
        <Button icon="/icons/down-chevron-black.svg"></Button>
      </div>
      <div className="right-panel">
        <div className="page-containers">
          <div className="container-title">
            <div></div>
            <span>Recurrent Expanses</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <Table
            header={['Name', 'Due Day', 'Type', 'Value', 'Paid']}
            data={[
              {name: 'Condomínio', dueday: 15, type: 'Casa', value: 'R$ 950,00', paid: <input type="checkbox" />},
              {name: 'Contador', dueday: 10, type: 'Empresa', value: 'R$ 576,00', paid: <input type="checkbox" />},
            ]}
          >
          </Table>
        </div>
        <div className="page-containers">
          <div className="container-title">
            <div></div>
            <span>Transfers</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <Table
            header={['From', 'To', 'Date', 'Value']}
            data={[
              {from: 'Brasil PJ', to: 'Inter PF', date: 10, value: 'R$ 34.950,00'},
              {from: 'Inter PF', to: 'XP Invest', date: 11, value: 'R$ 30.000,00'},
            ]}
          >
          </Table>
        </div>
        <div className="page-containers">
          <div className="container-title">
            <div></div>
            <span>Investments</span>
            <Button icon="/icons/plus.svg" isCircle={true}/>
          </div>
          <Table
            header={['Item', 'Date', 'Bank', 'Type', 'Value']}
            data={[
              {item: 'LCI 98%', date: 15, bank: 'XP Invest', type: 'Computador 2023', value: 'R$ 4.950,00'},
              {item: 'CDB 125%', date: 15, bank: 'XP Invest', type: 'Férias 2021', value: 'R$ 5.200,00'},
            ]}
          >
          </Table>
        </div>
      </div>
    </div>
  );
};
