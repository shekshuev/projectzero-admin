import { Form, TextInput, SaveButton } from "react-admin";
import { Grid } from '@mui/material';
import UIDateTimeInput from "../../ui/inputs/UIDateTimeInput";

const WResearchEditable = () => (
    <Form>
        <Grid container columnSpacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={4}>
                <TextInput source="title"
                           variant="outlined"
                           required
                           fullWidth/>
            </Grid>
            <Grid item xs={12} md={4}>
                <UIDateTimeInput source="beginDate"
                                 variant="outlined"
                                 required
                                 fullWidth/>
            </Grid>
            <Grid item xs={12} md={4}>
                <UIDateTimeInput source="endDate"
                                 variant="outlined"
                                 required
                                 fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <TextInput source="description"
                           variant="outlined"
                           required
                           multiline
                           minRows={3}
                           fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <SaveButton />
            </Grid>
        </Grid>
    </Form>
);

export default WResearchEditable;