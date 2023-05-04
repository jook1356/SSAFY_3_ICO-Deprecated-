import React from "react"
import { css } from "@emotion/react"
import PageHeader from "@/components/student/layout/PageHeader/PageHeader"
import ContentWrapper from "@/components/student/common/ContentWrapper/ContentWrapper"
import HomeJobCard from "@/components/student/Home/JobCard/HomeJobCard"

function index() {
	return (
		<div>
			<PageHeader title={"아이코"} />
			<div css={contentParentCSS}>
				<ContentWrapper>
          <div css={contentTitleCSS}>
            내 프로필
          </div>
          <HomeJobCard name={'김빵빵'} credit={3} backgroundColor={'#634AFF'} imgUrl={'/assets/job/firefighter.png'}/>
        </ContentWrapper>
				<ContentWrapper>
          <div css={contentTitleCSS}>
            자산
          </div>
        </ContentWrapper>
			</div>
		</div>
	)
}

const header = css``

const contentTitleCSS = css`
  font-size: var(--student-h2);
  font-weight: 700;
`
const contentParentCSS = css`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default index
