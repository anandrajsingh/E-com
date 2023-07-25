import { Grid, List, ListItem, ListItemText, ListSubheader, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'


export default function Footer() {
  const theme = useTheme();
  return (
    <Toolbar sx={{ bgcolor: theme.palette.grey[900], color: theme.palette.common.white, py: theme.spacing(3),
      display: "flex", flexDirection: "column", mt: "200px" }}>
      <Grid container spacing={2} sx={{ mx:theme.spacing(5),  pb: theme.spacing(3), borderBottom: `1px solid ${theme.palette.grey[700]}`}}>
        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListSubheader component="p" sx={{ textTransform : "uppercase", color: theme.palette.grey[400], bgcolor: theme.palette.grey[900]}}>
              About
            </ListSubheader>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Contact Us</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>About Us</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Careers</ListItemText>
            </ListItem>
          </List>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListSubheader component="p" sx={{textTransform: "uppercase", color : theme.palette.grey[400], bgcolor : theme.palette.grey[900]}}>
              Help
            </ListSubheader>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Payments</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Shipping</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Cancellation & Returns</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>FAQ</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListSubheader component="p" sx={{textTransform: "uppercase", color : theme.palette.grey[400], bgcolor : theme.palette.grey[900]}}>
              Social
            </ListSubheader>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Facebook</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Twitter</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Youtube</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Instagram</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListSubheader component="p" sx={{textTransform: "uppercase", color : theme.palette.grey[400], bgcolor : theme.palette.grey[900]}}>
              Registered Office Address
            </ListSubheader>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography sx={{mt: theme.spacing(2)}}>©️2023 Ecom.com</Typography>
    </Toolbar>
  )
}
