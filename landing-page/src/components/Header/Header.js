import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ContainerHeader } from './styled';

const Header = () => {
  return (
      <AppBar position="static">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
        <ContainerHeader>
          <Typography variant="h6" color="inherit" component="div">
            Desafio Técnico
          </Typography>
          </ContainerHeader>
      </AppBar>
  );
}

export default Header