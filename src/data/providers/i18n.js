import polyglotI18nProvider from "ra-i18n-polyglot";
import raRU from "ra-language-russian";
import raEN from "ra-language-english";

const en = {
    ...raEN,
    resources: {
        accounts: {
            name: "Account |||| Accounts",
            fields: {
                id: "ID",
                userName: "User name",
                password: "Password",
                confirmPassword: "Confirm password",
                firstName: "First name",
                middleName: "Middle name",
                lastName: "Last name",
                role: "Role"
            },
            roles: {
                interviewer: "Interviewer",
                admin: "Admin"
            }
        }
    },
    errors: {
        required: "This field is required",
        passwordMismatched: "Password mismatched"
    }
};

const ru = {
    ...raRU,
    resources: {
        accounts: {
            name: "Учетная запись |||| Учетные записи",
            fields: {
                id: "ID",
                userName: "Имя пользователя",
                password: "Пароль",
                confirmPassword: "Повторите пароль",
                firstName: "Имя",
                middleName: "Отчество",
                lastName: "Фамилия",
                role: "Роль"
            },
            roles: {
                interviewer: "Интервьюер",
                admin: "Администратор"
            }
        }
    },
    errors: {
        required: "Поле обязательно для заполнения",
        passwordMismatched: "Пароли не совпадают"
    }
};

const translations = { en, ru };

export const i18nProvider = polyglotI18nProvider(locale => translations[locale], 'en');