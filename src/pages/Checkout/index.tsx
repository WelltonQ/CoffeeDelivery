import {
  MapPinLine,
  Minus,
  Plus,
  Trash,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import {
  ButtonConfirmOrder,
  CardItem,
  CheckoutContainer,
  CheckoutContent,
  CheckoutSummary,
  Input,
  InputFill,
  InputUF,
  ItemContent,
  PaymentSumary,
  PaymentsMethods,
} from './styles'

import { useCartContext } from '../../contexts/CartContext'
import { valueFormatedCurrency } from '../../utils/valuesFormated'
import { Link, useNavigate } from 'react-router-dom'

export function Checkout() {
  const navigate = useNavigate()
  const {
    itemsCart,
    valuesAddress,
    isSelectedPayment,
    handleDecrement,
    handleIncrement,
    handleRemoveItem,
    handleSelectPaymentType,
    handleChange,
  } = useCartContext()

  const pricesItems = itemsCart.map((item) => item.price * item.count)
  const valueTotalItems = pricesItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  )
  const delivery = 3.5
  const valueTotal = valueTotalItems + delivery

  function handleOnSubmit() {
    if (isSelectedPayment === '') {
      return alert('Selecione a forma de pagamento')
    }
    for (const key in valuesAddress) {
      console.log(
        '🚀 ~ file: index.tsx:55 ~ handleOnSubmit ~ valuesAddress:',
        valuesAddress[key],
      )
      if (valuesAddress[key].trim() === '') {
        return alert('Preencha todos os campos no endereço')
      }
    }
    localStorage.setItem('address', JSON.stringify(valuesAddress))
    localStorage.setItem('methodPayment', JSON.stringify(isSelectedPayment))

    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <div className="completedOrder">
        <h3>Complete seu pedido</h3>
        <CheckoutContent>
          <div>
            <MapPinLine size={32} className="iconYellowDark" />
            <div className="alignTexts">
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <form>
            <Input
              type="text"
              placeholder="CEP"
              name="cep"
              onChange={handleChange}
            />
            <InputFill
              type="text"
              placeholder="Rua"
              name="street"
              onChange={handleChange}
            />
            <div className="alignRowInputs">
              <Input
                type="text"
                placeholder="Número"
                name="number"
                onChange={handleChange}
              />
              <div className="inputWrapper">
                <InputFill
                  type="text"
                  placeholder="Complemento"
                  name="complement"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="alignRowInputs">
              <Input
                type="text"
                placeholder="Bairro"
                name="district"
                onChange={handleChange}
              />
              <InputFill
                type="text"
                placeholder="Cidade"
                name="city"
                onChange={handleChange}
              />
              <InputUF
                type="text"
                placeholder="UF"
                name="uf"
                onChange={handleChange}
              />
            </div>
          </form>
        </CheckoutContent>
        <CheckoutContent>
          <div>
            <CurrencyDollar size={32} className="iconPurple" />
            <div className="alignTexts">
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <PaymentsMethods>
            <button
              className={isSelectedPayment === 'credit' ? 'selected' : ''}
              onClick={() => handleSelectPaymentType('credit')}
            >
              <CreditCard size={20} />
              Cartão de Crédito
            </button>
            <button
              className={isSelectedPayment === 'debit' ? 'selected' : ''}
              onClick={() => handleSelectPaymentType('debit')}
            >
              <Bank size={20} />
              Cartão de Débito
            </button>
            <button
              className={isSelectedPayment === 'money' ? 'selected' : ''}
              onClick={() => handleSelectPaymentType('money')}
            >
              <Money size={20} />
              Dinheiro
            </button>
          </PaymentsMethods>
        </CheckoutContent>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <CheckoutSummary>
          {itemsCart.length > 0 ? (
            <>
              {itemsCart.map(({ id, title, price, count, image }) => (
                <CardItem key={id}>
                  <img
                    src={image}
                    alt="Imagem demonstrativa de umas xícara de café"
                  />
                  <div className="alignElementsColumn">
                    <p>{title}</p>
                    <ItemContent>
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
                        className="buttonRemove"
                        onClick={() => handleRemoveItem(id)}
                      >
                        <Trash size={16} /> Remover
                      </button>
                    </ItemContent>
                  </div>
                  <span>{valueFormatedCurrency(price * count)}</span>
                </CardItem>
              ))}

              <PaymentSumary>
                <div>
                  <p>Total de itens</p>
                  <p>{valueFormatedCurrency(valueTotalItems)}</p>
                </div>
                <div>
                  <p>Entrega</p>
                  <p>{valueFormatedCurrency(delivery)}</p>
                </div>
                <div className="paymentTotal">
                  <p>Total</p>
                  <p>{valueFormatedCurrency(valueTotal)}</p>
                </div>
              </PaymentSumary>

              <ButtonConfirmOrder onClick={() => handleOnSubmit()}>
                Confirmar pedido
              </ButtonConfirmOrder>
            </>
          ) : (
            <>
              <h3>Não há cafés selecionados</h3>
              <Link to="/">Volte para selecionar o café que deseja</Link>
            </>
          )}
        </CheckoutSummary>
      </div>
    </CheckoutContainer>
  )
}
