// == Initialisation
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// == Actions
import {
submitDeconnexion,
openMenu
} from 'src/actions/authentification';

// == Style
import './styles.scss';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { BiPlus } from 'react-icons/bi';

// == Composant
function FloatingMenu() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.auth.openMenu.isOpen)
    const handleClick = () => {
        dispatch(openMenu());
    }
    const handleDeconnexion = () => {
        dispatch(submitDeconnexion())
    }
    return (
        <>
            <div className='menucontainer' >
                <div className={!isOpen ? 'toggleButton' : 'toggleButton toggleButton--open'} >
                    {isOpen ? (
                        <IconButton
                            onClick={handleClick}
                            style={{ transform: "rotate(45deg)" }}
                        >
                            <BiPlus size={`6vh`} color={theme.palette.primary.main}/>
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={handleClick}
                        >
                            <BiPlus size={`6vh`} color={theme.palette.primary.main}/>
                        </IconButton>
                    )
                    }
                </div>
                <div className={!isOpen ? 'menu' : 'menu menu--open'} >
                <NavLink
                    key="profilePage"
                    to="/profile"
                  >
                  Profile
                  </NavLink>
                    <span onClick={handleDeconnexion}>Déconnexion</span>
                </div>
            </div>
        </>
    );
}

export default FloatingMenu;