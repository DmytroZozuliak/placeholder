import { Container, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { developer } from '../../../utils/constants/developer';
import styles from './style.module.scss';
import { Box } from '@mui/system';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Container
      maxWidth={false}
      component="footer"
      className="footer-container"
      sx={{ padding: '5px 0' }}
    >
      <Container maxWidth="xl">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: '100%' }}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, md: 2 }}
        >
          <Box className={styles.links_wrapper}>
            <a target="_blank" href={developer.github} className={styles.link} rel="noreferrer">
              <GitHubIcon
                sx={{
                  color: (theme) => theme.typography.body1.color,
                }}
                className={styles.git_logo}
              />
              <Typography fontSize={{ xs: 16, md: 18 }} lineHeight={{ xs: 1.2, md: 1.5 }}>
                {developer.name}
              </Typography>
            </a>
          </Box>
          <Typography fontSize={{ xs: 20, md: 30 }} fontWeight={600} color="inherit">
            {currentYear}
          </Typography>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
