import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import Icon1 from '../images/Asset 1.svg'
import '../App.css'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <div className='iconButtons'>
      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Button variant='fab' mini color='secondary' aria-label='add' className={classes.button} >
          <AddIcon />
      </Button>
      <IconButton variant='fab' mini color='primary' aria-label='add' className={classes.button} >
          <img src={Icon1} alt='' style={{width: '44px'}} />
      </IconButton>
    </div>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);
