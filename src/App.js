
import './App.css';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer/Footer';
import AppRouter from './Router/Router'
function App() {
  return (
    <div >
      
      <Container maxWidth="xl" className="wrapper">
        
       <AppRouter />
        
      </Container>
      <Footer />
    </div>
  );
}

export default App;
