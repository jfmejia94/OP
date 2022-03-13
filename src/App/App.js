import React from "react";
import "./App.css";

//Components
//import { SearchLeads } from "../leads/SearchLeads";
import { ResultLeads } from "../leads/ResultLeads";
//import { CounterLeads } from "../leads/CounterLeads";

//Material design
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <ResultLeads>
          
        </ResultLeads>
      </Container>
    </React.Fragment>
  );
}

export default App;
