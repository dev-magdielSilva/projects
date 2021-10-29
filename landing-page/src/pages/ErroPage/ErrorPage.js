import { Typography, Button } from "@mui/material";
import {goToLandingPage} from "../../router/coordinator"
import {useHistory} from "react-router"
import React from "react";
import ErroImage from "../../assets/ErroImage.png";
import { ContainerImage, StyledErrorPage } from "./styled";

const ErrorPage = () => {
    const history = useHistory()

  return (
    <StyledErrorPage>
         <Button
        onClick={() => goToLandingPage(history)}
        variant={"contained"}
        color={"primary"}
      >
        voltar
      </Button>
      <Typography variant={"h5"} color={"primary"}>
        Erro! Clique em voltar
      </Typography>
      <ContainerImage src={ErroImage} />
     
    </StyledErrorPage>
  );
};

export default ErrorPage;
