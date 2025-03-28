export function extractId(link: string) {
    const match = link.match(/\/(\d+)\/?$/)

    if (match) {
        return parseInt(match[1])
    }

    return null
}
