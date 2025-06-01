import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import './App.scss';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div className='App'>
                <Form/>
                <Table/>
            </div>
        </QueryClientProvider>
        
    );
}
export default App;