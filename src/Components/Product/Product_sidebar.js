import React from 'react'
import AllProducts from './AllProducts'
import CategorySidebar from './CategorySidebar'
import './Product_sidebar.css'



const Product_sidebar = () => {
  return (
    <div className='product-sidebar'>
        <CategorySidebar />
      <AllProducts />
    
    </div>
  )
}

export default Product_sidebar