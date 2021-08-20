import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import * as S from "../components/ListWrapper/styled"

const PublicRelationsPage = () => (
  <Layout>
    <SEO title="Public Relations" />
    <S.ListWrapper>
      <PostItem
        key={1}
        slug={"/aligning-business-and-government-on-climate-change"}
        background={"#f18701"}
        category={"public relations"}
        timeToRead={6}
        title={"Aligning Business And Government On Climate Change"}
        description={"Alinhando negócios e governo nas mudanças climáticas"}
      />
      <PostItem
        key={2}
        slug={
          "/how-to-choose-the-best-pr-agency-for-your-financial-services-firm"
        }
        background={"#f18701"}
        category={"public relations"}
        timeToRead={4}
        title={
          "How To Choose The Best PR Agency For Your Financial Services Firm"
        }
        description={
          "Como escolher a melhor agência de relações públicas para sua empresa de serviços financeiros"
        }
      />
      <PostItem
        key={3}
        slug={"/public-relations-enters-the-age-of-artificial-intelligence"}
        background={"#f18701"}
        category={"public relations"}
        timeToRead={5}
        title={"Public Relations Enters The Age Of Artificial Intelligence"}
        description={
          "Relações públicas entra na era da inteligência artificial"
        }
      />
      <PostItem
        key={4}
        slug={"/the-key-to-growing-human-centered-businesses"}
        background={"#f18701"}
        category={"public relations"}
        timeToRead={8}
        title={"The Key To Growing Human-centered Businesses"}
        description={
          "A chave para o crescimento de negócios centrados no ser humano"
        }
      />
    </S.ListWrapper>
  </Layout>
)

export default PublicRelationsPage
