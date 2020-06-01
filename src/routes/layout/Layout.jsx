import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { MenuAppBar } from './MenuAppBar';
import { Footer } from './Footer';
import { ScrollTop } from './ScrollTop';
import { HideOnScroll } from './HideOnScroll';
import { useSelector } from 'react-redux';

import { Main } from './styles';
import { BooksLayout } from '../Books';

const Layout = (props) => {
  const { isLogged } = useSelector((state) => state.auth);
  const { children, ...restProps } = props;

  return (
    <>
      {isLogged ? (
        <div>
          <HideOnScroll {...restProps}>
            <MenuAppBar />
          </HideOnScroll>
          <div id="back-to-top-anchor" />
          <Main>
            <Container>
              <Box my={2}>{children}</Box>
              <BooksLayout />
            </Container>
          </Main>
          <Footer />
          <ScrollTop {...restProps}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </div>
      ) : (
        <h1>isLoggin need</h1>
      )}
    </>
  );
};

export { Layout };
