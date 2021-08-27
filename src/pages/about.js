import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MainContent>
      <h1>About</h1>
      <p>
        Hello, I am a native speaker of Brazilian Portuguese who was born and
        raised in Ceará, a state in the northeast of the country. Passionate
        about reading, I grew up surrounded by books on philosophy, science,
        history and with a lot of influence from cultures of different
        countries, a factor that contributed significantly to my education and
        to the choice of the translation profession.
      </p>
      <p>
        Enthusiast of language studies. Currently, with a degree in
        Linguistics/English Language in progress, an opportunity that made me
        develop the necessary skills to provide a high quality translation that
        ensure style and context in the target language while applying proper
        parameters such as grammar, syntax, semantics and appropriate
        terminology. I have worked with translation from English to Portuguese
        for 3 years, helping agencies and clients to reach an international
        audience and share their content in the digital world.
      </p>
    </MainContent>
  </Layout>
)

export default AboutPage
