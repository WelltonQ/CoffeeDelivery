import { createContext, useContext, useState, ReactNode } from 'react'

interface ItemsCartType {
  count: number
  description: string
  id: string
  image: string
  price: string
  taste: string[]
  title: string
}

interface CartContextType {
  itemsCart: ItemsCartType[]
  handleItemsCart: (items: ItemsCartType[]) => void
  setItemsCart: any
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartStateContext = createContext({} as CartContextType)

function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemsCartType[]>([])

  function handleItemsCart(items: ItemsCartType[]) {
    setItemsCart(items)
  }

  return (
    <CartStateContext.Provider
      value={{ itemsCart, handleItemsCart, setItemsCart }}
    >
      {children}
    </CartStateContext.Provider>
  )
}

function useCartContext() {
  const context = useContext(CartStateContext)
  return context
}

export { CartContextProvider, useCartContext }
