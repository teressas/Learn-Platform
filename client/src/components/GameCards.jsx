import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        description: 'anscjaneklnlka',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        description: 'anscjaneklnlka',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        description: 'anscjaneklnlka',
    },

];
const GameCards = (props) => {

    const { loading = false } = props;

    return (
        <>

            <Grid container wrap="nowrap">
                {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                    <Box key={index} sx={{ width: 330, paddingLeft: 6.5, marginRight: 0.5, my: 5 }}>
                        {item ? (
                            <img
                                style={{ width: 330, height: 218 }}
                                alt={item.title}
                                src={item.src}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={330} height={218} />
                        )}

                        {item ? (
                            <Box sx={{ pr: 2 }}>
                                <Typography gutterBottom variant="body2">
                                    {item.title}
                                </Typography>
                                <Typography display="block" variant="caption" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        )}
                    </Box>
                ))}

            </Grid>
            <Grid container wrap="nowrap">
                {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                    <Box key={index} sx={{ width: 330, paddingLeft: 6.5, marginRight: 0.5, my: 5 }}>
                        {item ? (
                            <img
                                style={{ width: 330, height: 218 }}
                                alt={item.title}
                                src={item.src}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={330} height={218} />
                        )}

                        {item ? (
                            <Box sx={{ pr: 2 }}>
                                <Typography gutterBottom variant="body2">
                                    {item.title}
                                </Typography>
                                <Typography display="block" variant="caption" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        )}
                    </Box>
                ))}

            </Grid>
        </>
    );
}

export default GameCards 