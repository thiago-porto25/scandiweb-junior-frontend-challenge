import styled from 'styled-components'

export const HeadingContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 103px;
  text-transform: capitalize;
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  justify-items: center;
  align-items: end;
  row-gap: 103px;
  column-gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`
