import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import TransactionList from './components/TransactionList'
import AddTranscation from './components/AddTranscation'
import { GlobalProvider } from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <TransactionList/>
        <AddTranscation/>
      </div>
    </GlobalProvider>
  )
}

export default App
