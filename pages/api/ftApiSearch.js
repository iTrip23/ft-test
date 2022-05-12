// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler({ body }, res) {
  console.log('This is the request body', body)

  const response = await fetch('https://api.ft.com/content/search/v1?', {
    method: "POST",
    headers: {
      "X-Api-Key": process.env.API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
  const { results: [{ results }] } = await response.json()
  const resultsWithImages = results.filter(res => res.images.length !== 0)
  res.status(200).json(resultsWithImages)
}
