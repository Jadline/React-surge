import './product-card.css'
import StarRating from '../StarRating/StarRating'
import ColorButton from '../../Reusable/Colorbutton'
import ProductModal from '../Product-Modal/productmodal'
function ProductCard({openmodal,setOpenModal}){
    return (
        <>
          <div className='product-container'>
                <div className='image'>
                    <img src="/pexels-myfoodie-2611817.jpg" alt=""  className='product-image'/>
                
                    <div className='image-btns'>
                        <button className='heart-icon'><span><img src="/heart.png" alt="" /></span></button>
                        <button className='watch-icon' onClick={() => setOpenModal(!openmodal)}><span><img src="/watch.png" alt="" /></span></button>
                        <button className='compare-icon'><span><img src="/right-and-left.png" alt="" /></span></button>
                        <button className='add-to-cart'>Add to Cart</button>
                    </div>
            
                <div className='product-info'>
                    <p>Mapezio</p>
                    <p>Ceramic Bowl</p>
                    <StarRating/>
                    <p className='price'>$1500.00</p>
                    <ColorButton/>
                </div>
               
            </div>
            
        </div> 
        {openmodal && <ProductModal/>}
       
        </>
    )
         
}
export default ProductCard