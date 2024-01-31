import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts]=useState([])



    useEffect(()=>{
        console.log("실행")
       fetch(`data/products.json`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            // console.log(products)//왜 콘솔에 안나오는지 설명
        })
    },[])
    //useEffect의 실행이 종료되고 데이터가 변경된다.
    console.log(products)

  return (
    <div>
        products
        {products.map((product)=>{
            return(
                <li>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </li>
            )
        })}
    </div>
  )
}

export default Products