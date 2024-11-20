import { MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Aside, Container } from "./styles";

export function Header() {

  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery Logo" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </div>
      </Aside>
    </Container>
  )
}