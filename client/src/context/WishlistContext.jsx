import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):[])
    useEffect(() => {
      localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }, [wishlist])
    
    const addToWishlist = (service)=>{
        const isServiceExist = wishlist.findIndex(item=>item._id === service._id)
        if (isServiceExist === -1) {
            setWishlist([...wishlist,service])
        }
        else{
            setWishlist(wishlist.filter(item=> item._id !== service._id))
        }
        
    }
    const data = {
        wishlist,
        addToWishlist
    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider