import React, { useState } from "react"
import { css } from "@emotion/react"

function create() {
	const ToggleButton = () => {
		const [isToggled, setIsToggled] = useState(false)

		const toggleButton = () => {
			setIsToggled(!isToggled)
		}

		return <button onClick={toggleButton}>{isToggled ? "ON" : "OFF"}</button>
	}

	return (
		<div css={wrapperCSS}>
			<div css={headerCSS}>
				<div css={titleCSS}>상품 등록하기</div>
			</div>

			<div css={contentCSS}>투자 종목 주제</div>
			<input css={inputCSS} />

			<div style={{ display: "flex" }}>
				<div>
					<div css={contentCSS}>상품 가격</div>
					<input css={inputCSS} />
				</div>
				<div>
					<div css={contentCSS}>상품 수량</div>
					<input css={inputCSS} />
				</div>
				<div>
					<div css={contentCSS}>상품 유형</div>
					<ToggleButton />
				</div>
			</div>

			<div css={imageCSS}></div>

			<svg width="112" height="107" viewBox="0 0 112 107" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M106 53.5V69C106 80.201 106 85.8016 103.82 90.0798C101.903 93.8431 98.8431 96.9027 95.0798 98.8201C90.8016 101 85.201 101 74 101H38C26.799 101 21.1984 101 16.9202 98.8201C13.1569 96.9027 10.0973 93.8431 8.17987 90.0798C6 85.8016 6 80.201 6 69V43C6 31.799 6 26.1984 8.17987 21.9202C10.0973 18.1569 13.1569 15.0973 16.9202 13.1799C21.1984 11 26.799 11 38 11H58.5M91 36V6M76 21H106M76 56C76 67.0457 67.0457 76 56 76C44.9543 76 36 67.0457 36 56C36 44.9543 44.9543 36 56 36C67.0457 36 76 44.9543 76 56Z"
					stroke="#4D4D4D"
					stroke-width="12"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<div css={contentCSS}>상품 상세 설명</div>
			<input css={inputCSS} />
		</div>
	)
}

const wrapperCSS = css`
	display: flex;
	flex: 1;
	flex-direction: column;
	background-color: var(--common-back-color-2);
	border-radius: 10px;
	padding: 30px;
`
const headerCSS = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
const titleCSS = css`
	font-size: var(--teacher-h1);
	font-weight: bold;
`

const contentCSS = css`
	font-size: 1.1rem;
	margin-top: 20px;
`

const inputCSS = css`
	border: none;
	background-color: var(--teacher-gray2-color);
	height: 45px;
	border-radius: 10px;
`
const imageCSS = css`
	border: none;
	border-radius: 10px;

	background-color: var(--teacher-gray2-color);
	width: 100%;
	height: 50%;

	margin-top: 10px;
`

export default create
