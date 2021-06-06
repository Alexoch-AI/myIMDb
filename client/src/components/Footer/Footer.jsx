import {
  Box, Link,
} from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import TelegramIcon from '@material-ui/icons/Telegram'
import useStyles from './useStyles'
import './footer.css'

function Footer() {
  const classes = useStyles()

  return (
    <footer>
      <Box height="50px" width="100%" className="footer">
        <Box className={classes.boxCenter}>
          <Link className={classes.linkToButton} href="https://github.com/Alexoch-AI"><GitHubIcon /></Link>
          <Link className={classes.linkToButton} href="https://t.me/alexdegreen"><TelegramIcon /></Link>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
