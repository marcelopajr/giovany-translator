import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import * as S from "../components/ListWrapper/styled"

const HumanResoursesPage = () => (
  <Layout>
    <SEO title="Human Resourses" />
    <S.ListWrapper>
      <PostItem
        key={1}
        slug={"/digital-transformation-can-help-manage-any-workforce-approach"}
        background={"#f15946"}
        category={"human resourses"}
        timeToRead={7}
        title={"Digital Transformation Can Help Manage Any Workforce Approach"}
        description={
          "A transformação digital pode ajudar a gerenciar qualquer abordagem da força de trabalho"
        }
      />
      <PostItem
        key={2}
        slug={"/employee-engagement-is-a-financial-strategy"}
        background={"#f15946"}
        category={"human resourses"}
        timeToRead={5}
        title={"Employee Engagement Is a Financial Strategy"}
        description={"O engajamento do funcionário é uma estratégia financeira"}
      />
      <PostItem
        key={3}
        slug={"/hr-needs-to-think-about-equity-not-equality"}
        background={"#f15946"}
        category={"human resourses"}
        timeToRead={9}
        title={"HR Needs To Think About Equity, Not Equality"}
        description={"O RH precisa pensar sobre equidade, não igualdade"}
      />
      <PostItem
        key={4}
        slug={"/what-are-the-steps-in-effective-workforce-planning"}
        background={"#f15946"}
        category={"human resourses"}
        timeToRead={6}
        title={"What Are The Steps In Effective Workforce Planning?"}
        description={
          "Quais são as etapas do planejamento eficaz da força de trabalho?"
        }
      />
    </S.ListWrapper>
  </Layout>
)

export default HumanResoursesPage
