import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({

  '& .MuiTabs-indicator': {
    backgroundColor: '#06286E',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  marginTop: theme.spacing(3),
  color: 'rgba(0, 0, 0, 0.85)',

  '&:hover': {
    color: '#164EC0',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#06286E',
    fontWeight: 'bold',
  }
}));

export default function AllTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <AntTabs value={value} onChange={handleChange} centered>
          <AntTab label="Study" />
          <AntTab label="Quiz" />
          <AntTab label="Test" />
          <AntTab label="Game" />
          <AntTab label="Others" />
        </AntTabs>
      </Box>

    </Box>
  );
}