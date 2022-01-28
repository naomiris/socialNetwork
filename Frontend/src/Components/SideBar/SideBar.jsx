import { StyledSideBar } from "./styles";
import Channels from '../Icons/Channels'
import { useState } from "react";
import Chevron from '../Icons/Chevron'
import Red from '../Icons/Red'
import Settings from '../Icons/Settings';
import { useUserAuth } from "../Context/UserContext";
import { Link } from "react-router-dom";


export default function SideBar() {

    const { user, logOut } = useUserAuth()
    console.log(user)

    const handleLogOut = () => {
        try {
            logOut();

        } catch (error) {
            console.log(error.message)
        }
    }
    const [isuser, setIsUser] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        if (isuser) setIsUser(false);
    }
    const handleClick = () => setIsUser(!isuser);

    return (
        <StyledSideBar className={open ? 'open' : undefined}>
            <button className={open ? 'open menu-button' : 'menu-button'} onClick={handleOpen}>
                <span className='menu-icon' />
                <span className='menu-icon2' />
            </button>
            <div className='user'>
                <button onClick={handleClick}>
                    <img src={user.photoURL} alt="" />
                    <p>{user.displayName?.split(' ')[0]}</p>
                    <span className={isuser ? 'chevron' : undefined}><Chevron /></span>
                </button>
            </div>
            {
                isuser && open &&
                <div className='settings'>

                    <Link to='/myprofile'><p># Perfil</p></Link>
                    <button className='cerrar-sesion' onClick={handleLogOut}>
                        <a href="/"># Cerrar sesion</a>
                    </button>
                </div>
            }
            <details open={open === false && undefined}>
                <summary className='canales'>
                    <Channels />
                    Canales
                    <span><Chevron /></span>
                </summary>
                {
                    open &&
                    <ul className='list'>
                        <Link to="/chat"><li><p># Canal 1</p></li></Link>
                    </ul>
                }
            </details>
            <details open={open === false && undefined}>
                <summary className='canales'>
                    <Red />
                    Red
                    <span><Chevron /></span>
                </summary>
                {
                    open &&
                    <ul className='list'>
                        <li><Link to='/suggestions'># Sugerencias</Link></li>
                    </ul>
                }
            </details>
            <details open={open === false && undefined}>
                <summary className='canales'>
                    <Settings />
                    Settings
                    <span><Chevron /></span>
                </summary>
                {
                    open &&
                    <ul className='list'>
                        <Link to="/edit"><li><p># Editar perfil</p></li></Link>
                    </ul>
                }
            </details>
        </StyledSideBar>
    )
}
