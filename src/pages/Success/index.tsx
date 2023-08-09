import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconContainer } from '../../components/Banner/styles'
import { ContainerSuccess, ContentSuccess } from './styles'
import Illustration from '../../assets/images/Illustration.png'
import { useCartContext } from '../../contexts/CartContext'

export function Success() {
  const { valuesAddress, isSelectedPayment } = useCartContext()

  return (
    <ContainerSuccess>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <ContentSuccess>
          <div className="summary">
            <IconContainer variant="base-purple">
              <div className="backgroundIcons">
                <MapPin weight="fill" size={16} color="white" />
              </div>
              <p>
                Entrega em{' '}
                <b>
                  {valuesAddress.street}, {valuesAddress.number}
                </b>{' '}
                <br />
                {valuesAddress.district} - {valuesAddress.city},{' '}
                {valuesAddress.uf}
              </p>
            </IconContainer>
            <IconContainer variant="base-yellow">
              <div className="backgroundIcons">
                <Timer weight="fill" size={16} color="white" />
              </div>
              <p>
                Previsão de entrega <br />
                <b>20 min - 30 min</b>
              </p>
            </IconContainer>
            <IconContainer variant="base-yellow-dark">
              <div className="backgroundIcons">
                <CurrencyDollar weight="fill" size={16} color="white" />
              </div>
              <p>
                Pagamento na entrega <br />
                <b>{isSelectedPayment === 'credit' && 'Cartão de Crédito'}</b>
                <b>{isSelectedPayment === 'debit' && 'Cartão de Débito'}</b>
                <b>{isSelectedPayment === 'money' && 'Dinheiro'}</b>
              </p>
            </IconContainer>
          </div>
          <img src={Illustration} alt="Imagem de um motoboy delivery" />
        </ContentSuccess>
      </div>
    </ContainerSuccess>
  )
}
