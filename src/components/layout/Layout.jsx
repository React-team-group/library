import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { MenuAppBar } from './MenuAppBar';
import { Footer } from './Footer';
import { ScrollTop } from './ScrollTop';
import { HideOnScroll } from './HideOnScroll';

import { Main } from './styles';

const Layout = (props) => {
  const { children, isLogged, ...restProps } = props;
  return (
    <>
      <HideOnScroll {...restProps}>
        <MenuAppBar />
      </HideOnScroll>
      <div id="back-to-top-anchor" />

      <Main>
        <Container>
          <Box my={2}>{children}</Box>
        </Container>
      </Main>

      <Footer />
      <ScrollTop {...restProps}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export { Layout };
