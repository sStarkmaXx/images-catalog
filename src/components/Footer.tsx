import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '50px',
        backgroundColor: '#455a64',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Create by: Max Myasnikov, mail: zravenz.xmax@gmail.com
    </Box>
  );
};
export default Footer;
