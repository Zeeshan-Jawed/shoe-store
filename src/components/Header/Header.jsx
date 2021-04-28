
import './Header.style.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../images/logo.png";
import Button from '@material-ui/core/Button';
import { NavLink}  from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ListAltIcon from '@material-ui/icons/ListAlt';
const activeClassName = "active-nav";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom:50
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        flexGrow: 1,
    },
}));
const menuItems = [
    { icon: () => <HomeIcon />, name: "Home", link: "/" },
    { icon: () => <ListAltIcon />, name: "Products", link: "/products" },
    { icon: () => <InfoIcon />, name: "About", link: "/about" },
    { icon: () => <ContactMailIcon />, name: "Contact", link: "/contact" },
];

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar style={{ background: '#2E3B55' }}>
                <Toolbar>
                    
                    <div className={classes.logo}>
                    <img src={logo} className="logo" alt="Logo" />
          </div>
                    
                    {menuItems.map(({ name, link }, index) => {
                        return (
                            <NavLink key={index} to={link} exact
                            activeClassName={activeClassName} style={{ textDecoration: 'none' }}>
                                <Button className="btn" underline="none" >{name}</Button>
                            </NavLink>
                        );
                    })}
                
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;