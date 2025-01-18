import './Player.css'
import back_arrow_icon  from '../../assets/back_arrow_icon.png'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
function Player(){
    const {id} = useParams()
    const[movieData,setMovieData] = useState({
        name : "",
        type : " ",
        published_at : "",
        key : " "
    })
    
    useEffect(() => {
        
        async function FetchMovieVideo(){
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGMwY2I0NzA3ZGIzMjZmZjcxM2I3N2Y4NjdjYWVmMiIsIm5iZiI6MTczNzIwMzM0Ny45Miwic3ViIjoiNjc4YjllOTM2OGUwZDg3MzYzNmRkMmJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nI80sqSk1xdZFAQ_UXOpoY7hpCvmNUzO2HbsTHfL0-s'
                }
                };
            const res = await  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
            if(!res.ok) throw new Error('There was an error fetching the data');
            const data = await res.json()
            setMovieData(data.results[0])
        }
        FetchMovieVideo()

    }
    ,[id])

    const{name,key,published_at,type} = movieData
    return(
        <div className='player'>
            <img src={back_arrow_icon} alt=''/>
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${key}`} title='trailer'
            frameBorder= '0' allowFullScreen
            ></iframe>
            <div className="player-info">
                <p>{published_at.slice(0,10)}</p>
                <p>{name}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}
export default Player