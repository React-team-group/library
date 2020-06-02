import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';

export const RenderMobileMenu = () => {
  const mobileMenuId = 'primary-search-account-menu-mobile';
  return (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem>
        <IconButton aria-label={`${4} items in the shopping cart`} color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label={`${4} items in favorite`} color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favorite</p>
      </MenuItem>
    </Menu>
  );
};
