import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Loginform from './Loginform';
import Signup from './Signup';

const Signinout = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper  className='tabstyle'>
    <Grow in={true}>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Sign In" />
      <Tab label="Sign Up" />
    </Tabs>
    </Grow>
    <TabPanel value={value} index={0}>
  <Loginform handleChange={handleChange}/>
</TabPanel>
 <TabPanel value={value} index={1}>
  <Signup handleChange={handleChange}/>
</TabPanel>
</Paper>

  );
}

export default Signinout