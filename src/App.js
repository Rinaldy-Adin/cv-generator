import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.secondary};
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <Main />
        </AppContainer>
    );
}

export default App;
