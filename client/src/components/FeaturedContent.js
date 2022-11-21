import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const FeaturedContent = () => {
    const item = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        }
    ]

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 10,
                    width: 900,
                    height: 228,
                },
            }}
        >
            <Paper elevation={3}>

                <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
            </Paper>
        </Box>
    )
}

export default FeaturedContent