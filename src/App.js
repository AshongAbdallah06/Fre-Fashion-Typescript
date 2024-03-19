import './App.css';
import Generate from './Generate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

export const AppContext = createContext(); 

function App() {

    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });

    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <AppContext.Provider>
                    <Router>
                        <Link to={'/'}>Home</Link> &nbsp;
                        <Link to={'/generate'}>Generate</Link>
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='/generate' element={<Generate />}/>
                        </Routes>
                    </Router>
                </AppContext.Provider>
            </QueryClientProvider>
        </div>
    );
}

export default App;
