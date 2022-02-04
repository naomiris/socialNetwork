import {ListItem, ListItemText, ListItemAvatar, Divider, Avatar} from '@mui/material/';
import axios from 'axios';
import { read_cookie } from 'sfcookies';


const FriendItem = ({ name, profile, state, id }) => {


  const handleClick = async () => {
    await axios.post(`${process.env.REACT_APP_PUERTO}conversation/`, { receiverId: id }, { headers: { token: read_cookie('userToken') } })
  }

  return (
  <>
    <ListItem alignItems="flex-start" onClick={handleClick}>
    <ListItemAvatar>
      <Avatar alt={name} src={profile.includes('upluads')? `${process.env.REACT_APP_PUERTO}`+profile : profile} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={
        <>
          {state}<br/>
        </>
      }
    />
  </ListItem>
          <Divider variant="inset" component="li"/>
  </>
  )
};

export default FriendItem;
