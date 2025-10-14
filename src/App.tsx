import './App.css'
import { Grid } from '@mui/material'
import { PageHeader } from './header'
import { ActionBar } from './action-bar'
import { ActiveScreen } from './active-screen'

function App() {
  return (
    <Grid container sx={{ height: '100vh', width: '100vw' }}>
      {/* Header */}
      <Grid size={12} sx={{ height: '10%', backgroundColor: '#1976d2' }}>
        <PageHeader />
      </Grid>
      {/* Sidebar and Main Content */}
      <Grid container size={12} sx={{ height: 'calc(100vh - 10%)' }}>
        <Grid size={3} sx={{ height: '100%', backgroundColor: '#43a047' }}>
          <ActionBar />
        </Grid>
        <Grid size={9} sx={{ height: '100%', backgroundColor: '#fbc02d' }}>
          <ActiveScreen />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
