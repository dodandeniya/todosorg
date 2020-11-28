import React from 'react';
import { Container, Grid } from '@material-ui/core';

import './Footer.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Container>
      <Grid item xs={12} className="text-center py-3">
        Copyright &copy; My Todos App
      </Grid>
    </Container>
  );
}

export default Footer;
