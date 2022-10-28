import React from "react";
import {useParams,Link} from 'react-router-dom';
import products from "../data";

const SingleProduct = () => {
  const {productid} = useParams();
  const product = products.find((product)=>product.id === productid)
  return (
    <section className='section product'>
      <img alt='' src={product.image} />
      <h2>{product.name}</h2>
      <Link to='/products' className='btn'>back to Products</Link>
    </section>
  );
};

export default SingleProduct;
