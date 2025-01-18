import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef,useEffect,useState } from 'react'



function TitleCards({title,category}){
    const[apiData,setApiData] = useState([])
    // console.log(apiData)
    const cardsRef = useRef(null);

  
    function handleWheel (event){
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {
        async function fetchMovies(){
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGMwY2I0NzA3ZGIzMjZmZjcxM2I3N2Y4NjdjYWVmMiIsIm5iZiI6MTczNzIwMzM0Ny45Miwic3ViIjoiNjc4YjllOTM2OGUwZDg3MzYzNmRkMmJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nI80sqSk1xdZFAQ_UXOpoY7hpCvmNUzO2HbsTHfL0-s'
                }
              };
            const res =  await fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
            if(!res.ok) throw new Error ('There was an error fetching the data')
            const data = await res.json()
            console.log(data)
            setApiData(data.results)
        }
        fetchMovies()
    },[])
    useEffect(()=> {
            const currentRef = cardsRef.current;
            currentRef.addEventListener('wheel', handleWheel);
            return () => {
                currentRef.removeEventListener('wheel', handleWheel);
            };
        }
    ,[])
    return(
        <div className='titlecards'>
            <h2>{title? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card,index) => {
                    return <div className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </div>

                })}
            </div>
        </div>
    )
}
export default TitleCards