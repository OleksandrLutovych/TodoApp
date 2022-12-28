export const INCREMENT: string = 'INCREMENT'
export const REDUCE: string = 'REDUCE'

export function increment() {
    return {
        type: INCREMENT
    }
}
export function reduce() {
    return {
        type: REDUCE
    }
}