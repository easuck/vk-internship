import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsers } from "../api/usersRequests";

const useData = () => {
    return useInfiniteQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        initialPageParam: 1,    
        getNextPageParam: (lastPage) => lastPage.next == null ? null : lastPage.next
    });
}

export default useData;