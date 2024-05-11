import React, { useState } from 'react'

interface Product {
  name: string
}

function AddProduct() {
  const [product, setProduct] = useState<Product>({
    name: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name
    setProduct({ ...product, [inputName]: e.target.value })
  }

  return (
    <>
      <h2>Add Product</h2>
      <form>
        <label htmlFor="name">What do you want?</label>
        <input
          value={product.name}
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default AddProduct
