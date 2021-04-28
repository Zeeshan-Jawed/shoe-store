import './Footer.style.css'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const Footer = () => {
    return (
        <div className="container">
            <p>Made By Zeeshan Jawed| Copyright © 2021</p>
            <ul>
                <li>
                <Tooltip title="jawedzeeshan1@gmail.com">
                <a href="mailto:jawedzeeshan1@gmail.com" target="_blank" rel="noreferrer">
                <IconButton aria-label="email"  >
                    <EmailIcon />
                </IconButton>
                </a>
            </Tooltip>
                </li>
                <li>
                <Tooltip title="GitHub">
                <a href="https://github.com/Zeeshan-Jawed" target="_blank" rel="noreferrer">
                <IconButton aria-label="GitHub" >
                    <GitHubIcon  />
                </IconButton>
                </a>
            </Tooltip>         
                </li>
                <li>
                <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/zeeshan-jawed/" target="_blank" rel="noreferrer">
                <IconButton aria-label="LinkedInIcon" color="primary">
                    <LinkedInIcon />
                </IconButton>
                </a>
            </Tooltip>
                </li>
            </ul>
        </div>
    )
}
export default Footer