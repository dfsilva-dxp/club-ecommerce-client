import { ShoppingCart } from "phosphor-react";

import Flex from "@/components/Flex";

import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Flex align="center" justify="space-between">
        <S.HeaderTitle>Club Clothing</S.HeaderTitle>

        <S.HeaderLinks>
          <Flex gap="$4">
            <S.HeaderLink>Explorar</S.HeaderLink>
            <S.HeaderLink>Login</S.HeaderLink>
            <S.HeaderLink>Criar conta</S.HeaderLink>
            <S.HeaderLink>
              <ShoppingCart size={20} weight="bold" />
            </S.HeaderLink>
          </Flex>
        </S.HeaderLinks>
      </Flex>
    </S.HeaderContainer>
  );
};

export default Header;
