import LoadImage from "@/components/common/LoadImage/LoadImage"
import { css } from "@emotion/react"
import Modal from "@/components/common/Modal/Modal"
import useCompHandler from "@/hooks/useCompHandler"
import ClassJobSearchModal from "./ClassJobSearchModal"
import { getJobListType } from "@/types/student/apiReturnTypes"

type ClassJobSearchCardPropsType = {
	job: getJobListType
}

function ClassJobSearchCard({ job }: ClassJobSearchCardPropsType) {
	const [openComp, closeComp, compState] = useCompHandler()

	return (
		<>
			<div css={wrapperCSS(job.color)} onClick={openComp}>
				<div css={imageWrapperCSS}>
					<LoadImage wrapperCss={imgCSS} src={job.image} alt={"job_image"} />
				</div>
				<div css={contentWrapperCSS}>
					<span css={nameCSS}>{job.title}</span>
					<span css={needCSS}>{job.total}명</span>
				</div>
			</div>
			<Modal
				compState={compState}
				closeComp={closeComp}
				transition={"scale"}
				content={<ClassJobSearchModal job={job.title} id={job.id} closeComp={closeComp} />}
			/>
		</>
	)
}

const wrapperCSS = (color: string) => {
	return css`
		width: 270px;
		height: 160px;
		background-color: ${color};
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		position: relative;
		overflow: hidden;
	`
}

const imageWrapperCSS = css`
	position: absolute;
	top: 5px;
	left: 25px;
	width: 100px;
	height: 180px;
`

const imgCSS = css`
	width: 100%;
	height: 100%;

	filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
`

const contentWrapperCSS = css`
	/* border: 1px solid red; */
	width: 140px;
	height: 120px;
	position: absolute;
	top: 20px;
	right: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const nameCSS = css`
	text-align: right;
	font-size: var(--student-h2);
	color: white;
	font-weight: bold;
`

const needCSS = css`
	text-align: right;
	color: rgba(255, 255, 255, 0.7);
	font-size: 4.5rem;
	font-weight: bold;
`

export default ClassJobSearchCard