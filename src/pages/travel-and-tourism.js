import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import * as S from "../components/ListWrapper/styled"

const TravelAndTourismPage = () => (
  <Layout>
    <SEO title="Travel and Tourism" />
    <S.ListWrapper>
      <PostItem
        key={1}
        slug={
          "/column-on-the-value-of-mentoring-to-help-hotels-increase-profitability"
        }
        background={"#1982c4"}
        category={"travel and tourism"}
        timeToRead={8}
        title={
          "Column On The Value Of Mentoring To Help Hotels Increase Profitability"
        }
        description={
          "Artigo sobre o valor da mentoria para ajudar os hotéis a aumentar a lucratividade"
        }
      />
      <PostItem
        key={2}
        slug={"/insights-that-the-travel-sectorshould-take-from-seaspiracy"}
        background={"#1982c4"}
        category={"travel and tourism"}
        timeToRead={8}
        title={"Insights That The Travel Sector Should Take From ‘Seaspiracy’"}
        description={'Ideias que o setor de viagens deve tirar de "Seaspiracy"'}
      />
      <PostItem
        key={3}
        slug={"/is-cruise-ship-travel-closer-to-come-back"}
        background={"#1982c4"}
        category={"travel and tourism"}
        timeToRead={8}
        title={"Is Cruise Ship Travel Closer To Come Back?"}
        description={"A viagem de navio de cruzeiro está mais perto de voltar?"}
      />
      <PostItem
        key={4}
        slug={"/the-expansion-of-travel-and-tourism-in-the-middle-east"}
        background={"#1982c4"}
        category={"travel and tourism"}
        timeToRead={9}
        title={"The Expansion Of Travel And Tourism In The Middle East"}
        description={"A expansão das viagens e turismo no Oriente Médio"}
      />
    </S.ListWrapper>
  </Layout>
)

export default TravelAndTourismPage
