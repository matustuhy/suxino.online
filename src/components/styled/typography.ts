import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.7rem;

  @media print {
    display: none
  }
`

export const H2 = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 0.625rem;
`

export const BlockLink = styled.a`
  display: block;
`

export const Title1 = styled.p`
  font-weight: 700
`
export const Subtitle1 = styled.p`
  font-weight: 300;
  font-size: 0.8rem
`
export const Subtitle2 = styled.p`
  font-weight: 100;
  font-size: 0.6rem;
`