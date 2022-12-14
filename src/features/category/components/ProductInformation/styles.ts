import styled from 'styled-components'

export const ProductInformationContainer = styled.div``

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: block;
    margin-top: 16px;
  }
`

export const AttributeList = styled.ul`
  margin-top: 40px;
  margin-bottom: 36px;

  > li {
    margin-bottom: 24px;

    :last-child {
      margin-bottom: 0;
    }
  }
`

export const ButtonContainer = styled.div`
  height: 52px;
  margin-bottom: 40px;
`

export const Description = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: initial !important;
  }

  ul,
  li {
    list-style-type: initial !important;
  }
`
