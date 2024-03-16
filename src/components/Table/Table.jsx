import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import TableRow from "./TableRow/TableRow"
import "./Table.css"
import TablePagination from '@mui/material/TablePagination';
import { getSymbols } from "../../Apirequest/ApiDetail";



function Table(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [tableData ,setTableData] = useState([])

  function handleChangePage (event, newPage){
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    console.log("b");
      async function fetchAllSymbol() {
        console.log("c");
        try{
          const response = await getSymbols();
        
          setTableData(response);

          console.log(response);
          // console.log(details);
          // console.log(details[0]);
        } catch (error){
          setTableData([]);
          console.log(error);
        }
      }
      fetchAllSymbol();
    }
  ,[])
 
  const data = [
    {symbol : "atul" ,name : 1} ,
    {symbol : "atul" ,name : 1} 
  ]
  return (
    <div className="TableDiv mx-4 px-2 d-flex flex-column align-items-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" className="opacity-50 text-nowrap">SYMBOL</th>
            <th scope="col" className="opacity-50 text-nowrap">NAME</th>
            {/* <th scope="col" className="opacity-50 text-nowrap">CLOSE PRICE</th>
            <th scope="col" className="opacity-50 text-nowrap">MARKET CAP</th> */}
          </tr>
        </thead>
          <TableRow data = {tableData.slice((page*rowsPerPage),((page+1)*rowsPerPage))}/>
      </table>
      <div className="pagination d-flex align-items-center">
        <TablePagination
        component="div"
        count={tableData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

export default Table;
