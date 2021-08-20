import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import * as S from "../components/ListWrapper/styled"

const BusinessPage = () => (
  <Layout>
    <SEO title="Business" />
    <S.ListWrapper>
      <PostItem
        key={1}
        slug={"/how-currency-wars-impact-business"}
        background={"#f6ae2d"}
        category={"business"}
        timeToRead={6}
        title={"How Currency Wars Impact Business"}
        description={"Como as guerras de câmbio impactam os negócios"}
      />
      <PostItem
        key={2}
        slug={
          "/if-you-want-to-differentiate-yourself-among-your-b2b-prospects-get-emotional"
        }
        background={"#f6ae2d"}
        category={"business"}
        timeToRead={5}
        title={
          "If You Want to Differentiate Yourself Among Your B2B Prospects, Get Emotional"
        }
        description={
          "Se você deseja se diferenciar entre seus potenciais clientes B2B, seja emotivo"
        }
      />
      <PostItem
        key={3}
        slug={"/the-shift-of-power"}
        background={"#f6ae2d"}
        category={"business"}
        timeToRead={10}
        title={"The Shift Of Power - From Country Power To Corporate Power"}
        description={
          "A mudança de poder - do poder de um país ao poder corporativo"
        }
      />
      <PostItem
        key={4}
        slug={"/how-cognitive-technologies-can-help-managers-during-the-covid"}
        background={"#f6ae2d"}
        category={"business"}
        timeToRead={8}
        title={"How Cognitive Technologies Can Help Managers During The Covid"}
        description={
          "Como as tecnologias cognitivas podem ajudar os gerentes durante a crise de covid-19"
        }
      />
    </S.ListWrapper>
  </Layout>
)

export default BusinessPage
