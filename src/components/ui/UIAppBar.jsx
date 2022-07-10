import { LocalesMenuButton, AppBar } from 'react-admin';
import { Typography } from '@mui/material';

export const UIAppBar = (props) => (
    <AppBar {...props}>
        <Typography flex="1" variant="h6" id="react-admin-title" />
        <LocalesMenuButton languages={[
            { locale: 'en', name: 'English' },
            { locale: 'ru', name: 'Русский' },
        ]}/>
    </AppBar>
);