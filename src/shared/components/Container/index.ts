import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 1240px) {
    margin: 0 48px;
  }

  @media (max-width: 620px) {
    margin: 0 16px;
  }
`
