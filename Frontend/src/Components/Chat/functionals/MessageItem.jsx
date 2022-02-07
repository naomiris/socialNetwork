import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { get_CHAT } from '../../../actions';
import { useDispatch } from 'react-redux';

const MessageItem = ({ name, message, profile, date, id, friend}) => {

  // const [time, settime] = useState(format(date, 'en_US'));
  const dispatch = useDispatch()
  console.log(friend, 'parametros')
  console.log(id, 'id conversation')
  const handleChat = (id)=>{
    dispatch(get_CHAT(id, friend))
  }

  return (
    <>
      <ListItem alignItems="flex-start" onClick={()=>handleChat(id)} >
        <ListItemAvatar>
          <Avatar alt={name} src={profile?.includes('uploads')?`${process.env.REACT_APP_PUERTO}` + profile : profile} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              {message}<br />
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                {/* {time} */}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

    </>
  )
};

export default MessageItem;
