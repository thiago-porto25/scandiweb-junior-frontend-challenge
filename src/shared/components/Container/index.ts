import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  max-width: 1240px;
  padding: 0;

  @media (max-width: 1240px) {
    padding: 0 48px;
  }

  @media (max-width: 620px) {
    padding: 0 16px;
  }
`
