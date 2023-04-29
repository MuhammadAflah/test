import React from 'react';

const ChildComponent = ({ products }) => {
  return (
    <div>
      <h3>Child Component</h3>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ChildComponent;
