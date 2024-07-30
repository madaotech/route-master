import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowBack as ArrowLeftIcon } from '@mui/icons-material';

import { config } from '@/config';
import { paths } from '@/paths';
import { Link } from '@mui/material';

export const metadata = { title: `Not found | ${config.site.name}` };

export default function NotFound(): React.JSX.Element {
  return (
    <Box component="main" sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: '100%' }}>
      <Stack spacing={3} sx={{ alignItems: 'center', maxWidth: 'md' }}>
        <Box>
          <Box
            component="img"
            alt="Under development"
            src="/assets/error-404.png"
            sx={{ display: 'inline-block', height: 'auto', maxWidth: '100%', width: '400px' }}
          />
        </Box>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          404: The page you are looking for isn&apos;t here
        </Typography>
        <Typography color="text.secondary" variant="body1" sx={{ textAlign: 'center' }}>
          You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
        </Typography>
        <Button
          component={Link}
          href={paths.home}
          startIcon={<ArrowLeftIcon fontSize="medium" />}
          variant="contained"
        >
          Go back to home
        </Button>
      </Stack>
    </Box>
  );
}
