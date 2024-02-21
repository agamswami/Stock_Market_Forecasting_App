import React from 'react';

function CompanyTable() {
  return (
    <div className="table-container all-table mb-5"  >
      <h2>Indian Indices</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Price</th>
            <th>Change</th>
            <th>Val. (Cr.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HDFC Bank</td>
            <td>1,439.15</td>
            <td>-15.15</td>
            <td>3,318.59</td>
          </tr>
          <tr>
            <td>ABB India</td>
            <td>4,984.70</td>
            <td>460.20</td>
            <td>2,159.03</td>
          </tr>
          <tr>
            <td>Jio Financial</td>
            <td>290.10</td>
            <td>8.40</td>
            <td>1,857.26</td>
          </tr>
          <tr>
            <td>Zee Entertain</td>
            <td>164.60</td>
            <td>-28.05</td>
            <td>1,816.11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTable;
