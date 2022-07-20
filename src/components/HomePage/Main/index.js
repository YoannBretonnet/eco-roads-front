// == Style
import './styles.scss';
import Box from '@mui/material/Box';

// == Composant
function Main() {
  return (
    <Box component="main">
      <Box component="section">
        <figure className="content-picture">
          <figcaption className="picture-desc">Découvrez votre région en toute sérénité <br />au volant de votre voiture électrique</figcaption>
        </figure>
      </Box>
    </Box>
  );
}

// == Export
export default Main;
