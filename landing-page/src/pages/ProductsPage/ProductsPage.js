import { Button } from "@mui/material";
import { useContext } from "react";
import { StyledButton } from "./styled";
import React from "react";
import { useHistory } from "react-router";
import { goToLandingPage } from "../../router/coordinator";
import ListProducts from "./ProductsPageList";
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext";
import {CardUserData, ContainerUser, ContainerPG} from "./styled"

const ProductsPage = () => {
  const history = useHistory();
  const {data, setData} = useContext(GlobalStateContext);
  console.log(data)

  return (
      <ContainerPG>
        <ContainerUser>
        <CardUserData>
        <h2>Temos disponibilidade para o seu endereço</h2>
        <p> Estado: {data.uf}</p>
        <p> Localidade: {data.localidade}</p>
        <p> Bairro: {data.bairro}</p>
        <p> Logradouro: {data.logradouro}</p>
        </CardUserData>
        </ContainerUser>
      <ListProducts/>
      <StyledButton>
        <Button
          onClick={() => goToLandingPage(history)}
          variant={"outlined"}
          color={"primary"}
        >
          ops, errei meu cep
        </Button>
      </StyledButton>
    </ContainerPG>

  );
};
export default ProductsPage;
