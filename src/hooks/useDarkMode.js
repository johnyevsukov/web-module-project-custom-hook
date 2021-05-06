import React from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('dark', initialValue)

    return [someValue, setSomeValue]
}