import { useEffect } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import { CardMenu } from './styles'

import { useCartContext } from '../../contexts/CartContext'
import { valueFormatedCurrency } from '../../utils/valuesFormated'
import { useNavigate } from 'react-router-dom'

export function Cards() {
  const { handleItemsCart, handleDecrement, handleIncrement, coffees } =
    useCartContext()
  const navigate = useNavigate()

  const updateItemsCart = () => {
    const itemsWithCount = coffees.filter((coffee) => coffee.count > 0)
    handleItemsCart(itemsWithCount)
  }

  useEffect(() => {
    updateItemsCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffees])

  function handleOnSubmit() {
    navigate('/checkout')
  }

  return (
    <>
      {coffees.map(({ id, taste, title, description, image, price, count }) => (
        <CardMenu key={id}>
          <img src={image} alt="Imagem demonstrativa do café" />
          <div className="taste">
            {taste.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <div className="action">
            <span className="coin">R$</span>
            <span className="price">
              {valueFormatedCurrency(price).replace('R$', '')}
            </span>
            <div className="quantity">
              <button onClick={() => handleDecrement(id)}>
                <Minus weight="bold" size={14} />
              </button>
              <p>{count}</p>
              <button onClick={() => handleIncrement(id)}>
                <Plus weight="bold" size={14} />
              </button>
            </div>
            <button
              onClick={() => handleOnSubmit()}
              className={`cart ${count > 0 ? 'active' : ''}`}
            >
              <ShoppingCart weight="fill" color="white" size={22} />
            </button>
          </div>
        </CardMenu>
      ))}
    </>
  )
}
