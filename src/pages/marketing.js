import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import * as S from "../components/ListWrapper/styled"

const MarketingPage = () => (
  <Layout>
    <SEO title="Marketing" />
    <S.ListWrapper>
      <PostItem
        key={1}
        slug={"/camera-is-the-new-keyboard"}
        background={"#6a4c93"}
        category={"marketing"}
        timeToRead={5}
        title={"Camera Is The New Keyboard"}
        description={"A câmera é o novo teclado"}
      />
      <PostItem
        key={2}
        slug={"/the-sales-and-marketing-alignment-gap"}
        background={"#6a4c93"}
        category={"marketing"}
        timeToRead={6}
        title={"The Sales and Marketing Alignment Gap"}
        description={"A lacuna de alinhamento de vendas e marketing"}
      />
      <PostItem
        key={3}
        slug={"/the-secret-to-standing-out-in-the-digital-age"}
        background={"#6a4c93"}
        category={"marketing"}
        timeToRead={5}
        title={"The Secret To Standing Out In The Digital Age"}
        description={"O segredo para se destacar na era digital"}
      />
      <PostItem
        key={4}
        slug={"/video-marketing"}
        background={"#6a4c93"}
        category={"marketing"}
        timeToRead={12}
        title={"Video Marketing"}
        description={"Marketing de vídeo"}
      />
    </S.ListWrapper>
  </Layout>
)

export default MarketingPage
