import React from 'react'
import ProductCard from './ProductCard'
import './AllProducts.css'
import img1 from '../../images/All Products/jam.png'
import img2 from '../../images/All Products/banana.png'
import img3 from '../../images/All Products/butter.png'
import img4 from '../../images/All Products/cadbury.png'
import img5 from '../../images/All Products/Hide.png'
import img6 from '../../images/All Products/honey.png'
import img7 from '../../images/All Products/jam.png'
import img8 from '../../images/All Products/mango.png'
import img9 from '../../images/All Products/museli.png'
import img10 from '../../images/All Products/oats.png'
import img11 from '../../images/All Products/oreo.png'
import img12 from '../../images/All Products/soap.png'


const AllProducts = () => {

  const products = [
    {
      id:1,
      productimage:img1,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:2,
      productimage:img2,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:3,
      productimage:img3,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:4,
      productimage:img4,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:5,
      productimage:img5,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:6,
      productimage:img6,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:7,
      productimage:img7,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:8,
      productimage:img8,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:9,
      productimage:img9,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    },
    {
      id:10,
      productimage:img10,
      productprice:100,
      counttype:1 ,
      discoutpercent:12


    }
  ]
  
   
      
  
  return (

   
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
      {
                    products.map((item,index) => {
                        return (
                            <ProductCard data={item} />
                        )
                    })
                }

      </div>
    </div>
    

  )
}

export default AllProducts