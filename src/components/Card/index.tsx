// import { ShoppingCart } from "phosphor-react";
import { useState } from "react"
import {
  BuyButton,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title
} from "./styles"
import { QuantityInput } from "../Form/QuantityInput"
import { ShoppingCart } from "phosphor-react"
import { useCart } from "../../hooks/useCart"

type CardProps = {
  product: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    img_url: string
  }
}

export function Card({ product }: CardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  function incrementQuantity() {
    setQuantity(state => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  function handleAddItem() {
    addItem({product, quantity})
    setQuantity(1)
  }

  return (
    <Container>
      <img src={product.img_url} alt={product.title}/>

      <Tags>
        {product.tags.map((tag: any) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{product.title}</Title>

      <Description>{product.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{product.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput 
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <BuyButton onClick={handleAddItem}>
            <ShoppingCart size={22} weight="fill" />
          </BuyButton>
        </Order>
      </Control>
    </Container>
  )
}