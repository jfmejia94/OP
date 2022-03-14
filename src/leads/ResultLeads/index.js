import React from "react";
import "./ResultLeads.css";
import "./useLeads.js";

import { LeadItem } from "../LeadItem";
import { SearchLeads } from "../SearchLeads";
import { CounterLeads } from "../CounterLeads";

//material design
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import { useLeads } from "./useLeads.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const useStylesPagination = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ResultLeads() {
  //Servicios de leads
  const defaultLeads = useLeads();

  //estados
  const [leads, setLeads] = React.useState(defaultLeads);
  const [searchTextValue, setSearchText] = React.useState("");
  const [searchFuenteValue, setSearchFuente] = React.useState("");
  const [searchMunicipioValue, setSearchMunicipio] = React.useState("");

  //stilos material
  const classes = useStyles();
  const classesPagination = useStylesPagination();

  //contador de leads completado
  const completeIntegradeLeads = leads.filter(
    (lead) => lead.estado_integracion === "1"
  ).length;
  //contador de leads completado
  const totalLeads = leads.length;

  //busqueda por campo de texto busqueda
  let searchLeadsTodos = [];

  console.log("campo-busqueda: " + searchTextValue.length + "campo-fuente: " + searchFuenteValue.length + "municipio-busqueda: " + searchMunicipioValue.length );

  if ((!searchTextValue.length >= 1) && (!searchFuenteValue.length >= 1) && (!searchMunicipioValue.length >= 1)) {
    searchLeadsTodos = leads;
  } else {
    searchLeadsTodos = leads.filter((lead) => {

      const leadText = lead.nombre.toLowerCase();
      const leadFuente = lead.fuente.toLowerCase();
      const leadMunicipio = lead.municipio.toLowerCase();

      //valor a buscar campo de texto
      const searchText = searchTextValue.toLowerCase();
      if(searchText){
        return leadText.includes(searchText);
      }

      //valor a buscar fuente
      const searchFuente = searchFuenteValue.toLowerCase();
      if(searchFuente){
        return leadFuente.includes(searchFuente);
      }

      //valor a buscar municipio
      const searchMunicipio = searchMunicipioValue.toLowerCase();
      if(searchMunicipio){
        return leadMunicipio.includes(searchMunicipio);
      }
    });
  }

  //busqueda por campo de fuente
  /*if (!searchFuenteValue.length >= 1) {
    searchLeadsTodos = leads;
  } else {
    searchLeadsTodos = leads.filter((lead) => {
      //base de datos
      const leadFuente = lead.fuente.toLowerCase();

      //valor a buscar
      const searchFuente = searchFuenteValue.toLowerCase();

     
    });
  }*/

  //busqueda por campo de Ciudad
 /* if (!searchMunicipioValue.length >= 1) {
    searchLeadsTodos = leads;
  } else {
    searchLeadsTodos = leads.filter((lead) => {
      //base de datos
      const leadMunicipio = lead.municipio.toLowerCase();

      //valor a buscar
      const searchMunicipio = searchMunicipioValue.toLowerCase();

      return leadMunicipio.includes(searchMunicipio);
    });
  }*/

  return (
    <React.Fragment>
      <div>
        <SearchLeads
          searchText={searchTextValue}
          setSearchText={setSearchText}
          searchFuenteValue={searchFuenteValue}
          setSearchFuente={setSearchFuente}
          searchMunicipioValue={searchMunicipioValue}
          setSearchMunicipio={setSearchMunicipio}
        />
        <CounterLeads
          total={totalLeads}
          totalComplete={completeIntegradeLeads}
        />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="middle"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow className="titletable">
                <TableCell>ID</TableCell>
                <TableCell align="right">NOMBRE</TableCell>
                <TableCell align="center">CORREO</TableCell>
                <TableCell align="center">DOCUMENTO</TableCell>
                <TableCell align="center">MARCA</TableCell>
                <TableCell align="center">SOCIO</TableCell>
                <TableCell align="center">FECHA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchLeadsTodos.map((row) => (
                <LeadItem
                  id={row.id}
                  nombre={row.nombre}
                  documento={row.documento}
                  correo={row.correo}
                  marca={row.marca}
                  socio={row.socio}
                  fecha={row.fecha}
                  // completed={todo.completed}
                  // onComplete={() => completeTodo(todo.text)}
                  // onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classesPagination.root}>
          <Pagination count={10} />
        </div>
      </div>
    </React.Fragment>
  );
}

export { ResultLeads };
