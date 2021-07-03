import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Wrapper from './components/wrapper/wrapper';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header>
          <Main />
        </Header>
      </Wrapper>
    </div>
  );
}

export default App;
