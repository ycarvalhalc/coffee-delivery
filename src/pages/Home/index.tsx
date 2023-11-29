import { 
  BannerHero,
  Catalog, 
  CatalogTitle, 
  HomeContainer,
  ProductList,
} from "./styles"

import { products } from '../../mock/Products'
import { Product } from "../../reducers/cart/reducer"
import { Card } from "../../components/Card"

export function Home() {
  return (
    <HomeContainer>
      <BannerHero>Banner Hero</BannerHero>

      <Catalog>
        <CatalogTitle>Nossos cafés</CatalogTitle>
        <ProductList>
          {products.map((product: Product) => (
            <Card product={product} key={product.id}/>
          ))}
        </ProductList>
      </Catalog>
    </HomeContainer>
  )
}