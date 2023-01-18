import * as React from "react"
import {Container, Footer as FooterStyled} from '../styled/layout'

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <FooterStyled>
            <Container>
                &copy; Matus Tuhy {year}
            </Container>
        </FooterStyled>
    )
}