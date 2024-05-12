import React, { useState } from 'react'

interface Product {
  name: string
  brand: string
  price: number
  willingTopay: number
  productLink: string
  pros: string
  cons: string
}

function AddProduct() {
  const [product, setProduct] = useState<Product>({
    name: '',
    brand: '',
    price: 0,
    willingTopay: 0,
    productLink: '',
    pros: '',
    cons: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name
    setProduct({ ...product, [inputName]: e.target.value })
  }

  return (
    <>
      <h2>Add Product</h2>
      <form>
        <label htmlFor="name">What do you want? </label>
        <input
          value={product.name}
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="brand">Preferred brand: </label>
        <input
          value={product.brand}
          type="text"
          id="brand"
          name="brand"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Current price: $</label>
        <input
          value={product.price}
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
        />{' '}
        <br />
        <label htmlFor="willing-to-pay">
          How much are you willing to pay?{' $'}
        </label>
        <input
          value={product.willingTopay}
          type="number"
          id="willing-to-pay"
          name="willingTopay"
          onChange={handleChange}
        />{' '}
        <br />
        <label htmlFor="product-link">Link: </label>
        <input
          value={product.productLink}
          type="text"
          id="product-link"
          name="productLink"
          onChange={handleChange}
        />{' '}
        <br />
        <label htmlFor="pros">Pros: </label>
        <input
          value={product.pros}
          type="text"
          id="pros"
          name="pros"
          onChange={handleChange}
        />{' '}
        <br />
        <label htmlFor="cons">Cons: </label>
        <input
          value={product.cons}
          type="text"
          id="cons"
          name="cons"
          onChange={handleChange}
        />{' '}
        <br />
      </form>
    </>
  )
}

export default AddProduct
