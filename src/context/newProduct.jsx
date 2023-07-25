"use client"
import React, { createContext, useState } from 'react'
const NewProductProviderContext = createContext();

export const newProductProvider = ({children}) => {
    const [newProduct, setNewProduct] = useState([]);
  return (
    <NewProductProviderContext.Provider value={{newProduct ,setNewProduct}}>
        {children}
    </NewProductProviderContext.Provider>
  )
}

export default NewProductProviderContext;