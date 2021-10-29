import React, { useContext, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../constants/urls"
import { useHistory } from "react-router";
import { Button, TextField } from "@mui/material";
import {goToProductsPage} from "../../router/coordinator"
import {StyledInput, ContainerLandingPage} from "./styled"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext";

const LandingPage = () => {
    const history = useHistory()

  const [cep, setCep] = useState("");
  const {data, setData} = useContext(GlobalStateContext);

  const onChangeCep = (event) => {
      setCep(event.target.value)
  }

  const cepRequired = () => {
    axios.get(`${BASE_URL}${cep}/json`)
    .then((response)=>{
        console.log(response.data)
        setData(response.data)
        setCep("")
        goToProductsPage(history)
    })
    .catch(()=>{
        alert("Erro na requisição!")
    })
}
  return (
    <ContainerLandingPage>
      <StyledInput>
    <TextField
            value={cep}
            onChange={onChangeCep}
            label={"Insira o seu cep"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
          />
          <Button
            onClick={cepRequired}
            variant={"contained"}
            color={"primary"}
            fullWidth
          >
            BUSCAR
          </Button>
      </StyledInput>
      </ContainerLandingPage>

  );
};

export default LandingPage;
