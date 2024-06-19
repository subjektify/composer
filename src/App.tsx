import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import './App.css'

function App() {

  return (
    <div className="landing-page">
        <Segment vertical textAlign="center">
            <Container>
                <Header as="h1" icon>
                    <Icon name="paint brush" circular />
                    <Header.Content>Coming soon...</Header.Content>
                </Header>
                <Header as="h2">
                    The Subject Composer is on its way. Stay tuned for something amazing.
                </Header>
            </Container>
        </Segment>
    </div>
  )
}

export default App;
