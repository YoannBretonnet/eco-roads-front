import PropTypes from 'prop-types';
// == Style
import './styles.scss';
import {
  Box,
  Button,

} from '@mui/material';

// import data
import { useSelector, useDispatch } from 'react-redux';

function sidebar({ text, intLength, bornLength }) {
  const dispatch = useDispatch();
  return (
    <Box
      component="aside"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', marginTop: '2vh'}}
    >
      <p className="details">{bornLength} Bornes de recharge | {intLength} Points d'intéret</p>
      <Box sx={{ width: 'fit-content' }}>
        <Button onClick={() => dispatch(openCloseConnectionModal())} sx={{ fontSize: '10px', backgroundColor: '#6cc573', color: 'white' }}>{text}</Button>
      </Box>
    </Box>
  );
}

sidebar.propTypes = {
  text: PropTypes.string.isRequired,
  intLength: PropTypes.number.isRequired,
  bornLength: PropTypes.number.isRequired,
};

export default sidebar;
