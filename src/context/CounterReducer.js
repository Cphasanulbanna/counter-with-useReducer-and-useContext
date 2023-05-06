export const reducer = (count, action) => {
    switch (action.type) {
        case "INCREMENT":
            if (count < 10) {
                return count + 1;
            }
            return count;
        case "DECREMENT":
            if (count > 0) {
                return count - 1;
            }
            return count;
        default:
            return count;
    }
};
