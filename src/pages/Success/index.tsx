import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconContainer } from '../../components/Banner/styles'
import { ContainerSuccess } from './styles'

export function Success() {
  return (
    <ContainerSuccess>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className="summary">
          <IconContainer variant="base-purple">
            <div className="backgroundIcons">
              <MapPin weight="fill" size={16} color="white" />
            </div>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br />
              Farrapos - Porto Alegre, RS
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
              <b>Cartão de Crédito</b>
            </p>
          </IconContainer>
        </div>
      </div>
    </ContainerSuccess>
  )
}
