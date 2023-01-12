import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos} from './';


// feed will consist of side bar and then video feed on the right
const Feed = () => {
  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row'}}}
    >
      {/* it will be a column by default, but if it is a medium sized device or larger than it will be row view*/}
      <Box
        sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}}}
      >
        <Sidebar/>
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2022 JDTube
        </Typography>
      </Box>

      <Box 
        p={2}
        sx={{ overflowY: 'auto', height: '90vh', flex: 2}}
      >
        <Typography 
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: 'white'
          }}
        >
          Category <span 
            style={{ color: '#F31503' }}
          >
            videos
          </span>
        </Typography>
        <Videos
          videos={[]}
        />
      </Box>

    </Stack>
  )
}

export default Feed