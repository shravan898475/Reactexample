import React from "react";
import useAxios from "../hooks/useAxios";
import { FixedSizeList as List } from "react-window";

export default function CustomHookAxios() {
    const [data, isLoading, error] = useAxios('https://jsonplaceholder.typicode.com/todos');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || data.length === 0) return <div>No data available</div>;

    const Row = ({ index, style }) => (
        <div style={style} key={data[index].id}>
            {data[index].title}
        </div>
    );

    return (
        <div style={{ height: 400, width: '100%' }}>
            <List
                height={400}
                itemCount={data.length}
                itemSize={35}
                width={'100%'}
            >
                {Row}
            </List>
        </div>
    );
}
