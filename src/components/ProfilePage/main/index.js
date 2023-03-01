import {useSelector, useDispatch} from 'react-redux';

function ProfilePage() {
    const nickname = useSelector ((state) => state.auth.connectionModal.nickname)
    return (
        <div className='mainProfile'>
            <p>Bienvenue {nickname} !</p>
            <p>Page en cours de développement</p>
        </div>
    );
}

export default ProfilePage;