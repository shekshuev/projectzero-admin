import { Edit } from "react-admin";
import WSurveyEditable from "./WSurveyEditable";

const WSurveyEdit = () => (
    <Edit mutationMode="pessimistic">
        <WSurveyEditable />
    </Edit>
);

export default WSurveyEdit;
