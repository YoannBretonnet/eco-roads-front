import { useSelector, useDispatch } from "react-redux";
import { submitDeconnexion } from 'src/actions/authentification';
import './styles.scss'

function Menu() {
    const nickname = useSelector ((state) => state.auth.connectionModal.nickname);
    const isOpen = useSelector ((state) => state.auth.openMenu.isOpen);
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(submitDeconnexion());
        }

    return (
            <div className= "container">
                <div className= {!isOpen? "settings" : "settings--open"}>
                <p className='connexionParagraph'>Bonjour {nickname} !</p>
                <button
                className='connexionButton'
                onClick={handleOnClick}
                >
                Votre profile
                </button>
                <button
                className='connexionButton'
                onClick={handleOnClick}
                >
                Vos trajets sauvegardés
                </button>
                <button
                className='connexionButton'
                onClick={handleOnClick}
                >
                Deconnexion
                </button>
                </div>
            </div>
    );
}

export default Menu;