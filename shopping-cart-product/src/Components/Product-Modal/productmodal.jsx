import ColorButton from "../../Reusable/Colorbutton"
import './productmodal.css'
function ProductModal ({openmodal,setOpenModal}) {
    return(
        

       <div className='product-modal'>
        <div className='product-data-image'>
        <img src="/pexels-myfoodie-2611817.jpg" alt=""  className='product-image'/>
        </div>       
            <div className='more-info'>
                <h1 className='product-name'>Ceramic Bowl</h1>
                <p className='product-price'>$1,500.00</p>
                <p className='comp-info'>All materials in our products are recycled or renewable.</p>
                <p>Size : 30</p>
                <div className='product-size'>
                    <span>30</span>
                    <span>40</span>
                </div>
                <p>Color : red</p>
                <ColorButton/>
                <p>Material : wood</p>
                    <div className='product-material'>
                        <span>Stone</span>
                        <span>Wood</span>
                    </div>
                <div className='product-check'>
                    <p className='counter'>
                        <button>-</button>
                        <span>7</span>
                        <button>+</button>           
                    </p>
                <button className='availability'>Unavailable</button>
                </div>
                <p className='check-delivery'><img src="/box_4396546.png" alt="" /><span>Your order is free delivery !</span></p>
                {/* <p className='vendor'>Vendor : MAPEZIO</p>
                <p className='details'>View details</p> */}
            </div>
        </div>
        
    )

}
    

export default ProductModal