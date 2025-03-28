export type PaginationConfig = {
    limit: number
    currentPage: number
    paginationTotal: number
    onChange: (newPage: number) => void
}
