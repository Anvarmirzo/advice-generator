import {IAdvice} from 'entities/advice';

export const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data: IAdvice = await response.json();

        return data;
    } catch (e) {
        console.log(e)
        return null;
    }

}
