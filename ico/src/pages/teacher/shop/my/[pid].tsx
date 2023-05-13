import { css } from "@emotion/react"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState, useEffect, useRef } from "react"

import ShopCarousel from "@/components/teacher/Shop/ShopCarousel"
import Button from "@/components/common/Button/Button"
import { getTeacherProductDetailAPI } from "@/api/common/shop/getTeacherProductDetailAPI"
import { getTeacherProductDetailType } from "@/types/teacher/apiReturnTypes"

function product() {
	const router = useRouter()
	const { pid } = router.query

	const [product, setProduct] = useState<getTeacherProductDetailType>({
		id: 0,
		title: "",
		amount: 0,
		images: [],
		count: 0,
		sold: 0,
		date: "",
		rental: true,
		detail: "",
	})

	useEffect(() => {
		if (typeof pid === "string") {
			getTeacherProductDetailAPI({ body: { pid: pid } })
				.then((res) => {
					setProduct(res)
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}, [pid])

	return (
		<div css={wrapperCSS}>
			<div css={headerCSS}>
				<div css={productCSS}>
					<div>{product?.title}</div>
					{/* <div>{product?.name}</div>  */}
					{/* 이름 getnation으로 선생님이름 받아올까 생각중 */}
					<hr />
					<div>
						<div>{product.amount}미소</div>
						<div>현재 상품이 {product?.count - product?.sold}개 남았습니다.</div>
					</div>
				</div>
				<div css={QRcss}>
					<Image src={"https://placehold.it/150x150"} alt={"QR"} width={150} height={150} />
				</div>
			</div>

			<div css={parentCSS}>{/* <ShopCarousel /> */}</div>

			<div css={footerCSS}>
				<div>
					<div>상품 상세 설명</div>
					<div>{product.detail}</div>
				</div>
				<div>
					<Button
						text={"상품 승인하기"}
						fontSize={`var(--teacher-h5)`}
						width={"190px"}
						height={"30px"}
						theme={"positive"}
						onClick={() => {}}
					/>
					<Button
						text={"상품 반려하기"}
						fontSize={`var(--teacher-h5)`}
						width={"190px"}
						height={"30px"}
						theme={"warning"}
						onClick={() => {}}
					/>
				</div>
			</div>
		</div>
	)
}

const wrapperCSS = css`
	flex: 1;
	display: grid;
	grid-column: 100%;
	background-color: var(--common-back-color-2);
	border-radius: 10px;
	padding: 30px;

	grid-gap: 0;
`

const headerCSS = css`
	display: flex;
	margin-bottom: 10px;
`

const productCSS = css`
	width: 100%;
	height: 100%;

	> div {
	}

	> hr {
		border: 1.5px solid rgba(0, 0, 0, 0.5);
		margin-bottom: 5px;
	}

	> div:nth-of-type(1) {
		font-size: 3rem;
		font-weight: bold;

		margin-bottom: 5px;
	}

	> div:nth-of-type(2) {
		font-size: 1.1rem;
		color: rgba(0, 0, 0, 0.8);

		margin-bottom: 30px;
	}

	> div:nth-of-type(3) {
		display: flex;
		justify-content: space-between;
		align-items: center;

		> div:nth-of-type(1) {
			font-size: 1.5rem;
			font-weight: bold;
		}

		> div:nth-of-type(2) {
			font-size: 1.1rem;
		}
	}
`

const QRcss = css`
	margin-left: 20px;
`

const parentCSS = css`
	overflow: scroll;

	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: transparent;
	}
`

const footerCSS = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;

	> div:nth-of-type(1) {
		> div:nth-of-type(1) {
			font-size: 1.6rem;
		}
		> div:nth-of-type(2) {
			font-size: 0.95rem;
			word-wrap: break-word;
			/* max-height: 100px;
			overflow-y: auto; */
		}
		width: 70%; /* 좌측 div에 고정된 크기 지정 */
	}

	> div:nth-of-type(2) {
		display: flex;
		width: 30%; /* 우측 div에 고정된 크기 지정 */
	}
`

export default product