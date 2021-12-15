import logo from './logo.svg';
import './App.css';
import { Card, Carousel, Container } from 'react-bootstrap'

function App() {
  return (
    // Add any styling you want
    <div className="App">

      

      <Card border="primary">
        <Card.Body>
          <div>
            SOCRATES
          </div>
          <div>
              <hr size="8" width="90%" color="lightBlue" />
              <h1 style={{ textAlign:"center" , paddingTop:"0.5em"}}>Add content</h1>
              <hr size="8" width="90%" color="lightBlue" />

              <hr size="8" width="90%" color="lightBlue" />
              <h1 style={{ textAlign:"center" , paddingTop:"0.5em"}}>Add content</h1>
              <hr size="8" width="90%" color="lightBlue" />

              
          </div>
        </Card.Body>
      </Card>

    </div>

  );
}

export default App;
