import { useQuery } from "@tanstack/react-query";
import {getUsers} from "../../api/usersRequests";
import './styles.scss';

type Props = {
    fields: string[];   
}

const Table = ({fields}: Props) => {
    const {data} = useQuery({queryKey: ['users'], queryFn: getUsers})
    return(
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
                    data?.map(row => {
                        return(
                            <tr key={row.id}>
                                {
                                    Object.values(row).map(value => {
                                        return(
                                            <td key={value}>{value}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;