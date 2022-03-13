import React from "react";
import "./SearchLeads.css";

//material design
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStylesSelector = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 102,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function SearchLeads({ searchText, setSearchText, searchFuenteValue, setSearchFuente, searchMunicipioValue, setSearchMunicipio  }) {

  const classesSelector = useStylesSelector();

  const handleChangeText = (event) => {
    setSearchText(event.target.value)
  };

  const handleChangeFuente = (event) => {
    setSearchFuente(event.target.value)
  };

  const handleChangeMunicipio = (event) => {
    setSearchMunicipio(event.target.value)
  };

  return (
    <div className="content-search">
      <FormControl className={classesSelector.formControl}>
        <InputLabel id="demo-simple-select-label">Fecha</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
        >
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="Pagina de producto">Pagina de producto</MenuItem>
          <MenuItem value="Hotsite">Hotsite</MenuItem>
          <MenuItem value="Simulador Credito">Simulador Credito</MenuItem>
          <MenuItem value="Sufi">Sufi</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classesSelector.formControl}>
        <InputLabel id="demo-simple-select-label-fuente">Fuente</InputLabel>
        <Select
          labelId="demo-simple-select-label-fuente"
          id="demo-simple-select-fuente"
          value={searchFuenteValue}
          onChange={handleChangeFuente}
        >
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="Pagina de producto">Pagina de producto</MenuItem>
          <MenuItem value="Hotsite">Hotsite</MenuItem>
          <MenuItem value="Simulador Credito">Simulador Credito</MenuItem>
          <MenuItem value="Sufi">Sufi</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classesSelector.formControl}>
        <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
        <Select
          labelId="demo-simple-select-label-ciudad"
          id="demo-simple-select-ciudad"
          value={searchMunicipioValue}
          onChange={handleChangeMunicipio}
        >
          <MenuItem value="Medellín">Medellín</MenuItem>
          <MenuItem value="Cali">Cali</MenuItem>
          <MenuItem value="Bogota">Bogota</MenuItem>
          <MenuItem value="Pereira">Pereira</MenuItem>
          <MenuItem value="Sincelejo">Sincelejo</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classesSelector.formControl}>
        <InputLabel id="demo-simple-select-label">Marca</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="VICTORY">VICTORY</MenuItem>
          <MenuItem value="BENELLI">BENELLI</MenuItem>
          <MenuItem value="STARKER">STARKER</MenuItem>
          <MenuItem value="KAWASAKI">KAWASAKI</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classesSelector.formControl}>
        <InputLabel id="demo-simple-select-label">Socio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={10}>DISMERCA 33</MenuItem>
          <MenuItem value={20}>DISMERCA BAYADERA</MenuItem>
          <MenuItem value={30}>DISMERCA 34</MenuItem>
          <MenuItem value={30}>DISMERCA 35</MenuItem>
          <MenuItem value={30}>DISMERCA 23</MenuItem>
          <MenuItem value={30}>DISMERCA 3311</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classesSelector.formControl}>
        <InputLabel id="demo-simple-select-label">Estrategia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          //onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classesSelector.formControl}>
        <TextField id="standard-basic" label="Buscar" onChange={handleChangeText} value={searchText}/>
      </FormControl>
    </div>
  );
}

export { SearchLeads };
