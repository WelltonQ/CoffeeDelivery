import { MapPinLine, Minus, Plus, Trash } from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutContent,
  CheckoutSummary,
  Input,
  InputFill,
  InputUF,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="completedOrder">
        <h3>Complete seu pedido</h3>
        <CheckoutContent>
          <div>
            <MapPinLine size={32} />
            <div className="alignTexts">
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <form>
            <Input type="text" placeholder="CEP" />
            <InputFill type="text" placeholder="Rua" />
            <Input type="text" placeholder="Número" />
            <InputFill type="text" placeholder="Complemento" />
            <Input type="text" placeholder="Bairro" />
            <InputFill type="text" placeholder="Cidade" />
            <InputUF type="text" placeholder="UF" />
          </form>
        </CheckoutContent>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <CheckoutSummary>
          <div>
            <img src="" alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <div>
                <div className="quantity">
                  <button>
                    <Minus weight="bold" size={14} />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" size={14} />
                  </button>
                </div>
                <div>
                  <button>
                    <Trash size={32} /> Remover
                  </button>
                </div>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
        </CheckoutSummary>
      </div>
    </CheckoutContainer>
  )
}
