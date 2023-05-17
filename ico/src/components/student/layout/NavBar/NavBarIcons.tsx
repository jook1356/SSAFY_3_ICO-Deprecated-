import { css } from "@emotion/react"

export const NAVBAR_HOME = (
	<img src={'/assets/dock/dock_home.png'} css={css`width: 40px; height: 40px; margin: 4px 0px;`}  />
	// <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 	<path
	// 		d="M13.5 31.5001V20.4001C13.5 19.56 13.5 19.14 13.6635 18.8191C13.8073 18.5369 14.0368 18.3074 14.319 18.1636C14.6399 18.0001 15.0599 18.0001 15.9 18.0001H20.1C20.9401 18.0001 21.3601 18.0001 21.681 18.1636C21.9632 18.3074 22.1927 18.5369 22.3365 18.8191C22.5 19.14 22.5 19.56 22.5 20.4001V31.5001M16.5265 4.14612L6.35309 12.0588C5.67303 12.5877 5.33301 12.8522 5.08804 13.1834C4.87105 13.4768 4.7094 13.8073 4.61104 14.1587C4.5 14.5554 4.5 14.9862 4.5 15.8477V26.7001C4.5 28.3803 4.5 29.2203 4.82698 29.8621C5.1146 30.4266 5.57354 30.8855 6.13803 31.1731C6.77976 31.5001 7.61984 31.5001 9.3 31.5001H26.7C28.3802 31.5001 29.2202 31.5001 29.862 31.1731C30.4265 30.8855 30.8854 30.4266 31.173 29.8621C31.5 29.2203 31.5 28.3803 31.5 26.7001V15.8477C31.5 14.9862 31.5 14.5554 31.389 14.1587C31.2906 13.8073 31.129 13.4768 30.912 13.1834C30.667 12.8522 30.327 12.5877 29.6469 12.0588L19.4735 4.14612C18.9465 3.73624 18.683 3.5313 18.392 3.45252C18.1353 3.38301 17.8647 3.38301 17.608 3.45252C17.317 3.5313 17.0535 3.73624 16.5265 4.14612Z"
	// 		stroke="black"
	// 		strokeOpacity="0.6"
	// 		strokeWidth="3"
	// 		strokeLinecap="round"
	// 		strokeLinejoin="round"
	// 	/>
	// </svg>
)

export const NAVBAR_CLASS = (
	<img src={'/assets/dock/dock_class.png'} css={css`width: 48px; height: 48px;`}  />
	// <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 	<path
	// 		d="M18 23.25H11.25C9.15666 23.25 8.10998 23.25 7.25829 23.5084C5.34068 24.0901 3.84006 25.5907 3.25836 27.5083C3 28.36 3 29.4067 3 31.5M24 27L27 30L33 24M21.75 11.25C21.75 14.9779 18.7279 18 15 18C11.2721 18 8.25 14.9779 8.25 11.25C8.25 7.52208 11.2721 4.5 15 4.5C18.7279 4.5 21.75 7.52208 21.75 11.25Z"
	// 		stroke="black"
	// 		strokeOpacity="0.6"
	// 		strokeWidth="3"
	// 		strokeLinecap="round"
	// 		strokeLinejoin="round"
	// 	/>
	// </svg>
)

export const NAVBAR_GOVERNMENT = (
	<img src={'/assets/dock/dock_gov.png'} css={css`width: 48px; height: 48px;`}  />
	// <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 	<path
	// 		d="M3.75071 19.5H12.7507M23.2507 19.5H32.2507M18.0007 10.5V31.5M18.0007 10.5C20.0718 10.5 21.7507 8.82107 21.7507 6.75M18.0007 10.5C15.9296 10.5 14.2507 8.82107 14.2507 6.75M6.00071 31.5L30.0007 31.5M6.00071 6.75001L14.2507 6.75M14.2507 6.75C14.2507 4.67893 15.9296 3 18.0007 3C20.0718 3 21.7507 4.67893 21.7507 6.75M21.7507 6.75L30.0007 6.75M13.3214 21.5045C12.7203 23.8059 10.6779 25.5 8.25071 25.5C5.82356 25.5 3.7811 23.8059 3.18006 21.5045C3.13095 21.3165 3.10639 21.2225 3.10402 20.8468C3.10257 20.6165 3.18815 20.0855 3.26188 19.8674C3.38217 19.5115 3.51237 19.3106 3.77278 18.9088L8.25071 12L12.7286 18.9088C12.9891 19.3106 13.1193 19.5115 13.2395 19.8674C13.3133 20.0855 13.3989 20.6165 13.3974 20.8468C13.395 21.2225 13.3705 21.3165 13.3214 21.5045ZM32.8214 21.5045C32.2203 23.8059 30.1779 25.5 27.7507 25.5C25.3236 25.5 23.2811 23.8059 22.6801 21.5045C22.6309 21.3165 22.6064 21.2225 22.604 20.8468C22.6026 20.6165 22.6882 20.0855 22.7619 19.8674C22.8822 19.5115 23.0124 19.3106 23.2728 18.9088L27.7507 12L32.2286 18.9088C32.4891 19.3106 32.6193 19.5115 32.7395 19.8674C32.8133 20.0855 32.8989 20.6165 32.8974 20.8468C32.895 21.2225 32.8705 21.3165 32.8214 21.5045Z"
	// 		stroke="black"
	// 		strokeOpacity="0.6"
	// 		strokeWidth="3"
	// 		strokeLinecap="round"
	// 		strokeLinejoin="round"
	// 	/>
	// </svg>
)

export const NAVBAR_STORE = (
	<img src={'/assets/dock/dock_shop.png'} css={css`width: 36px; height: 36px; margin: 6px 0px;`}  />
	// <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 	<path
	// 		d="M7.50021 21H27.2038C28.723 21 29.4826 21 30.0874 20.7168C30.6201 20.4672 31.0677 20.0666 31.3745 19.5647C31.7228 18.995 31.8067 18.24 31.9744 16.7301L32.8519 8.83252C32.9032 8.37132 32.9288 8.14073 32.8547 7.96224C32.7895 7.80548 32.6731 7.67546 32.5245 7.59341C32.3553 7.5 32.1233 7.5 31.6593 7.5H6.75021M3 3H4.87266C5.26959 3 5.46806 3 5.62333 3.07549C5.76003 3.14194 5.8733 3.24836 5.94816 3.38064C6.03318 3.5309 6.04556 3.72899 6.07032 4.12515L7.42968 25.8749C7.45444 26.271 7.46682 26.4691 7.55184 26.6194C7.6267 26.7516 7.73997 26.8581 7.87667 26.9245C8.03194 27 8.23041 27 8.62734 27H28.5M11.25 32.25H11.265M24.75 32.25H24.765M12 32.25C12 32.6642 11.6642 33 11.25 33C10.8358 33 10.5 32.6642 10.5 32.25C10.5 31.8358 10.8358 31.5 11.25 31.5C11.6642 31.5 12 31.8358 12 32.25ZM25.5 32.25C25.5 32.6642 25.1642 33 24.75 33C24.3358 33 24 32.6642 24 32.25C24 31.8358 24.3358 31.5 24.75 31.5C25.1642 31.5 25.5 31.8358 25.5 32.25Z"
	// 		stroke="black"
	// 		strokeOpacity="0.6"
	// 		strokeWidth="3"
	// 		strokeLinecap="round"
	// 		strokeLinejoin="round"
	// 	/>
	// </svg>
)