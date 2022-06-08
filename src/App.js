import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Ticket from './pages/TicketPage'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='/ticket/:id' element={<Ticket editMode={true}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=DDh2GoiCrCk
// 1:46:51