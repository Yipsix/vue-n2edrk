export function stringToDate(input: string) {
    const dateArray = input.split('/');
    return new Date(Number(dateArray[2]), Number(dateArray[1]), Number(dateArray[0]))

}