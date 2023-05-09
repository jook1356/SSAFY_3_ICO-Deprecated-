import { tokenInstance } from "@/api/instance"
import { getImmigrationListType } from "@/types/teacher/apiReturnTypes"

type responseType = {
	status: number
	data: getImmigrationListType[]
}

export const getImmigrationListAPI = async () => {
	try {
		const response: responseType = await tokenInstance.get("/immigration/teacher")
		console.log("멍청이: ", response)

		return response.data
	} catch (error) {
		throw error
	}
}
