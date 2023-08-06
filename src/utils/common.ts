export const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))
