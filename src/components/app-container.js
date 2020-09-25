import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Grid, Paper, Button, FormControl } from "@material-ui/core";
import Select from "./select";
import TableCars from "./cars";
import TableCarsCompare from "./compare";
import * as S from "./styled";

const styles = {
  root: {
    flexGrow: 1,
  },

  grow: {
    flexGrow: 1,
  },

  flex: {
    display: "flex",
    justifyContent: "center",
  },

  select: {
    width: "100%",
    height: 40,
    margin: "10px 0px",
    border: "2px solid #24BCE2",
    borderRadius: "8px",
    padding: "0 10px",
  },

  formControl: {
    width: "100%",
  },

  formControltable: {
    width: "100%",
    marginLeft: "5px",
  },

  paper: {
    padding: "20px 20px",
    margin: "10px 0px",
  },

  button: {
    marginRight: 10,
    color: "#999999",
    background: "#797979",
    opacity: " 0.6",
  },

  buttonB: {
    background: "#24BCE2",
    marginRight: "15px",
  },

  buttonA: {
    textDecoration: "none",
  },
};

const AppContent = ({
  classes,
  marca,
  marcaCompare,
  veiculo,
  veiculoCompare,
  modelo,
  modeloCompare,
  handleClear,
  handleChange,
  handleSubmit,
  infoTable,
  infoTableCompare,
}) => {
  return (
    <div className={classes.root}>
      <S.Header>
        <S.Titulo>Tabela de Comparação de Veículos</S.Titulo>
      </S.Header>

      <Grid container className={classes.root}>
        <Grid item className={classes.flex} xs={12}>
          <Grid item xs={8}>
            <Paper className={`${classes.paper} ${classes.flex}`}>
              <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                  <FormControl className={classes.formControl}>
                    <Select
                      name="tipo"
                      placeholder="Tipo de veículo"
                      options={[
                        { name: "Carro" },
                        { name: "Caminhão" },
                        { name: "Motos" },
                      ]}
                      classe={classes.select}
                      handleChange={handleChange}
                    />

                    <Select
                      name="marca"
                      placeholder="Marca"
                      options={marca}
                      classe={classes.select}
                      handleChange={handleChange}
                    />

                    <Select
                      name="veiculo"
                      placeholder="Veículo"
                      options={veiculo}
                      classe={classes.select}
                      handleChange={handleChange}
                    />

                    <Select
                      name="modeloeano"
                      placeholder="Modelo"
                      options={modelo}
                      classe={classes.select}
                      handleChange={handleChange}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl className={classes.formControltable}>
                    <Select
                      name="tipoCompare"
                      placeholder="Tipo de veículo"
                      options={[
                        { name: "Carro" },
                        { name: "Caminhão" },
                        { name: "Motos" },
                      ]}
                      classe={classes.select}
                      handleChange={handleChange}
                    />

                    <Select
                      name="marcaCompare"
                      placeholder="Marca"
                      options={marcaCompare}
                      classe={classes.select}
                      handleChange={handleChange}
                    />

                    <Select
                      name="veiculoCompare"
                      placeholder="Veículo"
                      options={veiculoCompare}
                      classe={classes.select}
                      handleChange={handleChange}
                    />

                    <Select
                      name="modeloeanoCompare"
                      placeholder="Modelo"
                      options={modeloCompare}
                      classe={classes.select}
                      handleChange={handleChange}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    color="primary"
                    className={classes.buttonB}
                  >
                    Comparar
                  </Button>

                  <Button
                    variant="contained"
                    onClick={handleClear}
                    color="default"
                    className={classes.button}
                  >
                    Limpar
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            {!!infoTable.length && !!infoTableCompare.length && (
              <Paper>
                <Grid container spacing={16}>
                  <Grid item xs={12} md={6}>
                    {!!infoTable.length && <TableCars info={infoTable} />}
                  </Grid>

                  <Grid item xs={12} md={6}>
                    {!!infoTableCompare.length && (
                      <TableCarsCompare infoCompare={infoTableCompare} />
                    )}
                  </Grid>
                </Grid>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(AppContent);
