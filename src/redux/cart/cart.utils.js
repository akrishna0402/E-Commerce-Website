export const addItemTocart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {
                ...cartItem , quantity : cartItem.quantity + 1
            }
            : cartItem 
        )
    }

    return [...cartItems , {...cartItemToAdd , quantity : 1}]
}

export const clearItemfromCart = (cartItems , cartItemToClear) => {
    return cartItems.filter(cartItem => 
        cartItem.id !== cartItemToClear.id 
    )
}

export const removeItem = (cartItems , cartItemToRemove) => {
    const ItemToBeDecreased = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(ItemToBeDecreased.quantity === 1 ){
        return clearItemfromCart(cartItems , cartItemToRemove)
    }
    
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {
        ...cartItem ,
        quantity : cartItem.quantity - 1
    }
    :
    cartItem
    )
}