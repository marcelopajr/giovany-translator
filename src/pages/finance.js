import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import * as S from "../components/ListWrapper/styled"

const FinancePage = () => (
  <Layout>
    <SEO title="Finance" />
    <S.ListWrapper>
      <PostItem
        key={1}
        slug={"/5-simple-ways-to-keep-your-bank-account-secure"}
        background={"#8ac926"}
        category={"finance"}
        timeToRead={4}
        title={"5 Simple Ways To Keep Your Bank Account Secure"}
        description={"5 maneiras simples de manter sua conta bancária segura"}
      />
      <PostItem
        key={2}
        slug={"/cryptocurrency-101-pros-and-cons-of-investing-in-crypto"}
        background={"#8ac926"}
        category={"finance"}
        timeToRead={11}
        title={"Cryptocurrency 101 - Pros and Cons of Investing in Crypto"}
        description={
          "Introdução à criptomoeda - os prós e contras de investir em criptomoeda"
        }
      />
      <PostItem
        key={3}
        slug={"/the-ultimate-guide-on-applying-for-a-personal-loan"}
        background={"#8ac926"}
        category={"finance"}
        timeToRead={8}
        title={"The Ultimate Guide on Applying for a Personal Loan"}
        description={
          "O guia definitivo sobre como solicitar um empréstimo pessoal"
        }
      />
      <PostItem
        key={4}
        slug={"/what-is-compound-interest-and-how-does-it-work"}
        background={"#8ac926"}
        category={"finance"}
        timeToRead={5}
        title={"What is Compound Interest and How Does It Work"}
        description={"O que são juros compostos e como isso funciona"}
      />
    </S.ListWrapper>
  </Layout>
)

export default FinancePage
