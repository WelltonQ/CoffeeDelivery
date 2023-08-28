import { Banner } from '../../components/Banner'
import { Cards } from '../../components/Card'
import { CardsContainer, Catalog } from './styles'

export function Home() {
  return (
    <div>
      <Banner />
      <Catalog>
        <h2>Nossos cafés</h2>
        <CardsContainer>
          <Cards />
        </CardsContainer>
      </Catalog>
    </div>
  )
}
