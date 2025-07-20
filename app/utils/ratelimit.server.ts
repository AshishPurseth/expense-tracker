type RateLimitRecord = {
    timestamp: number
    count: number
}

const rateLimitMap = new Map<string, RateLimitRecord>()

const WINDOW_MS = 10_000 // 10 seconds
const MAX_REQUESTS = 5 // Max 5 requests per window

export function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const record = rateLimitMap.get(ip)

    if (!record) {
        rateLimitMap.set(ip, { timestamp: now, count: 1 })
        return false
    }

    const timePassed = now - record.timestamp

    if (timePassed > WINDOW_MS) {
        rateLimitMap.set(ip, { timestamp: now, count: 1 })
        return false
    }

    if (record.count < MAX_REQUESTS) {
        record.count++
        return false
    }

    return true
}
