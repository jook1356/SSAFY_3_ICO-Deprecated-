import React, { useReducer } from "react"
import FormInput from "./FormInput"
import { css } from "@emotion/react"

type FormProps = {
	mainInit?: { title: string; content: string }
	subInput?: any
	subInit?: any
	titlePlaceHolder?: string
	contentPlaceHolder?: string
	idx?: number
	frontComp?: any
	noTitle?: boolean
}

const inputReducer = (state: any, action: any) => {
	if (action.type === "CHANGE_TITLE") {
		return { ...state, title: action.value }
	}
	if (action.type === "CHANGE_CONTENT") {
		return { ...state, content: action.value }
	}
	if (action.type === "CHANGE_SUB") {
		return { ...state, sub: { ...state.sub, [action.value.key]: action.value.value } }
	}
}

function Form({
	mainInit,
	subInput,
	subInit,
	titlePlaceHolder,
	contentPlaceHolder,
	idx,
	frontComp,
	noTitle,
}: FormProps) {
	const [inputState, dispatchInput] = useReducer(inputReducer, {
		title: mainInit ? mainInit.title : "",
		content: mainInit ? mainInit.content : "",
		sub: subInit ? subInit : {},
	})

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatchInput({ type: "CHANGE_TITLE", value: event.target.value })
	}

	const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatchInput({ type: "CHANGE_CONTENT", value: event.target.value })
	}

	const subInputChangeHandler = ({
		key,
		value,
		event,
	}: {
		key: any
		value?: any
		event?: React.ChangeEvent<HTMLInputElement>
	}) => {
		if (event) {
			dispatchInput({ type: "CHANGE_SUB", value: { key, value: event.target.value } })
		} else {
			dispatchInput({ type: "CHANGE_SUB", value: { key, value } })
		}
	}

	const subInputRender =
		subInput &&
		React.cloneElement(subInput, {
			subInputChangeHandler,
			inputState,
		})

	const frontCompRender =
		frontComp &&
		React.cloneElement(frontComp, {
			inputState,
		})

	const idxRender = <div css={showIdxCSS}>{typeof idx === 'number' && `# ${String(idx).padStart(2, "0")}`}</div>

	return (
		<div css={formWrapperCSS}>
			{frontCompRender ? frontCompRender : idxRender}

			<FormInput
				inputState={inputState}
				titleChangeHandler={titleChangeHandler}
				contentChangeHandler={contentChangeHandler}
				titlePlaceHolder={titlePlaceHolder}
				contentPlaceHolder={contentPlaceHolder}
				noTitle={noTitle}
			>
				<div css={subInputWrapperCSS}>{subInputRender}</div>
			</FormInput>
		</div>
	)
}

const formWrapperCSS = css`
	background-color: var(--teacher-main-color-2);
	padding: 16px 16px 16px 20px;
	border-radius: 10px;
	display: flex;
`

const subInputWrapperCSS = css`
	background-color: rgba(0, 50, 30, 0.1);
`

const showIdxCSS = css`
	width: 64px;
	padding-top: 14px;
	color: rgb(255, 255, 255);
	font-size: var(--teacher-h4);
	font-weight: 500;
`

export default Form
