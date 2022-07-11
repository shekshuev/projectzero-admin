import { Form, TextInput, SelectInput, SaveButton, PasswordInput } from "react-admin";
import { Grid } from '@mui/material';


const PasswordValidate = values => {
    const errors = {};
    if (!values.userName) {
        errors.userName = "errors.required";
    }
    if (!values.password) {
        errors.password = "errors.required";
    }
    if (!values.confirmPassword ) {
        errors.confirmPassword = "errors.required" ;
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "errors.passwordMismatched" ;
    }
    return errors;
};

const WAccountEditable = () => (
    <Form validate={PasswordValidate}>
        <Grid container columnSpacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={6}>
                <TextInput source="userName"
                           variant="outlined"
                           required
                           fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <SelectInput source="role"
                             choices={[
                                 { id: "admin", name: "resources.accounts.roles.admin" },
                                 { id: "interviewer", name: "resources.accounts.roles.interviewer" },
                             ]}
                             required
                             variant="outlined"
                             fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <PasswordInput source="password"
                               variant="outlined"
                               required
                               fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <PasswordInput source="confirmPassword"
                               variant="outlined"
                               required
                               fullWidth/>
            </Grid>

            <Grid item xs={12} md={4}>
                <TextInput source="firstName"
                           variant="outlined"
                           fullWidth/>
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput source="middleName"
                           variant="outlined"
                           fullWidth/>
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput source="lastName"
                           variant="outlined"
                           fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <SaveButton />
            </Grid>
        </Grid>
    </Form>
);

export default WAccountEditable;