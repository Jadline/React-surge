
import { useState } from "react"
import ProductCard from "./Components/Product-card/product-card"
function App() {
  const [openmodal,setOpenModal] = useState(false)
  return(
    <div className='main-container'>
      <ProductCard setOpenModal = {setOpenModal} openmodal ={openmodal}/>
    </div>
  )
}

export default App
