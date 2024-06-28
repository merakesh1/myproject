const reducer = (state, action) => {
    if (action.type === 'increment') {
        return { count: state.count + 1 };
    }
    else if (action.type === 'decrement') {
        return { count: state.count - 1 };
    }
    else if (action.type === 'reset') {
        return { count: 0 };
    }
    return state;
}

export { reducer };



