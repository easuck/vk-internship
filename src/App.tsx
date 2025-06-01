import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './components/Table/Table';
import Form from './components/Form/Form';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Form/>
                <Table/>
            </div>
        </QueryClientProvider>
        
    );
}
export default App;