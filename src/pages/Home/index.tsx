import { 
  BannerHero,
  BuyContainer, 
  Catalog, 
  CatalogTitle, 
  HomeContainer,
  Price,
  ProductCard, 
  ProductList,
  Tags
} from "./styles"

import { products } from '../../mock/Products'
import { ProductActionForm } from "./ProductActionForm/indext"
import { Product } from "../../reducers/cart/reducer"

export function Home() {
  return (
    <HomeContainer>
      <BannerHero>Banner Hero</BannerHero>

      <Catalog>
        <CatalogTitle>Nossos cafés</CatalogTitle>
        <ProductList>
          {products.map((product: Product) => (
            <ProductCard key={product.id}>
              <img src={product.img_url} />

              <Tags>
                {product.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </Tags>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <BuyContainer>
                <Price>R$ <span>{product.price}</span></Price>

                <ProductActionForm product={product}/>
              </BuyContainer>
            </ProductCard>
          ))}
        </ProductList>
      </Catalog>
    </HomeContainer>
  )
}