import styled from 'styled-components'

export const NavbarContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 1;
  }

  @media (max-width: 620px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 22px;
  margin-right: 24px;

  @media (max-width: 620px) {
    margin-top: 16px;
    margin-right: 0;
  }
`
