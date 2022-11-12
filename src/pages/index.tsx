import axios from 'axios';
import { Video } from '../../types'
import NoResults from '../components/MainView/NoResults';
import VideoCard from '../components/MainView/VideoCard';

interface IProps { 
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos)
  return (
  <h1 className="flex flex-col gap-10 videos h-full">
    { videos.length ? (
      videos.map((video: Video) => (
        <VideoCard post={video} key={video._id}/>
      ) : ( 
      <NoResults text={'No Videos Found'}/>
    )}
  </h1>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  
  return{ 
    props: {
      videos: data
    }
  }

}

export default Home
