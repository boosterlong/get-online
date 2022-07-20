import * as React from "react"
import { Link } from "gatsby"
import '../components/layout.css'
import { Container } from "@mui/system"
import Hero from "../components/hero"

function HomePage({ pageContext }) {

  const { content } = pageContext

  return (
    <Container
      maxWidth="lg"
    >
      <Hero
        text={content.metadata.headline}
      />
      
      <div>
        <p dangerouslySetInnerHTML={{ __html: content.content}}></p>
      </div>
    </Container>
  )
}

export default HomePage
