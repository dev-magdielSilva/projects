import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { StyledCard, StyledContainerCard } from "./styled";

export const ProductsPageList = [
  {
    velocidade: "100 mega",
    descrição: "Contrata 50 MB e ganha mais 50 MB",
    descrição2: "Sem Limite de Download",
    descrição3: "Wi-Fi Grátis",
  },
  {
    velocidade: "300 mega",
    descrição: "Contrata 150 MB e ganha mais 150 MB",
    descrição2: "Sem Limite de Download",
    descrição3: "Wi-Fi Grátis",
  },
  {
    velocidade: "500 mega",
    descrição: "Contrata 300 MB e ganha mais 200 MB",
    descrição2: "Sem Limite de Download",
    descrição3: "Wi-Fi Grátis",
  },
  
];

const ListProducts = () => {
  const ProductsLists = ProductsPageList.map((product) => {
    
    return (
<Card sx={{ maxWidth: 345 }} key={product.velocidade}>
<CardMedia
  component="img"
  height="140"
  image="https://img.olhardigital.com.br/wp-content/uploads/2021/06/internet-1-1000x450.jpg"
  alt="imagem - internet"
/>
  <StyledCard>
    <b>
      <Typography gutterBottom variant="h5" component="div">
        {product.velocidade}
      </Typography>
    </b>
    <Typography variant="body2" color="text.secondary">
      {product.descrição}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {product.descrição2}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {product.descrição3}
    </Typography>
  </StyledCard>
<CardActions>
  <Button variant={"contained"} color={"primary"} size="small">
    COMPRAR
  </Button>
  <Button variant={"outlined"} color={"primary"} size="small">
    DETALHES
  </Button>
</CardActions>
</Card> 
    );
  });
  return <StyledContainerCard>{ProductsLists}</StyledContainerCard>;
};

export default ListProducts;
