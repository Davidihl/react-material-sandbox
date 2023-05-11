import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {
  AppBar,
  Box,
  Button,
  Container,
  Icon,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Icon>
            <PeopleAltIcon sx={{ paddingRight: '8px' }} />
          </Icon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guest list
          </Typography>
          <Button color="inherit">Clear all</Button>
        </Toolbar>
      </AppBar>
      <LinearProgress color="secondary" />
      <Container maxWidth="md">
        <Paper position="static" sx={{ marginTop: '24px', padding: '24px' }}>
          <TextField
            sx={{ flexGrow: 1 }}
            id="filled-basic"
            label="Filled"
            variant="filled"
            fullWidth
          />
          <TextField
            sx={{ flexGrow: 1 }}
            id="filled-basic"
            label="Filled"
            variant="filled"
            fullWidth
          />
        </Paper>
        <Paper position="static" sx={{ marginTop: '16px' }}>
          Test
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
