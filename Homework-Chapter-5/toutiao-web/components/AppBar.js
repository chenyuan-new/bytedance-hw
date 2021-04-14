import {
  makeStyles,
  IconButton,
  AppBar as AppBarMui,
  Toolbar,
  InputBase,
  fade,
} from '@material-ui/core';
import { Search as SearchIcon, MailOutline } from '@material-ui/icons';

const useButtonStyles = makeStyles((theme) => {
  return {
    root: {
      color: theme.palette.common.white,
    },
  };
});

const useWrapperStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    padding: 0,
  },
  motto: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
      fontSize: '1.4rem',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    transition: 'background-color linear 0.2s',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export function AppBar() {
  const buttonStyles = useButtonStyles();
  const classes = useWrapperStyles();
  return (
    <AppBarMui position="fixed" variant="outlined" style={{background:"red"}}>
      <Toolbar variant="dense" className={classes.toolbar} >
        <IconButton classes={buttonStyles}>
          <MailOutline />
        </IconButton>
        <div className={classes.motto}>
            今日头条
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </Toolbar>
    </AppBarMui>
  );
}
