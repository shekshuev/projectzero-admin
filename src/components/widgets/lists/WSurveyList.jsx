import {
    Datagrid,
    TextField,
    DateField,
    List,
    DeleteWithConfirmButton,
    EditButton,
    NumberField,
    FilterLiveSearch,
    useTranslate,
    FunctionField,
    useDataProvider
} from "react-admin";
import { Card, CardContent, Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import { jsonToFile } from "utils/utils";
import * as moment from "moment";

const SurveySidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
        <CardContent>
            <FilterLiveSearch type="number" source="id" variant="outlined" label="resources.surveys.fields.id" />
            <FilterLiveSearch source="title" variant="outlined" label="resources.surveys.fields.title" />
            <FilterLiveSearch source="description" variant="outlined" label="resources.surveys.fields.description" />
        </CardContent>
    </Card>
);

const WSurveyList = () => {
    const translate = useTranslate();
    const provider = useDataProvider();

    const onExportClick = async (e, { id }) => {
        e.stopPropagation();
        const json = await provider.export("surveys", id);
        jsonToFile(json, `export-${moment().format("DD-MM-YYYY-HH-mm-ss")}.json`);
    };

    return (
        <List exporter={false} aside={<SurveySidebar />}>
            <Datagrid
                sx={{
                    "& .RaDatagrid-headerCell": {
                        fontWeight: "bold"
                    }
                }}
                bulkActionButtons={false}
                rowClick="show">
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="beginDate" />
                <DateField source="endDate" />
                <NumberField source="formsCount" />
                <FunctionField
                    render={record => (
                        <Button onClick={e => onExportClick(e, record)} startIcon={<Download />}>
                            {translate("ra.action.export")}
                        </Button>
                    )}
                />
                <EditButton />
                <DeleteWithConfirmButton />
            </Datagrid>
        </List>
    );
};

export default WSurveyList;
