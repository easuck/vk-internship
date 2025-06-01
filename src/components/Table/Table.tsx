import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {getUsers} from "../../api/usersRequests";
import './styles.scss';
import axios from "axios";

type Props = {
    fields: string[];   
}

const Table = ({fields}: Props) => {
    const {data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: async ({ pageParam = 1 }) => {
            const res = await axios.get(`http://localhost:3000/users`, {
              params: {
                _page: pageParam,
                _per_page: 25,
            }});
            console.log(res.data.data);
            return {
                data: res.data.data,
                next: pageParam + 1,
              };
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next
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