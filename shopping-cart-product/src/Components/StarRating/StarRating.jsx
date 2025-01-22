import starImage from '/icons8-hand-drawn-star-32.png'
import './StarRating.css'
function StarRating(){
    return(
        <div className='product-rating'>
            {Array.from({length : 5},(_,i) => i + 1).map((star,index) => 
            <img src = {starImage} alt='starrating' key={index}/>
            )}
        </div>
    )
}
export default StarRating