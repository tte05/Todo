import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './feature/todoList';
import themeReducer from './feature/themeList';

// Define RootState before store to avoid circular dependency issues
export type RootState = {
    todoList: ReturnType<typeof todoReducer>;
    themeList: ReturnType<typeof themeReducer>;
};

// Save state to localStorage
const saveToLocalStorage = (state: RootState) => {
    try {
        const appState = JSON.stringify(state);
        localStorage.setItem('appState', appState);
    } catch (e) {
        console.warn(e);
    }
};

// Load state from localStorage
const loadFromLocalStorage = (): RootState | undefined => {
    try {
        const appState = localStorage.getItem('appState');
        if (appState == null) return undefined; // Simplified null check
        return JSON.parse(appState) as RootState;
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};

// Configure the store
export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        themeList: themeReducer,
    },
    preloadedState: loadFromLocalStorage(),
});

// Subscribe to store changes to persist state
store.subscribe(() => saveToLocalStorage(store.getState()));

export type AppDispatch = typeof store.dispatch;