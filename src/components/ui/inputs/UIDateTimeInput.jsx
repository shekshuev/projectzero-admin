import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useInput, useTranslate, useResourceContext, useLocaleState } from "react-admin";
import ru from "date-fns/locale/ru";
import en from "date-fns/locale/en-US";

const translations = { ru, en };

const UIDateTimeInput = props => {
    const { onChange, onBlur, ...rest } = props;
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted },
        isRequired
    } = useInput({
        onChange,
        onBlur,
        ...props
    });
    const [locale] = useLocaleState();
    const resource = useResourceContext();
    const translate = useTranslate();
    const i18nRoute = `resources.${resource}.fields.${field.name}`;
    let label = translate(i18nRoute);
    label = label === i18nRoute ? field.name : label;
    label = props.label ? props.label : label;
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={translations[locale]}>
            <DateTimePicker
                {...field}
                label={label}
                value={field.value ?? null}
                renderInput={props => (
                    <TextField
                        helperText={(isTouched || isSubmitted) && invalid ? error : ""}
                        required={isRequired}
                        {...rest}
                        {...props}
                        error={(isTouched || isSubmitted) && invalid}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default UIDateTimeInput;
