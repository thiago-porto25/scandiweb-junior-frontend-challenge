import styled from 'styled-components'

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 292px;
  column-gap: 100px;
  margin-top: 80px;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 80px;
  }
`
