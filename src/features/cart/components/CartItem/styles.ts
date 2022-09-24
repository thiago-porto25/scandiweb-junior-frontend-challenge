import styled from 'styled-components'

export const CartItemContainer = styled.div`
  /* TODO: Add small variant for spacing */
  display: flex;
  justify-content: space-between;
  margin: 24px 0;

  h2 > span {
    display: block;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`

export const LeftContainer = styled.div``

export const RightContainer = styled.div`
  display: flex;
  column-gap: 24px;
`

export const AttributeList = styled.ul`
  /* TODO: Add small variant for spacing */
  margin-top: 20px;

  > li {
    margin-bottom: 16px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

export const QuantityContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ButtonContainer = styled.div`
  /* TODO: Add small variant */
  width: 45px;
  height: 45px;
`

export const Plus = styled.div`
  /* TODO: Add small variant */
  height: 100%;
  width: 100%;

  ::after,
  ::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 15px;
    width: 15px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.neutral.dark};
  }

  ::before {
    transform: rotate(90deg);
  }
`

export const Minus = styled.div`
  /* TODO: Add small variant */
  ::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 15px;
    width: 15px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.neutral.dark};
  }
`
