import React from 'react'

const useInverval = (callback, delay) => {


    useEffect(() => {
        const unsubscribe = setInterval(callback, delay);
        return () => clearInterval(unsubscribe);
    }, [delay])

    return (

    )
}

export default useInverval
