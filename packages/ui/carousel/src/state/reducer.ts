import { ContextState } from './Context';

export type CarouselAction =
    | { type: 'SET_TOTAL'; payload: number }
    | { type: 'SHOW_SELECTED'; payload: number }
    | { type: 'RESET' }
    | { type: 'SHOW_NEXT' }
    | { type: 'SHOW_PREV' };

export function carouselReducer(
    state: ContextState,
    action: CarouselAction
): ContextState {
    switch (action.type) {
        case 'SET_TOTAL': {
            return {
                ...state,
                total: action.payload,
            };
        }
        case 'SHOW_SELECTED': {
            return {
                ...state,
                currentIndex: action.payload,
            };
        }
        case 'SHOW_NEXT': {
            const { currentIndex, total } = state;
            const next = currentIndex + 1 >= total ? 0 : currentIndex + 1;
            return {
                ...state,
                currentIndex: next,
            };
        }
        case 'SHOW_PREV': {
            const { currentIndex, total } = state;
            const prev = currentIndex === 0 ? total - 1 : currentIndex - 1;
            return {
                ...state,
                currentIndex: prev,
            };
        }
        case 'RESET': {
            return {
                ...state,
                currentIndex: 0,
            };
        }
        default: {
            throw new Error('Unsupported action type.');
        }
    }
}
