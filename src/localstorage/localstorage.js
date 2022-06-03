const getLSData = (valueLS) => {
    return JSON.parse(localStorage.getItem(valueLS));
}

const setLSData = (valueLS, data) => {
    localStorage.setItem(valueLS, JSON.stringify(data));
    return false;
}

export { getLSData, setLSData };