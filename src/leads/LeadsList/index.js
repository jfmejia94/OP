import React from "react";

//material design
/*import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";*/



function LeadsList() {
  return (
      <section className="">
          { props.error && props.onError() }
          { props.loading && props.onLoading() }
          <ul>

          </ul>
      </section>
  );
}

export { LeadsList };
