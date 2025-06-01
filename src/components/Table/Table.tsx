import './styles.scss';
import useData from "../../hooks/useData";

const Table = () => {
    const {data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage} = useData();
    const columns = data?.pages?.[0].data[0] ? Object.keys(data.pages[0].data[0]) : [];

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
         <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
        >
            {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
        </button>
        </>
    );
}

export default Table;