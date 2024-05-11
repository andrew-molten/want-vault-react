import React, { useState } from 'react'

interface Product {
  name: string
  brand: string
  price: number | undefined
  willingTopay: number | undefined
  productLink: string
  pros: string
  cons: string
}

function AddProduct() {
  const [product, setProduct] = useState<Product>({
    name: '',
    brand: '',
    price: undefined,
    willingTopay: undefined,
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
        <input type="text" id="brand" name="brand" />
        <br />
        <label htmlFor="price">Current price: $</label>
        <input type="text" id="price" name="price" /> <br />
        <label htmlFor="willing-to-pay">
          How much are you willing to pay?{' $'}
        </label>
        <input type="text" id="willing-to-pay" name="willingTopay" /> <br />
        <label htmlFor="product-link">Link: </label>
        <input type="text" id="product-link" name="productLink" /> <br />
        <label htmlFor="pros">Pros: </label>
        <input type="text" id="pros" name="pros" /> <br />
        <label htmlFor="cons">Cons: </label>
        <input type="text" id="cons" name="cons" /> <br />
      </form>
    </>
  )
}

export default AddProduct
