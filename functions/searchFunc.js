export const searchFunc = async (searchBody) => {
	try {
		const response = await fetch('/api/ft', {
			method: "POST",
			headers: {
				"X-Api-Key": process.env.API_KEY,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(searchBody)
		})
		const { results: [{ results }] } = await response.json()
		
		return results.filter(res => res.images.length !== 0)
	} catch (error) {
		console.log('There was a problem with that request', error)
	}
}

export default searchFunc