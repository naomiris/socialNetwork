import { useDispatch, useSelector } from "react-redux";
import { Div } from './StyledMyProfile';
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import { getMyProfileData } from "../../actions";


const MyProfile = () => {
    const myProfile = useSelector((state) => state.myProfileData)
    const dispatch = useDispatch()
    
    useEffect(()=>{
    dispatch(getMyProfileData())
    },[dispatch])
  
    return (
        <>
       <NavBar/>
        <Div>   
        <div>
            <img src={myProfile[0].profile}></img>
        <h1>{myProfile[0].fullname}</h1>
        </div>
        </Div>
        </>
    )
}

export default MyProfile;



//Agust asi llega la data,para que pongas los campos necesarios
// [
//     {
//         "follow": {
//             "followers": [],
//             "follows": [
//                 "WlpqFTklN1TALxHpVEa6H75U5VF2"
//             ]
//         },
//         "_id": "61f07800b9adea9e37b48f0c",
//         "id": "ESiDsykaitaH1weBOslWLJs0TLJ2",
//         "fullname": "Edwin Leon",
//         "nacionalidad": [],
//         "cohorte": [],
//         "rol": [],
//         "description": [],
//         "background_picture": [],
//         "post": [],
//         "email": "edwinm.leonb@gmail.com",
//         "profile": "https://avatars.githubusercontent.com/u/86617629?v=4",
//         "state": true,
//         "social_networks": [],
//         "__v": 1
//     }
// ]