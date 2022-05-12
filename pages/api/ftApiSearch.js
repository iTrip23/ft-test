// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler({ body }, res) {

  const response = await fetch('https://api.ft.com/content/search/v1?', {
    method: "POST",
    headers: {
      "X-Api-Key": process.env.API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })

  const { results: [results] } = await response.json()
  if (results) {
    res.status(200).json(results)
  } else {
    res.status(400).json('nothing found')
  }

}
