import { Form, TextInput, SelectInput, SaveButton, PasswordInput, required } from "react-admin";
import { Grid } from "@mui/material";

const passwordValidate = (isCreate, values) => {
    const errors = {};
    if (isCreate || values.password) {
        if (!values.userName) {
            errors.userName = "errors.required";
        }
        if (!values.password) {
            errors.password = "errors.required";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "errors.required";
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "errors.passwordMismatched";
        }
    }
    return errors;
};

const WAccountEditable = ({ isCreate = false }) => (
    <Form validate={values => passwordValidate(isCreate, values)}>
        <Grid container columnSpacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} md={6}>
                <TextInput source="userName" variant="outlined" validate={[required()]} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <SelectInput
                    source="role"
                    defaultValue="interviewer"
                    choices={[
                        { id: "interviewer", name: "resources.accounts.roles.interviewer" },
                        { id: "admin", name: "resources.accounts.roles.admin" }
                    ]}
                    validate={[required()]}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <PasswordInput source="password" variant="outlined" validate={isCreate ? [required()] : []} fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <PasswordInput
                    source="confirmPassword"
                    variant="outlined"
                    validate={isCreate ? [required()] : []}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextInput source="firstName" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextInput source="lastName" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <SaveButton />
            </Grid>
        </Grid>
    </Form>
);

export default WAccountEditable;
