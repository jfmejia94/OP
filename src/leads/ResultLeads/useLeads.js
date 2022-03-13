
function createData(id, nombre, correo, documento, marca, socio, municipio, fuente, estrategia, fecha, estado_integracion) {
  return { id, nombre, correo, documento, marca, socio, municipio, fuente, estrategia, fecha, estado_integracion };
}

function useLeads() {
  const rows = [
    createData(
      "1",
      "Jhon Freddy",
      "jfmejia@autecomobility.com",
      "12147238907",
      "KAWASAKI",
      "DISMERCA 33",
      "Medellín",
      "Facebook",
      "PAUTA",
      "2021-05-27",
      "1"
    ),
    createData(
      "2",
      "Wilmer fuentes",
      "wfuentes@autecomobility.com",
      "12147238903",
      "VICTORY",
      "DISMERCA BAYADERA",
      "Cali",
      "Pagina de producto",
      "Sitio Web",
      "2021-05-27",
      "0"
    ),
    createData(
      "3",
      "Daniela Upegui",
      "dupegui@autecomobility.com",
      "121472389047",
      "KAWASAKI",
      "DISMERCA 33",
      "Sincelejo",
      "Hotsite",
      "Sitio Web",
      "2021-05-27",
      "0"
    ),
    createData(
      "4",
      "Luisa Franco",
      "lfranco@autecomobility.com",
      "121472385907",
      "VICTORY",
      "DISMERCA 34",
      "Pereira",
      "Simulador Credito",
      "Sitio Web",
      "2021-05-27",
      "1"
    ),
    createData(
      "5",
      "Natalia Vargas",
      "nvargas@autecomobility.com",
      "121476238907",
      "STARKER",
      "DISMERCA 35",
      "Medellín",
      "Facebook",
      "PAUTA",
      "2021-05-27",
      "0"
    ),
    createData(
      "6",
      "Esteban Rojas",
      "erojas@utecomobility.com",
      "121473238907",
      "VICTORY",
      "DISMERCA 23",
      "Medellín",
      "Facebook",
      "PAUTA",
      "2021-05-27",
      "0"
    ),
    createData(
      "7",
      "Natalia Meza",
      "nmeza@utecomobility.com",
      "121472238907",
      "BENELLI",
      "DISMERCA 33",
      "Medellín",
      "Sufi",
      "OTRAS FUENTES",
      "2021-05-27",
      "1"
    ),
    createData(
      "8",
      "Duvi",
      "duvi@autecomobility.com",
      "121473238907",
      "VICTORY",
      "DISMERCA 34",
      "Cali",
      "Facebook",
      "PAUTA",
      "2021-05-27",
      "0"
    ),
    createData(
      "9",
      "Maria Claudia",
      "mclara@utecomboility.com",
      "121447238907",
      "BENELLI",
      "DISMERCA 3311",
      "Medellín",
      "Facebook",
      "PAUTA",
      "2021-05-27",
      "1"
    ),
  ];

  
  return (rows);
}

export { useLeads };
