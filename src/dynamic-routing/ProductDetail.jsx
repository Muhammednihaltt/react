import React from 'react'
import { useParams } from 'react-router-dom'
import { SiRiotgames } from "react-icons/si";

const ProductDetail = () => {
    const {id} = useParams() ;
  return (
    <div>
      <h2 ><SiRiotgames />product id : {id}</h2>
    </div>
  )
}

export default ProductDetail
