import baseX from 'base-x'

const base62 = baseX('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

export function getRandomKey() {
  const randomBytes = new Uint8Array(32)
  crypto.getRandomValues(randomBytes)
  return base62.encode(randomBytes)
}
