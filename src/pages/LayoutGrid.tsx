import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LayoutGrid = (props: any) => { 

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item >Item 1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Item 2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Item 3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Item 4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LayoutGrid;