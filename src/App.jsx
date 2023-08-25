import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import ReactQuery from './components/react-query'
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container flex flex-col gap-3 py-44 px-60'>
        <section>Test de react-query</section>
        <ReactQuery />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
