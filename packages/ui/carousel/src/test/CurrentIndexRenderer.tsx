import React from 'react';
import { useCurrentIndex } from '../state/Context';

export function CurrentIndexRenderer() {
    const currentIndex = useCurrentIndex();

    return <span>{`Current index: ${currentIndex}`}</span>;
}
