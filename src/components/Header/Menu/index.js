import { useSelector, useDispatch } from "react-redux";
import { submitDeconnexion } from 'src/actions/authentification';
import './styles.scss'

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import {
    BiDotsVerticalRounded
  } from 'react-icons/bi';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nickname = useSelector((state) => state.auth.connectionModal.nickname)

  return (
    <div>
        <IconButton
        onClick={handleClick}
        aria-haspopup="true"       
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
      >
      <BiDotsVerticalRounded size={`6vh`} color={'blue'}
      />
        </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <p>Bienvenue {nickname} !</p>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Trajets sauvegardés</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
