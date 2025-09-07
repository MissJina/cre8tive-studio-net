import { OpenAI } from 'openai';

export async function POST(req: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { message } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'system', content: 'You are Cre8tiveStudio AI helper...' }, { role: 'user', content: message }],
  });
  return Response.json({ reply: response.choices[0].message.content });
}
