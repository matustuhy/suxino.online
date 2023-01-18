import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {Column, Container, MainLayout, Row} from "../components/styled/layout";
import {H1} from "../components/styled/typography";
import {GlobalStyle} from "../components/styled/default";
import {BasicInfo} from "../components/sections/BasicInfo";
import {Contact} from "../components/sections/Contact";
import {WorkHistory} from "../components/sections/WorkHistory";
import {WorkExperience} from "../components/sections/WorkExperience";
import {Footer} from "../components/layout/Footer";


const IndexPage: React.FC<PageProps> = () => {
    return (
        <MainLayout>
            <GlobalStyle/>
            <Container>
                <H1>Welcome</H1>
                <p>My name is Matus Tuhy and I'm a software developer</p>
            </Container>
            <Container>
                <Row>
                    <Column>
                        <BasicInfo/>
                    </Column>
                    <Column>
                        <Contact/>
                    </Column>
                </Row>
            </Container>
            <Container dark>
                <Row>
                    <Column>
                        <WorkExperience/>
                    </Column>
                    <Column>
                        <WorkHistory/>
                    </Column>
                </Row>
            </Container>

            <Footer/>
        </MainLayout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>suxino.online</title>
