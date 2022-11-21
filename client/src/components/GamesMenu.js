import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopNavigation from './TopNavigation';
import FeaturedContent from './FeaturedContent';
import GameCards from './GameCards';
import GradeDropdown from './GradeDropdown';
import SubjectDropdown from './SubjectDropdown';


const GamesMenu = (props) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh' }}>
                    <TopNavigation />
                    <br />
                    {/* <FeaturedContent /> */}
                    <form>
                        <GradeDropdown />
                        <SubjectDropdown />
                        <button>Submit</button>
                    </form>
                    <br />
                    <GameCards />
                </Box >
            </Container>
        </React.Fragment>
        
    )
}

export default GamesMenu