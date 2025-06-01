import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './components/Table/Table';
import Form from './components/Form/Form';

function App() {
    const queryClient = new QueryClient();
    const fields = ['ID', 'Name', 'Surname', 'Email', 'Sex', 'Birthdate'];
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Form/>
                <Table 
                    fields={fields}
                />
            </div>
        </QueryClientProvider>
        
    );
}
export default App;