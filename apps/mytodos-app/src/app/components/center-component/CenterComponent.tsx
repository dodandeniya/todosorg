import React from 'react';
import { Grid } from '@material-ui/core';
import './CenterComponent.css';

/* eslint-disable-next-line */
export interface CenterComponentProps {
  height?: String;
  children: any;
}

export const CenterComponent = (props: CenterComponentProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: `${props.height ? props.height : '100vh'}` }}
    >
      <Grid item xs={12} sm={12}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default CenterComponent;
