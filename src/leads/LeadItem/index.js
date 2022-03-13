import React from "react";
import "./LeadItem.css";

//material design
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";



function LeadItem(props) {
  return (
    <TableRow key={props.nombre}>
      <TableCell align="center">{props.id}</TableCell>
      <TableCell align="center">{props.nombre}</TableCell>
      <TableCell align="center">{props.correo}</TableCell>
      <TableCell align="center">{props.documento}</TableCell>
      <TableCell align="center">{props.marca}</TableCell>
      <TableCell align="center">{props.socio}</TableCell>
      <TableCell align="center">{props.fecha}</TableCell>
    </TableRow>
  );
}

export { LeadItem };
