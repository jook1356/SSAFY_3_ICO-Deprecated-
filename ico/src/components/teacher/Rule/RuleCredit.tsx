import React from 'react'
import { css } from "@emotion/react"
import CollapseMenu from '../common/CollapseMenu/CollapseMenu'
import TableGenerator from '../common/TableGenerator/TableGenerator'


function RuleCredit() {
    const creditRating = [
		["등급", "1등급", "2등급", "3등급", "4등급", "5등급", "6등급", "7등급", "8등급", "9등급", "10등급"],
		["최저", "901", "801", "701", "601", "501", "401", "301", "201", "101", "0"],
		["최고", "100", "900", "800", "700", "600", "500", "400", "300", "200", "100"],
	]

  return (
    <CollapseMenu title={"신용 등급"}>
        신용등급의 등락폭을 수정할 수 있습니다.
        <div css={tableWrapperCSS}>
            <TableGenerator table={creditRating} perHeight={"48px"} />
        </div>
    </CollapseMenu>
  )
}

const tableWrapperCSS = css`
	margin-top: 36px;
`

export default RuleCredit