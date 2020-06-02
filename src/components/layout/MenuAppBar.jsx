import React from 'react';
import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Search } from './Search';
import { RenderMobileMenu } from '../../components/renderMobileMenu/RenderMobileMenu';

import { stylesHeader } from './styles';

export const MenuAppBar = React.forwardRef((props, ref) => {
  const { isLogged, auth } = props;
  const classes = stylesHeader();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();
  const handleLogout = () => {
    auth(false);
    history.push('/login');
    // setAnchorEl(null);
  };
  const handleToBuyBooks = () => {
    history.push('/cart');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = <Menu id={menuId}>Logout</Menu>;

  return (
    <>
      <AppBar position="sticky" ref={ref} className={classes.grow}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Books
          </Typography>
          <Search />
          {isLogged && (
            <>
              <div className={classes.sectionDesktop}>
                <IconButton aria-label={`${4} items in the shopping cart`} color="inherit" onClick={handleToBuyBooks}>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>

                <IconButton aria-label={`${4} items in favorite`} color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>

                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleLogout}
                  color="inherit"
                >
                  Logout
                </IconButton>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      {RenderMobileMenu} {renderMenu}
    </>
  );
});
