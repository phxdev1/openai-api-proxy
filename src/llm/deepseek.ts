import { IChat } from './base'
import { openaiBase } from './openai'

export function deepseek(env: Record<string, string>): IChat {
  const r = openaiBase(env, {
    apiKey: env.DEEPSEEK_API_KEY,
    baseURL: 'https://api.deepseek.com',
  })
  r.name = 'deepseek'
  r.requiredEnv = ['DEEPSEEK_API_KEY']
  r.supportModels = ['deepseek-chat', 'deepseek-coder']
  return r
}
