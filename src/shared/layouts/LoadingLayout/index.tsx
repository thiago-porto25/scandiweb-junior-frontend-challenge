import styled from 'styled-components'

import { Spinner } from '../../components'

export const LoadingLayout = styled.main.attrs({ children: <Spinner /> })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
`
