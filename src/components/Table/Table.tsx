import { useInfiniteQuery } from "@tanstack/react-query";
import {getUsers} from "../../api/usersRequests";
import './styles.scss';

type Props = {
    fields: string[];   
}

const Table = ({fields}: Props) => {
    const {data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        initialPageParam: 1,    
        getNextPageParam: (lastPage) => lastPage.next == null ? null : lastPage.next
    });
    return(
        <>
        <table className="Table">
            <thead>
                <tr>
                {
                    fields.map(field => {
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