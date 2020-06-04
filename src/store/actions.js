import { INCREMENT, DECREMENT } from './types'

export function increment(state) {
	return { type: INCREMENT, state }
}

export function decrement(state) {
	return { type: DECREMENT, state }
}
