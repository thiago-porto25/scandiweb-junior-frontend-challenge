import styled from 'styled-components'

export const ErrorBoundaryContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0 auto;
  text-align: center;

  @media (max-width: 1240px) {
    padding: 0 48px;
  }

  @media (max-width: 620px) {
    padding: 0 16px;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 44px;
  max-width: 300px;
  margin-top: 32px;
`

export const LogoContainer = styled.div`
  width: 72px;
  height: 72px;

  svg {
    width: 100%;
    height: 100%;
  }
`
