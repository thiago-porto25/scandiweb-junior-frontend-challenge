import styled from 'styled-components'

export const HeadingContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 103px;
  text-transform: capitalize;
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  place-items: center;
  row-gap: 103px;
  column-gap: 40px;
`
