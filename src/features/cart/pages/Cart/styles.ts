import styled from 'styled-components'

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 80px;
`

export const ItemsList = styled.ul`
  margin-top: 55px;
  margin-bottom: 32px;
`

export const TotalContainer = styled.div`
  width: 279px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const ButtonContainer = styled.div`
  height: 43px;
  margin-top: 8px;
`

export const TotalGridItem = styled.div`
  width: 210px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Divider = styled.div`
  height: 1px;
  background-color: #e5e5e5;
  width: 100%;
`
