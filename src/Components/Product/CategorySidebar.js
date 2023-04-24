import React from 'react'
import img1 from'../../images/vegetable.png'
import img2 from'../../images/fruits.png'
import img3 from'../../images/meat.png'
import img4 from'../../images/seafood.png'
import img5 from'../../images/drink.png'
import img6 from'../../images/rice.png'
import img7 from'../../images/snack.png'
import img8 from'../../images/dried-fruits.png'

import './CategorySidebar.css'



const CategorySidebar = () => {
  const data = [
    {
        id: 1,
        categoryimage: img1,
        categoryname: 'Vegetables'
    },
    {
        id: 2,
        categoryimage: img2,
        categoryname: 'Fruits'
    },
    {
        id: 3,
        categoryimage: img3,
        categoryname: 'Meat'
    },
    {
        id: 4,
        categoryimage: img4,
        categoryname: 'SeaFood'
    },
    {
        id: 5,
        categoryimage: img5,
        categoryname: 'Beverage'
    },
    {
        id: 6,
        categoryimage: img6,
        categoryname: 'Groceries'
    },
    {
        id: 7,
        categoryimage: img7,
        categoryname: 'Snacks'
    },
    {
        id: 8,
        categoryimage: img8,
        categoryname: 'Dry-fruits'
    }
]
  return (
    <div className='categorysidebar'>
    {
        data.map((item) => {
            return (
                <div className='category'>
                    <img src={item.categoryimage} alt='categoryimage' />
                    <h3>{item.categoryname}</h3>
                </div>
            )
        })
    }
</div>
  )
}

export default CategorySidebar