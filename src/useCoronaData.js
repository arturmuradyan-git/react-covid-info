import { useEffect, useState } from 'react';
export default function (title) {
    const [data, setData] = useState();
    useEffect(() => {
        if (title.length === 2) {
            const handle = setTimeout(() => {
                fetch(`https://corona-api.com/countries/${title}`)
                    .then(stream => stream.json())
                    .then(results => setData(results.data))
            }, 1000);
            return () => {
                clearTimeout(handle)
            }
        }
    }, [title]);

    return data
}