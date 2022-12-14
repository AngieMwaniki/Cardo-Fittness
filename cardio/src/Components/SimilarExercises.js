import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
const SimilarExercises = ({recomendedTargetMuscle,recomendedTargetEquipments}) => {
  console.log(recomendedTargetMuscle);
  console.log(recomendedTargetEquipments);
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
 <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#65E7DE', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {recomendedTargetMuscle.length !== 0 ? <HorizontalScrollBar data={recomendedTargetMuscle} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#65E7DE', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {recomendedTargetEquipments.length !== 0 ? <HorizontalScrollBar data={recomendedTargetEquipments} /> : <Loader />}
    </Stack>
    
    
    </Box>
  )
}

export default SimilarExercises