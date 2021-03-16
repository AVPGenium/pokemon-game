import {useState} from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

function App() {
    const [page, setPage] = useState('app');
    const handleChangePage = (goToPage) => {
        setPage(goToPage);
    }
    switch (page) {
        case 'app':
            return <HomePage onChangePage={handleChangePage}/>
        case 'game':
            return <GamePage onChangePage={handleChangePage}/>
        default:
            return <HomePage/>
    }
}

export default App;
