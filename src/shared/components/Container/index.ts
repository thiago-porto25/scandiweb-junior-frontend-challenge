import styled from 'styled-components'

interface IContainerProps {
  takesAvailableSpace?: boolean
}

export const Container = styled.div<IContainerProps>`
  height: 100%;
  width: 100%;
  flex: ${({ takesAvailableSpace }) => (takesAvailableSpace ? 1 : 0)};
  max-width: 1240px;
  padding: 0;

  @media (max-width: 1240px) {
    padding: 0 48px;
  }

  @media (max-width: 620px) {
    padding: 0 16px;
  }
`
