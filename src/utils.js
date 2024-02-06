export const getRandomElements = (list, count) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
export const getRandomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
