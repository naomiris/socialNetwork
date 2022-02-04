import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPost, getCleanHome, getMyId} from "../../actions";
import CrearPost from "../CrearPost/CrearPost";
import Layout from '../Layout/Layout'
import PostContainer from "../PostContainer/PostContainer";


export default function Home() {

  
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllPost());
        dispatch(getMyId())
       
        return () => {
            dispatch(getCleanHome())
          }

    }, [dispatch]);

    const posts = useSelector((state => state.allPost))

    useEffect(()=>{
        io(`${process.env.REACT_APP_PUERTO}`)
      },[])

    return (
        <Layout>
            <CrearPost />
            <PostContainer posts={posts} />
        </Layout>
    )
}