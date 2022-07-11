import { Show, TextField, SimpleShowLayout } from "react-admin";

const WAccountShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id"
                       fullWidth/>
            <TextField source="userName"
                       fullWidth/>
            <TextField source="firstName"
                       fullWidth/>
            <TextField source="middleName"
                       fullWidth/>
            <TextField source="lastName"
                       fullWidth/>
            <TextField source="role"
                       fullWidth/>
        </SimpleShowLayout>
    </Show>
);

export default WAccountShow;