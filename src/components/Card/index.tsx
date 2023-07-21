import { useState } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import { CardMenu } from './styles'

import expresso from '../../assets/images/expresso.png'
import americano from '../../assets/images/americano.png'
import cremoso from '../../assets/images/expresso-cremoso.png'
import gelado from '../../assets/images/cafe-gelado.png'
import leite from '../../assets/images/cafe-com-leite.png'
import latte from '../../assets/images/latte.png'
import capuccino from '../../assets/images/capuccino.png'
import macchiato from '../../assets/images/macchiato.png'
import mochaccino from '../../assets/images/mochaccino.png'
import chocolateQuente from '../../assets/images/chocolate-quente.png'
import cubano from '../../assets/images/cubano.png'
import havaiano from '../../assets/images/havaiano.png'
import arabe from '../../assets/images/arabe.png'
import irlandes from '../../assets/images/irlandes.png'

const MockCoffees = [
  {
    id: '1',
    taste: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    count: 0,
    image: expresso,
  },
  {
    id: '2',
    taste: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    count: 0,
    image: americano,
  },
  {
    id: '3',
    taste: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    count: 0,
    image: cremoso,
  },
  {
    id: '4',
    taste: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    count: 0,
    image: gelado,
  },
  {
    id: '5',
    taste: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    count: 0,
    image: leite,
  },
  {
    id: '6',
    taste: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    count: 0,
    image: latte,
  },
  {
    id: '7',
    taste: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    count: 0,
    image: capuccino,
  },
  {
    id: '8',
    taste: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    count: 0,
    image: macchiato,
  },
  {
    id: '9',
    taste: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    count: 0,
    image: mochaccino,
  },
  {
    id: '10',
    taste: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    count: 0,
    image: chocolateQuente,
  },
  {
    id: '11',
    taste: ['Especial', 'Alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    count: 0,
    image: cubano,
  },
  {
    id: '12',
    taste: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    count: 0,
    image: havaiano,
  },
  {
    id: '13',
    taste: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    count: 0,
    image: arabe,
  },
  {
    id: '14',
    taste: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    count: 0,
    image: irlandes,
  },
]

export function Cards() {
  const [coffees, setCoffees] = useState(MockCoffees)

  function handleDecrement(id: string) {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id
          ? { ...coffee, count: coffee.count <= 0 ? 0 : coffee.count - 1 }
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
            <span className="price">{price}</span>
            <div className="quantity">
              <button onClick={() => handleDecrement(id)}>
                <Minus weight="bold" size={14} />
              </button>
              <p>{count}</p>
              <button onClick={() => handleIncrement(id)}>
                <Plus weight="bold" size={14} />
              </button>
            </div>
            <button className="cart">
              <ShoppingCart weight="fill" color="white" size={22} />
            </button>
          </div>
        </CardMenu>
      ))}
    </>
  )
}
