import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { StyledPost } from "./styles";
import Experience from '../Icons/Experience'
import CommentBubble from '../Icons/CommentBubble'
import Share from '../Icons/Share'
import DefaultUser from '../Icons/DefaultUser'

export default function Post({ p }) {
    return (
        <StyledPost className='post'>
            <Link className='post__link' to={`/profile/${p.autorData[0]?.id}`}>
                {p.autorData[0]?.profile.startsWith('https://avatars.') ?
                    <img className='post__avatar' src={p.autorData[0]?.profile} alt={p.autorData[0]?.fullname} /> :
                    <DefaultUser className='post__avatar' />
                }
            </Link>
            <div className='post__info'>
                <header className='post__header'>
                    <p className='post__fullname'>{p.autorData[0]?.fullname}</p>
                    <p className='post__date'>{format(p?.createdAt)}</p>
                </header>
                <p className='post__description'>{p.description}</p>
                <footer className='post__footer'>
                    <div className='post__stats'>
                        <p className='post__likes stats'><Experience /> 10</p>
                        <p className='post__comments stats'><CommentBubble /> 15</p>
                    </div>
                    <button className='post__btn share'><Share />Compartir</button>
                    <button className='post__btn comment'><CommentBubble />Comentar</button>
                    <button className='post__btn like'><Experience />Me Gusta</button>
                </footer>
            </div>
        </StyledPost>
    )
}