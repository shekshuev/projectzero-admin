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
                firstName: "First name",
                middleName: "Middle name",
                lastName: "Last name",
                role: "Role"
            }
        }
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
                firstName: "Имя",
                middleName: "Отчество",
                lastName: "Фамилия",
                role: "Роль"
            }
        }
    }
};

const translations = { en, ru };

export const i18nProvider = polyglotI18nProvider(locale => translations[locale], 'en');