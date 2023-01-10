import { Create } from "react-admin";
import WAccountEditable from "@components/widgets/forms/WAccountEditable";

const WAccountCreate = () => (
    <Create>
        <WAccountEditable isCreate />
    </Create>
);

export default WAccountCreate;
