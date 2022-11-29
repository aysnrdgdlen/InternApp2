import InternList from "./components/InternList"
import Internform from "./components/Internform"
import Navbar from "./components/Navbar"
import InternContextProvider from "./contexts/Interncontext"
import 'semantic-ui-css/semantic.min.css'
import { Header, Grid, Container, Segment, Divider} from 'semantic-ui-react'


function App() {


  
  return (
    
    <Container>
      <InternContextProvider>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <Header as='h1' textAlign='center'>Intern App</Header>
        <Segment inverted>
          <Grid columns={2} padded='vertically'>

            <Grid.Column floated='left' width={7}>
              <br></br>
              <h2>Add New Intern</h2>
              <br></br>
              <Internform />
            </Grid.Column>

            <Grid.Column floated='right' width={8}>
              <br></br>
              <h2>Interns</h2>
              <br></br>

              <InternList />

            </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
      </InternContextProvider>
      
    </Container>
    
    


  );
}

export default App;

