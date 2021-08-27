import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from "./Hit"
import ButtonGroup from "../ButtonGroup"
import * as S from "./styled"

const Search = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  return (
    <S.SearchWrapper>
      <ButtonGroup />
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <SearchBox autoFocus />
        <Stats />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
