import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  author: string
  content: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resp = await fetch('https://zenquotes.io/api/random')
  const json = await resp.json()
  const author = json[0].a ?? ''
  const content = json[0].q ?? ''
  res.status(200).json({ author, content })
}