import React, { useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';
import { setUser } from '../state';
import { useDispatch, useSelector } from 'react-redux';

const ParentComponent = () => {
  const [products, setProducts] = useState([]);
  const product = useSelector((state) => state.user && state.user.product);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
      dispatch(setUser(data));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>Parent Component</h2>
      {product ? <p>Product data is available in Redux store!</p> : null}
      <ChildComponent products={products} />
    </div>
  );
};

export default ParentComponent;
