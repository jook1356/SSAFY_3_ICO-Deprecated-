import { css } from "@emotion/react"
import { CLASS_GRADE_UP, CLASS_GRADE_DOWN } from "../../ClassIcons"
import { postCreditScoreAPI } from "@/api/teacher/class/postCreditScoreAPI"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAtomValue } from "jotai"
import { selectedStudent } from "@/store/store"

type ClassStudentDetailGradePropsType = {
	creditScore: number
}

function ClassStudentDetailGrade({ creditScore }: ClassStudentDetailGradePropsType) {
	const queryClient = useQueryClient()
	const selectedStudentAtom = useAtomValue(selectedStudent)
	const postCreditScoreMutation = useMutation((args: { studentId: number; body: { type: boolean } }) =>
		postCreditScoreAPI(args),
	)

	const postCreditScore = (type: boolean) => {
		const args = type
			? { studentId: selectedStudentAtom, body: { type: true } }
			: { studentId: selectedStudentAtom, body: { type: false } }

		postCreditScoreMutation.mutate(args, {
			onSuccess: () => {
				return queryClient.invalidateQueries(["enteredStudentDetail"])
			},
		})
	}

	return (
		<div css={wrapperCSS}>
			<h4>신용 등급 평점</h4>
			<div css={buttonWrapperCSS}>
				<div onClick={() => postCreditScore(true)}>{CLASS_GRADE_UP}</div>
				<h4>{creditScore} 점</h4>
				<div onClick={() => postCreditScore(false)}>{CLASS_GRADE_DOWN}</div>
			</div>
		</div>
	)
}

const wrapperCSS = css`
	width: 100%;
	padding: 30px;
	border: 1px solid #dde3ea;
	background-color: var(--common-back-color-2);
	border-radius: 10px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	> h4 {
		font-size: var(--teacher-h4);
		font-weight: bold;
	}
`

const buttonWrapperCSS = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;

	> div {
		cursor: pointer;
		transition: all 0.2s;

		:hover {
			transform: scale(1.2);
		}
	}
`

export default ClassStudentDetailGrade