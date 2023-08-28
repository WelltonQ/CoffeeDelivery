import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconContainer } from '../../components/Banner/styles'
import { ContainerSuccess, ContentSuccess } from './styles'
import Illustration from '../../assets/images/Illustration.png'
import { useEffect, useState } from 'react'

interface AddressType {
  cep: string
  city: string
  complement: string
  district: string
  number: string
  street: string
  uf: string
}

export function Success() {
  const [address, setAddress] = useState({} as AddressType)
  const [methodPayment, setMethodPayment] = useState<string>('')

  useEffect(() => {
    const addressValues = localStorage.getItem('address')
    const methodPaymentValues = localStorage.getItem('methodPayment')

    setAddress(JSON.parse(addressValues as string))
    setMethodPayment(JSON.parse(methodPaymentValues as string))
  }, [])

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
                  {address.street}, {address.number}
                </b>{' '}
                <br />
                {address.district} - {address.city}, {address.uf}
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
                <b>{methodPayment === 'credit' && 'Cartão de Crédito'}</b>
                <b>{methodPayment === 'debit' && 'Cartão de Débito'}</b>
                <b>{methodPayment === 'money' && 'Dinheiro'}</b>
              </p>
            </IconContainer>
          </div>
          <img src={Illustration} alt="Imagem de um motoboy delivery" />
        </ContentSuccess>
      </div>
    </ContainerSuccess>
  )
}
