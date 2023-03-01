
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import {
    submitDeconnexion,
    openMenu
  } from 'src/actions/authentification';
  
import { useTheme } from '@mui/material/styles';
import {
    Box,
    IconButton,
    Tooltip,
    useMediaQuery,
  } from '@mui/material';
import {
    BiPlus
  } from 'react-icons/bi';

import './styles.scss'

function FloatingMenu () {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isOpen = useSelector ((state) => state.auth.openMenu.isOpen)
    const handleClick = () => {
        dispatch(openMenu());
    }
    const handleDeconnexion = () => {
        dispatch(submitDeconnexion())
    }
    return (
            <>
                
                    <div className= 'menucontainer' >
                        <div className= {!isOpen ? 'toggleButton' :'toggleButton toggleButton--open'} >
                        {isOpen ? 
                        <IconButton
                        onClick={handleClick}
                        style={{transform: "rotate(45deg)"}}
                        >
                        <BiPlus size={`6vh`} color={theme.palette.primary.main}
                        />
                        </IconButton>
                        :
                        <IconButton
                        onClick={handleClick}
                        
                       >
                        <BiPlus size={`6vh`} color={theme.palette.primary.main}
                        />
                        </IconButton>
                         }
                        </div>
                    <div className= {!isOpen ? 'menu' :'menu menu--open'} >
                                    <NavLink
                                        key="profilePage"
                                        to="/profile"
                                    >
                                        Profile
                                  </NavLink>
                            <button
                            onClick={handleDeconnexion}
                            >Déconnexion</button>
                        </div>
                     </div>
                    </>
    );
}

export default FloatingMenu;