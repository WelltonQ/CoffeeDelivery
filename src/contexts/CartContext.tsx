import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ChangeEvent,
} from 'react'

import expresso from '../assets/images/expresso.png'
import americano from '../assets/images/americano.png'
import cremoso from '../assets/images/expresso-cremoso.png'
import gelado from '../assets/images/cafe-gelado.png'
import leite from '../assets/images/cafe-com-leite.png'
import latte from '../assets/images/latte.png'
import capuccino from '../assets/images/capuccino.png'
import macchiato from '../assets/images/macchiato.png'
import mochaccino from '../assets/images/mochaccino.png'
import chocolateQuente from '../assets/images/chocolate-quente.png'
import cubano from '../assets/images/cubano.png'
import havaiano from '../assets/images/havaiano.png'
import arabe from '../assets/images/arabe.png'
import irlandes from '../assets/images/irlandes.png'

interface ItemsCartType {
  count: number
  description: string
  id: string
  image: string
  price: number
  taste: string[]
  title: string
}

interface ValuesAddressProps {
  cep: string
  city: string
  complement: string
  district: string
  number: string
  street: string
  uf: string
}

interface CartContextType {
  itemsCart: ItemsCartType[]
  setItemsCart: any
  coffees: ItemsCartType[]
  isSelectedPayment: string
  valuesAddress: ValuesAddressProps
  handleItemsCart: (items: ItemsCartType[]) => void
  handleDecrement: (id: string) => void
  handleIncrement: (id: string) => void
  handleRemoveItem: (id: string) => void
  handleSelectPaymentType: (payment: string) => void
  handleChange: (
    value: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartStateContext = createContext({} as CartContextType)

const MockCoffees = [
  {
    id: '1',
    taste: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    count: 0,
    image: expresso,
  },
  {
    id: '2',
    taste: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 5.3,
    count: 0,
    image: americano,
  },
  {
    id: '3',
    taste: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10.9,
    count: 0,
    image: cremoso,
  },
  {
    id: '4',
    taste: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    count: 0,
    image: gelado,
  },
  {
    id: '5',
    taste: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 1.9,
    count: 0,
    image: leite,
  },
  {
    id: '6',
    taste: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 2.5,
    count: 0,
    image: latte,
  },
  {
    id: '7',
    taste: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    count: 0,
    image: capuccino,
  },
  {
    id: '8',
    taste: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    count: 0,
    image: macchiato,
  },
  {
    id: '9',
    taste: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    count: 0,
    image: mochaccino,
  },
  {
    id: '10',
    taste: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    count: 0,
    image: chocolateQuente,
  },
  {
    id: '11',
    taste: ['Especial', 'Alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    count: 0,
    image: cubano,
  },
  {
    id: '12',
    taste: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    count: 0,
    image: havaiano,
  },
  {
    id: '13',
    taste: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    count: 0,
    image: arabe,
  },
  {
    id: '14',
    taste: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    count: 0,
    image: irlandes,
  },
]

function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemsCartType[]>([])
  const [coffees, setCoffees] = useState(MockCoffees)
  const [isSelectedPayment, setIsSelectedPayment] = useState('')
  const [valuesAddress, setValuesAddress] = useState<ValuesAddressProps>({
    cep: '',
    city: '',
    complement: '',
    district: '',
    number: '',
    street: '',
    uf: '',
  })

  function handleItemsCart(items: ItemsCartType[]) {
    setItemsCart(items)
  }

  function handleSelectPaymentType(payment: string) {
    setIsSelectedPayment(payment)
  }

  function handleDecrement(id: string) {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id
          ? { ...coffee, count: coffee.count <= 0 ? 0 : coffee.count - 1 }
          : coffee,
      ),
    )
    setItemsCart((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id
          ? { ...coffee, count: coffee.count <= 1 ? 1 : coffee.count - 1 }
          : coffee,
      ),
    )
  }

  function handleIncrement(id: string) {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id ? { ...coffee, count: coffee.count + 1 } : coffee,
      ),
    )
    setItemsCart((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id ? { ...coffee, count: coffee.count + 1 } : coffee,
      ),
    )
  }

  const handleRemoveItem = (id: string) => {
    const updatedCoffeesCheckout = itemsCart.filter(
      (coffee) => coffee.id !== id,
    )
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id ? { ...coffee, count: 0 } : coffee,
      ),
    )
    setItemsCart(updatedCoffeesCheckout)
  }

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    const { name, value } = event.target
    setValuesAddress((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <CartStateContext.Provider
      value={{
        itemsCart,
        coffees,
        isSelectedPayment,
        valuesAddress,
        handleItemsCart,
        setItemsCart,
        handleDecrement,
        handleIncrement,
        handleRemoveItem,
        handleSelectPaymentType,
        handleChange,
      }}
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
