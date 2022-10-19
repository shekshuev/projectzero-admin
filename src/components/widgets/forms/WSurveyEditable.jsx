import { Form, TextInput, SaveButton, DateTime } from "react-admin";
import { Grid } from '@mui/material';
import UIDateTimeInput from "../../ui/inputs/UIDateTimeInput";
import UIMapInput from "../../ui/inputs/UIMapInput";

const WSurveyEditable = () => (
    <Form>
        <Grid container columnSpacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={12}>
                <TextInput
                    source="title"
                    variant="outlined"
                    required
                    fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
                <UIDateTimeInput
                    source="beginDate"
                    required
                    fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <UIDateTimeInput
                    source="endDate"
                    required
                    fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextInput
                    id="outlined-multiline-static"
                    source="description"
                    variant="outlined"
                    multiline
                    rows={5}
                    defaultValue=""
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={12}>
                <UIMapInput width="100%" height="400px" />
            </Grid>

            <Grid item xs={12} marginTop={5}>
                <SaveButton />
            </Grid>
        </Grid>
    </Form>
);

export default WSurveyEditable;