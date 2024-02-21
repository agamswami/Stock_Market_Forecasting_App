import React from 'react';
import NiftyTable from './NiftyTable';
import CompanyTable from './CompanyTable';
import TopGainersTable from './TopGainersTable';
import FiftyTwoWeekHighTable from './FiftyTwoWeekHighTable';
import './Table.css';

function Table() {
  return (
    <div className = "flexcontainer" >
      <div className="table-wrapper">
        <h1 className="mb-5">Market Action</h1>
        <div className="table-container">
          <NiftyTable />
        </div>
        <div>
          <CompanyTable />
        </div>
        <h1 className='mb-5'>Stock Action</h1>
        <div className="table-container right">
          <TopGainersTable />
        </div>
        <div className="table-container full-width">
          <FiftyTwoWeekHighTable />
        </div>
      </div>
    </div>
  );
}

export default Table;
