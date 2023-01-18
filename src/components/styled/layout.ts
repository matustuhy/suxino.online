import styled from 'styled-components'

const darkText = 'black'
const lightText = 'white'

const darkBackground = 'black'
const lightBackground = 'white'

export const MainLayout = styled.main`
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  min-width: 100%;

  @media print {
    display: none
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    &:not(:first-of-type) {
      margin-top: 1rem;
      padding-top: 1rem;
    }
  }
`

export const Container = styled.div<{
    dark?: boolean
}>`
  padding: 1rem 1.5rem 1rem;
  color: ${props => props.dark ? lightText : darkText};
  background: ${props => props.dark ? darkBackground : lightBackground};

  @media print {
    color: ${darkText} !important;
    background: ${lightBackground} !important;
  }

  ${Column} {
    @media (max-width: 768px) {
      &:not(:first-of-type) {
        border-top: 2px solid ${props => props.dark ? lightBackground : darkBackground};
      }
    }

    @media print {
      border-top-color: ${darkBackground} !important;
    }
  }
`

export const ListItem = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 0.7rem;
  }
`

