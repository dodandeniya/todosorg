import React from 'react';
import './Loader.css';
import { Grid, CircularProgress } from '@material-ui/core';
import CenterComponent from '../center-component/CenterComponent';

/* eslint-disable-next-line */
export interface LoaderProps {
  height?: String;
}

export const Loader = (props: LoaderProps) => {
  return (
    <CenterComponent height={props.height}>
      <CircularProgress />
    </CenterComponent>
  );
};

export default Loader;
