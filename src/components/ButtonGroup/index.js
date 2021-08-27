import React from "react"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const ButtonGroup = () => (
  <S.ButtonGroupWrapper>
    <S.ButtonGroupLink
      to="/marketing"
      className="previous"
      cover
      direction="left"
      bg={getThemeColor()}
    >
      Marketing
    </S.ButtonGroupLink>

    <S.ButtonGroupLink
      to="/business"
      className="previous"
      cover
      direction="left"
      bg={getThemeColor()}
    >
      Business
    </S.ButtonGroupLink>

    <S.ButtonGroupLink
      to="/finance"
      className="previous"
      cover
      direction="left"
      bg={getThemeColor()}
    >
      Finance
    </S.ButtonGroupLink>

    <S.ButtonGroupLink
      to="/travel-and-tourism"
      className="previous"
      cover
      direction="left"
      bg={getThemeColor()}
    >
      Travel and Tourism
    </S.ButtonGroupLink>

    <S.ButtonGroupLink
      to="/public-relations"
      className="previous"
      cover
      direction="left"
      bg={getThemeColor()}
    >
      Public Relations
    </S.ButtonGroupLink>

    <S.ButtonGroupLink
      to="/human-resourses"
      className="previous"
      cover
      direction="left"
      bg={getThemeColor()}
    >
      Human Resourses
    </S.ButtonGroupLink>
  </S.ButtonGroupWrapper>
)

export default ButtonGroup
