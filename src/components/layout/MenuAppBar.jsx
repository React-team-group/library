import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase'; //? floating styles
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { stylesHeader } from './styles';

import { Search } from './Search';
import { useHistory } from 'react-router-dom';
import { auth } from '../../redux/login/actions';
import { RenderMobileMenu } from '../../components/renderMobileMenu/RenderMobileMenu';

export const MenuAppBar = React.forwardRef((props, ref) => {
  const { isLog, auth } = props;
  const classes = stylesHeader();
  const [anchorEl, setAnchorEl] = React.useState(null);

  let history = useHistory();
  const handleLogout = () => {
    auth(false);
    history.push('/login');
    setAnchorEl(null);
  };
  const handleToBuyBooks = () => {
    history.push('/cart');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = <Menu id={menuId}>Logout</Menu>;
  const mobileMenuId = 'primary-search-account-menu-mobile';

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
          {isLog && (
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
