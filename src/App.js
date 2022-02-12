import './App.css';
import Typography from '@mui/material/Typography';
import Campaigns from './components/Campaigns'

function App() {



  return (
    <div className = "container">
      <Typography className = "campaignSelection" variant = "h2" align = "center">
        Select your campaign type.
      </Typography>
      <Campaigns>
          
      </Campaigns>
    </div>
  );
}

export default App;
