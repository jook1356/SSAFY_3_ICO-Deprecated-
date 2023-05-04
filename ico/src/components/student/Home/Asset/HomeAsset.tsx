import React from "react"
import HomeAssetItem from "./HomeAssetItem"

const WALLET_ICON = (
	<svg width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3.125 5.62489V10.6249M5.9375 5.62489V10.6249M9.0625 5.62489V10.6249M11.875 5.62489V10.6249M1.875 11.6249L1.875 12.1249C1.875 12.4749 1.875 12.6499 1.94312 12.7836C2.00304 12.9012 2.09865 12.9968 2.21626 13.0568C2.34995 13.1249 2.52497 13.1249 2.875 13.1249H12.125C12.475 13.1249 12.65 13.1249 12.7837 13.0568C12.9013 12.9968 12.997 12.9012 13.0569 12.7836C13.125 12.6499 13.125 12.4749 13.125 12.1249V11.6249C13.125 11.2749 13.125 11.0998 13.0569 10.9661C12.997 10.8485 12.9013 10.7529 12.7837 10.693C12.65 10.6249 12.475 10.6249 12.125 10.6249H2.875C2.52497 10.6249 2.34995 10.6249 2.21626 10.693C2.09865 10.7529 2.00304 10.8485 1.94312 10.9661C1.875 11.0998 1.875 11.2749 1.875 11.6249ZM7.28307 1.9231L2.65807 2.95087C2.37866 3.01297 2.23895 3.04401 2.13467 3.11914C2.04268 3.18541 1.97045 3.27545 1.92572 3.37962C1.875 3.49772 1.875 3.64083 1.875 3.92706L1.875 4.62489C1.875 4.97492 1.875 5.14994 1.94312 5.28363C2.00304 5.40124 2.09865 5.49685 2.21626 5.55677C2.34995 5.62489 2.52497 5.62489 2.875 5.62489H12.125C12.475 5.62489 12.65 5.62489 12.7837 5.55677C12.9013 5.49685 12.997 5.40124 13.0569 5.28363C13.125 5.14994 13.125 4.97492 13.125 4.62489V3.92706C13.125 3.64083 13.125 3.49772 13.0743 3.37962C13.0295 3.27545 12.9573 3.18541 12.8653 3.11914C12.7611 3.04401 12.6213 3.01297 12.3419 2.95088L7.71693 1.9231C7.63598 1.90511 7.5955 1.89611 7.5546 1.89253C7.51827 1.88934 7.48173 1.88934 7.4454 1.89253C7.4045 1.89611 7.36402 1.90511 7.28307 1.9231Z"
			stroke="black"
			strokeOpacity="1"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const DEPOSIT_ICON = (
	<svg width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3.12496 8.125C3.12496 9.15524 3.54041 10.0884 4.21292 10.7662C4.27778 10.8316 4.31021 10.8643 4.32935 10.8957C4.34762 10.9257 4.35825 10.9515 4.36641 10.9857C4.37496 11.0215 4.37496 11.0622 4.37496 11.1436V12.625C4.37496 12.8 4.37496 12.8875 4.40902 12.9544C4.43898 13.0132 4.48678 13.061 4.54558 13.0909C4.61243 13.125 4.69994 13.125 4.87496 13.125H6.06246C6.23747 13.125 6.32498 13.125 6.39183 13.0909C6.45063 13.061 6.49844 13.0132 6.5284 12.9544C6.56246 12.8875 6.56246 12.8 6.56246 12.625V12.375C6.56246 12.2 6.56246 12.1125 6.59652 12.0456C6.62648 11.9868 6.67428 11.939 6.73308 11.9091C6.79993 11.875 6.88744 11.875 7.06246 11.875H7.93746C8.11247 11.875 8.19998 11.875 8.26683 11.9091C8.32563 11.939 8.37344 11.9868 8.4034 12.0456C8.43746 12.1125 8.43746 12.2 8.43746 12.375V12.625C8.43746 12.8 8.43746 12.8875 8.47152 12.9544C8.50148 13.0132 8.54928 13.061 8.60808 13.0909C8.67493 13.125 8.76244 13.125 8.93746 13.125H10.125C10.3 13.125 10.3875 13.125 10.4544 13.0909C10.5132 13.061 10.561 13.0132 10.5909 12.9544C10.625 12.8875 10.625 12.8 10.625 12.625V12.0152C10.625 11.8889 10.625 11.8258 10.643 11.7751C10.6602 11.7265 10.6819 11.6925 10.7187 11.6564C10.7571 11.6188 10.8222 11.5885 10.9523 11.5281C11.5662 11.2431 12.09 10.7969 12.4695 10.2439C12.5362 10.1466 12.5695 10.098 12.6052 10.0692C12.6392 10.0418 12.6698 10.0257 12.7117 10.0131C12.7556 10 12.8076 10 12.9117 10H13.25C13.425 10 13.5125 10 13.5794 9.96594C13.6382 9.93598 13.686 9.88817 13.7159 9.82937C13.75 9.76252 13.75 9.67502 13.75 9.5V7.36609C13.75 7.19947 13.75 7.11616 13.719 7.0519C13.6883 6.98812 13.6369 6.93667 13.5731 6.90595C13.5088 6.875 13.4255 6.875 13.2589 6.875C13.1383 6.875 13.078 6.875 13.0294 6.85863C12.9771 6.84097 12.9403 6.81749 12.9023 6.77736C12.8671 6.74014 12.8383 6.6779 12.7808 6.55342C12.5961 6.15389 12.3432 5.79236 12.037 5.48377C11.9722 5.41841 11.9397 5.38573 11.9206 5.3543C11.9023 5.32431 11.8917 5.29849 11.8835 5.26434C11.875 5.22854 11.875 5.18782 11.875 5.10636V4.41286C11.875 4.18783 11.875 4.07532 11.8281 3.99969C11.7871 3.93344 11.7228 3.88492 11.6478 3.86365C11.5622 3.83937 11.454 3.87028 11.2376 3.9321L9.75479 4.35576C9.72959 4.36296 9.71699 4.36656 9.70418 4.36909C9.6928 4.37133 9.68131 4.37294 9.66975 4.37391C9.65674 4.375 9.64364 4.375 9.61743 4.375H9.3494M3.12496 8.125C3.12496 6.68496 3.93665 5.4345 5.12748 4.80619M3.12496 8.125H2.5C1.80964 8.125 1.25 7.56536 1.25 6.875C1.25 6.41232 1.50137 6.00836 1.875 5.79223M9.375 4.0625C9.375 5.27062 8.39562 6.25 7.1875 6.25C5.97938 6.25 5 5.27062 5 4.0625C5 2.85438 5.97938 1.875 7.1875 1.875C8.39562 1.875 9.375 2.85438 9.375 4.0625Z"
			stroke="black"
			strokeOpacity="1"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const STOCK_ICON = (
	<svg width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M13.125 13.125H2.875C2.52497 13.125 2.34995 13.125 2.21626 13.0569C2.09865 12.997 2.00304 12.9013 1.94312 12.7837C1.875 12.65 1.875 12.475 1.875 12.125V1.875M13.125 4.375L9.72855 7.77145C9.6048 7.8952 9.54292 7.95708 9.47157 7.98026C9.4088 8.00066 9.3412 8.00066 9.27843 7.98026C9.20708 7.95708 9.1452 7.8952 9.02145 7.77145L7.85355 6.60355C7.7298 6.4798 7.66792 6.41792 7.59657 6.39474C7.5338 6.37434 7.4662 6.37434 7.40343 6.39474C7.33208 6.41792 7.2702 6.4798 7.14645 6.60355L4.375 9.375M13.125 4.375H10.625M13.125 4.375V6.875"
			stroke="black"
			strokeOpacity="1"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

function HomeAsset() {
	const list = [
		{ icon: WALLET_ICON, title: "일반 계좌", money: 25600, moneyUnit: "미소", detailUrl: "/student/test" },
		{ icon: DEPOSIT_ICON, title: "정기 예금", money: 25600, moneyUnit: "미소", detailUrl: "/student/test" },
		{ icon: STOCK_ICON, title: "투자", money: 25600, moneyUnit: "미소", detailUrl: "/student/test" },
	]

	const renderAssets = list.map((el, idx) => {
		return <HomeAssetItem key={`assets-${el.title}`} {...el} />
	})
	return <div>{renderAssets}</div>
}

export default HomeAsset
