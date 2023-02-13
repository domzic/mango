import React from 'react';
import { CarouselAction, carouselReducer } from './reducer';

export interface ContextState {
    currentIndex: number;
    total: number;
}

interface ContextValue {
    state: ContextState;
    dispatch: React.Dispatch<CarouselAction>;
}

const CarouselContext = React.createContext<ContextValue | undefined>(
    undefined
);

export interface CarouselProviderProps {
    children: React.ReactNode | React.ReactNode[];
    initialState?: ContextState;
}
export function CarouselProvider({
    initialState,
    children,
}: CarouselProviderProps) {
    const [state, dispatch] = React.useReducer(
        carouselReducer,
        initialState || { currentIndex: 0, total: 0 }
    );
    return (
        <CarouselContext.Provider value={{ state, dispatch }}>
            {children}
        </CarouselContext.Provider>
    );
}

export function useCurrentIndex() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error('useCarousel must be used within CarouselProvider.');
    }

    return context.state.currentIndex;
}

export function useTotal() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error('useCarousel must be used within CarouselProvider.');
    }

    return context.state.total;
}

export function useCarouselDispatch() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error('useCarousel must be used within CarouselProvider.');
    }

    return context.dispatch;
}
