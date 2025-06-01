import './styles.scss';
import useData from "../../hooks/useData";
import { useEffect, useRef } from 'react';
import { ClipLoader } from 'react-spinners';

const Table = () => {
    const {data, hasNextPage, fetchNextPage, isFetching} = useData();
    const columns = data?.pages?.[0].data[0] ? Object.keys(data.pages[0].data[0]) : [];

    const loaderRef = useRef(null);

    useEffect(() => {
        if (!loaderRef.current || !hasNextPage || isFetching) return;

        const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
            fetchNextPage();
            }
        },
        { threshold: 1 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetching]);

    return(
        <>
            <table className="Table">
                <thead>
                    <tr>
                    {
                        columns.map(field => {
                            return <th key={field}>{field}</th>
                        })
                    }
                    </tr>
                </thead>
                <tbody className="Table_data">
                    {
                        data?.pages?.map(page => {
                            return page.data.map((item, index) => {
                                return(
                                    <tr key={index}>
                                    {
                                        Object.values(item).map(value => {
                                            return(
                                                <td key={value}>{value}</td>
                                            )
                                        })
                                    }
                                    </tr>
                                )
                            })
                        })
                    }
                </tbody>
            </table>
            <div ref={loaderRef}>
                {isFetching && <ClipLoader/>}
            </div>
        </>
    );
}

export default Table;