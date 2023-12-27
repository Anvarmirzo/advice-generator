import {AdviceCard} from 'features/home';
import {useCallback, useEffect, useState} from 'react';
import {getAdvice, IAdvice} from 'entities/advice';

export const AdviceCardWidget = () => {
    const [{data, isLoading}, setQuery] = useState<{ isLoading: boolean, data: IAdvice | null }>({
        isLoading: true,
        data: null
    });

    const fetchData = useCallback(() => {
        (async () => {
            const advice = await getAdvice();
            setQuery({data: advice, isLoading: false});
        })()
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <AdviceCard data={data} isLoading={isLoading} onClick={fetchData}/>
    );
};