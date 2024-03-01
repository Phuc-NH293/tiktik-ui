/* eslint-disable no-unused-vars */
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
