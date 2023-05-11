import { useState } from "react"

import PageHeader from "@/components/student/layout/PageHeader/PageHeader"
import ContentWrapper from "@/components/student/common/ContentWrapper/ContentWrapper"
import { css } from "@emotion/react"

import TabMenu from "@/components/student/layout/TabMenu/TabMenu"
import { ShopTabMenus } from "@/components/student/Shop/ShopTabMenus"

function create() {
	const formData = new FormData()

	const [title, setTitle] = useState("")
	const [amount, setAmount] = useState("")
	const [imageList, setImageList] = useState([])
	const [count, setCount] = useState("")
	const [detail, setDetail] = useState("")

	const handleTitleChange = (event: any) => {
		setTitle(event.target.value)
	}

	return (
		<div>
			<PageHeader title={"상점"} addComp={<TabMenu menus={ShopTabMenus()} selected={1} />} />
			<div css={contentWrapperCSS}>
				<ContentWrapper>
					<div css={inputWrapperCSS}>
						<input css={inputCSS} placeholder="상품의 이름이 뭔가요?" value={title} onChange={handleTitleChange} />
					</div>

					<div css={inputWrapperCSS}>
						<input css={inputCSS} placeholder="상품의 가격은 얼마인가요?" />
						<div css={unitCSS}>원</div>
					</div>

					<div css={inputWrapperCSS}>
						<input css={inputCSS} placeholder="상품은 총 몇 개인가요?" />
						<div css={unitCSS}>개</div>
					</div>

					<div css={imageWrapperCSS}>
						<input style={{ width: "100%" }} css={inputCSS} placeholder="상품의 사진을 넣어주세요" disabled />
						<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19 9.5V12.2737C19 14.2781 19 15.2803 18.6076 16.0459C18.2625 16.7193 17.7117 17.2668 17.0344 17.6099C16.2643 18 15.2562 18 13.24 18H6.76C4.74381 18 3.73572 18 2.96563 17.6099C2.28825 17.2668 1.73752 16.7193 1.39238 16.0459C1 15.2803 1 14.2781 1 12.2737V7.62105C1 5.61665 1 4.61445 1.39238 3.84888C1.73752 3.17545 2.28825 2.62794 2.96563 2.28482C3.73572 1.89474 4.74381 1.89474 6.76 1.89474H10.45M16.3 6.36842V1M13.6 3.68421H19M13.6 9.94737C13.6 11.924 11.9882 13.5263 10 13.5263C8.01177 13.5263 6.4 11.924 6.4 9.94737C6.4 7.97077 8.01177 6.36842 10 6.36842C11.9882 6.36842 13.6 7.97077 13.6 9.94737Z"
								stroke="#828282"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div css={explainWrapperCSS}>
						<textarea css={textareaCSS} placeholder="선생님에게 상품을 설명해주세요." />
					</div>
				</ContentWrapper>
			</div>
		</div>
	)
}

const inputWrapperCSS = css`
	height: 40px;
	width: 100%;
	margin-bottom: 10px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0px 20px;
	border-radius: 10px;

	background-color: var(--student-main-color-2);
	font-size: var(--student-h4);
`

const unitCSS = css`
	font-size: var(--student-h4);
`

const contentWrapperCSS = css`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const inputCSS = css`
	width: 80%;

	background-color: var(--student-main-color-2);
	outline: none;
	border: none;
`

const imageWrapperCSS = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; /* 가운데 정렬을 위해 추가 */

	height: 30vh;
	width: 100%;
	margin-bottom: 10px;

	padding: 10px 20px;
	border-radius: 10px;

	background-color: var(--student-main-color-2);
	font-size: var(--student-h4);

	svg {
		margin: auto; /* 수평 중앙 정렬을 위해 추가 */
	}
`

const explainWrapperCSS = css`
	width: 100%;
	margin-bottom: 10px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 10px;

	background-color: var(--student-main-color-2);
	font-size: var(--student-h4);
`

const textareaCSS = css`
	width: 100%;
	min-height: 20vh;

	padding: 10px 20px;

	background-color: var(--student-main-color-2);

	border-radius: 10px;

	outline: none;
	border: none;
`

export default create
