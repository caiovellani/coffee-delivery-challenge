import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import { useParams } from "react-router-dom"
import { useTheme } from "styled-components"
import { useCart } from "../../hooks/useCart"
import { Container, Heading, Info, InfoContent, Order } from "./styles"

export function Success() {
  const theme = useTheme()
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  } 

  return(
    <Container>
      <Order>
        <Heading>
          <h2>Uhul! Pedido confirmado!</h2>
          <span>Agora é só aguardar que logo seu café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em {' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer 
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar 
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors["yellow-dark"] }}
              />

              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src="/images/delivery.svg" alt="Pedido concluído com Sucesso!" />
    </Container>
  )
}