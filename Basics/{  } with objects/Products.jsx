

const Products = () => {

    const products={
        name:"Laptop",
        price:2000,
        availability:"In Stock"
    }
  return (
    <div>
        <h1>Product: {products.name}</h1>
        <h2>Price: {products.price}</h2>
        <p>Availability: {products.availability}</p>
    </div>
  )
}

export default Products
