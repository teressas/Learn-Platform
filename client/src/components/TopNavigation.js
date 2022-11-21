import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import SearchGame from './SearchGame';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const TopNavigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        <ButtonGroup color="secondary" variant="text" aria-label="text button group">
                            <Button>Home</Button>
                            <Button>Games</Button>
                            <Button>About Us</Button>
                            <Button>Support/Forum</Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
                <Grid xs>
                    <SearchGame/>
                </Grid>
                <Grid xs>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button>Login</Button>
                            <Button>Register</Button>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
                                </IconButton>
                            </Tooltip>
                        </ButtonGroup>
                    </Box>
                    {/* https://mui.com/material-ui/react-menu/#AccountMenu.js */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopNavigation