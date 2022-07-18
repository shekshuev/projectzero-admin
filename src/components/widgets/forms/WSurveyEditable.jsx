import { Form, TextInput, SaveButton } from "react-admin";
import { Grid } from '@mui/material';
import UIDateTimeInput from "../../ui/inputs/UIDateTimeInput";
import UIMapInput from "../../ui/inputs/UIMapInput";

const WSurveyEditable = () => (
    <Form>
        <Grid container columnSpacing={2} sx={{ p: 2 }}>
            <Grid item xs={12}>
                <UIMapInput width="100%" height="400px"/>
            </Grid>
        </Grid>
    </Form>
);

export default WSurveyEditable;