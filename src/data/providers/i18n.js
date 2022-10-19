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
        },
        surveys: {
            name: "Survey |||| Surveys",
            fields: {
                id: "ID",
                title: "Title",
                description: "Description",
                beginDate: "Begin date",
                endDate: "End date",
                questions: "Questions",
                question: {
                    id: "ID",
                    title: "Title",
                    type: "Type",
                    answer: {
                        id: "ID",
                        text: "Text",
                        code: "Answer code"
                    }
                }
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
        },
        surveys: {
            name: "Опрос |||| Опросы",
            fields: {
                id: "ID",
                title: "Название",
                description: "Описание",
                beginDate: "Дата начала",
                endDate: "Дата окончания",
                questions: "Вопросы",
                question: {
                    id: "ID",
                    title: "Текст вопроса",
                    type: "Тип вопроса",
                    answer: {
                        id: "ID",
                        text: "Текст ответа",
                        code: "Код ответа"
                    }
                }
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