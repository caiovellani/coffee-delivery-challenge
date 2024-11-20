import {
  CoffeeImage,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title
} from "./styles"

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
   return(
    <Container>
      <CoffeeImage src={coffee.image} alt = {coffee.title} />

      <Tags>
        <span>tag</span>
      </Tags>
       
      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order></Order>
      </Control>

    </Container>
  )
}