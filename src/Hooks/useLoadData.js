import { useEffect, useState } from "react";

export const useLoadData = (dataURL) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(dataURL)
            .then(response => response.json())
            .then(data => setData(data))
    }, [dataURL]);
    return [data, setData];
};