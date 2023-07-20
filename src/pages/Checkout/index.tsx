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

import expresso from '../../assets/images/expresso.png'
import americano from '../../assets/images/americano.png'

export function Checkout() {
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
            <Input type="text" placeholder="CEP" />
            <InputFill type="text" placeholder="Rua" />
            <div className="alignRowInputs">
              <Input type="text" placeholder="Número" />
              <div className="inputWrapper">
                <InputFill type="text" placeholder="Complemento" />
              </div>
            </div>
            <div className="alignRowInputs">
              <Input type="text" placeholder="Bairro" />
              <InputFill type="text" placeholder="Cidade" />
              <InputUF type="text" placeholder="UF" />
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
            <div>
              <CreditCard size={20} />
              <p>Cartão de Crédito</p>
            </div>
            <div>
              <Bank size={20} />
              <p>Cartão de Débito</p>
            </div>
            <div>
              <Money size={20} />
              <p>Dinheiro</p>
            </div>
          </PaymentsMethods>
        </CheckoutContent>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <CheckoutSummary>
          <CardItem>
            <img
              src={expresso}
              alt="Imagem demonstrativa de umas xícara de café"
            />
            <div className="alignElementsColumn">
              <p>Expresso Tradicional</p>
              <ItemContent>
                <div className="quantity">
                  <button>
                    <Minus weight="bold" size={14} />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" size={14} />
                  </button>
                </div>
                <button className="buttonRemove">
                  <Trash size={16} /> Remover
                </button>
              </ItemContent>
            </div>
            <span>R$ 9,90</span>
          </CardItem>
          <CardItem>
            <img
              src={americano}
              alt="Imagem demonstrativa de umas xícara de café"
            />
            <div className="alignElementsColumn">
              <p>Expresso Americano</p>
              <ItemContent>
                <div className="quantity">
                  <button>
                    <Minus weight="bold" size={14} />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" size={14} />
                  </button>
                </div>
                <button className="buttonRemove">
                  <Trash size={16} /> Remover
                </button>
              </ItemContent>
            </div>
            <span>R$ 19,80</span>
          </CardItem>

          <PaymentSumary>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="paymentTotal">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </PaymentSumary>

          <ButtonConfirmOrder>Confirmar pedido</ButtonConfirmOrder>
        </CheckoutSummary>
      </div>
    </CheckoutContainer>
  )
}
