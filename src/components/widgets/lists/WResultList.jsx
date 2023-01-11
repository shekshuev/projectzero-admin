import {
    Datagrid,
    TextField,
    DateField,
    List,
    DeleteWithConfirmButton,
    FunctionField,
    BooleanField,
    ReferenceField,
    TextInput,
    useListContext,
    ReferenceInput,
    AutocompleteInput
} from "react-admin";
import { Box, Card, CardContent, InputAdornment } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import UIDateTimeInput from "@components/ui/inputs/UIDateTimeInput";
import { debounce } from "lodash";
import { Numbers } from "@mui/icons-material";

const FilterContent = () => {
    const { filterValues, setFilters } = useListContext();

    const form = useForm({
        defaultValues: filterValues
    });

    const onDatePropertySelected = debounce((value, type) => {
        if (value instanceof Date && !isNaN(value)) {
            setFilters({ ...filterValues, [type]: value });
        } else {
            Reflect.deleteProperty(filterValues, type);
            setFilters(filterValues);
        }
    }, 300);

    const onPropertySelected = debounce((value, type) => {
        if (value) {
            setFilters({ ...filterValues, [type]: value });
        } else {
            Reflect.deleteProperty(filterValues, type);
            setFilters(filterValues);
        }
    }, 300);

    const onIdSelected = e => onPropertySelected(e.target.value, "id");
    const onSurveySelected = e => onPropertySelected(e, "surveyId");
    const onAccountSelected = e => onPropertySelected(e, "accountId");
    const onBeginDateSelected = e => onDatePropertySelected(e, "beginDate");
    const onEndDateSelected = e => onDatePropertySelected(e, "endDate");
    return (
        <FormProvider {...form}>
            <TextInput
                type="number"
                source="id"
                variant="outlined"
                onChange={onIdSelected}
                helperText={false}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Numbers />
                        </InputAdornment>
                    )
                }}
            />
            <ReferenceInput source="surveyId" reference="surveys">
                <AutocompleteInput
                    optionText="title"
                    variant="outlined"
                    required
                    onChange={onSurveySelected}
                    fullWidth
                    filterToQuery={searchText => ({ title: `${searchText}` })}
                    helperText={false}
                />
            </ReferenceInput>
            <ReferenceInput source="accountId" reference="accounts">
                <AutocompleteInput
                    optionText={account => `${account.firstName} ${account.lastName} (${account.userName})`}
                    variant="outlined"
                    required
                    onChange={onAccountSelected}
                    fullWidth
                    filterToQuery={searchText => ({ name: `${searchText}` })}
                    helperText={false}
                />
            </ReferenceInput>
            <UIDateTimeInput source="beginDate" variant="outlined" onChange={onBeginDateSelected} />
            <UIDateTimeInput source="endDate" variant="outlined" onChange={onEndDateSelected} />
        </FormProvider>
    );
};

const FilterSidebar = () => (
    <Box
        sx={{
            display: {
                xs: "none",
                sm: "block"
            },
            order: -1,
            marginRight: "1em",
            minWidth: "240px",
            width: "240px",
            marginTop: "4em"
        }}>
        <Card>
            <CardContent>
                <FilterContent />
            </CardContent>
        </Card>
    </Box>
);

const WResultsList = () => (
    <List exporter={false} aside={<FilterSidebar />}>
        <Datagrid
            sx={{
                "& .RaDatagrid-headerCell": {
                    fontWeight: "bold"
                }
            }}
            bulkActionButtons={false}
            rowClick="show">
            <TextField source="id" />
            <DateField source="beginDate" showTime />
            <DateField source="endDate" showTime />
            <BooleanField source="completed" />
            <FunctionField
                label="resources.results.fields.answers_count"
                render={record => record?.questions?.length || 0}
            />
            <ReferenceField label="resources.results.fields.survey" source="surveyId" reference="surveys" link="show">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField
                label="resources.results.fields.account"
                source="accountId"
                reference="accounts"
                link="show">
                <TextField source="userName" />
            </ReferenceField>
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export default WResultsList;
