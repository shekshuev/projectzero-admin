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
        forms: {
            name: "Form |||| Forms",
            fields: {
                id: "ID",
                title: "Title",
                questions_count: "Questions count",
                questions: "Questions",
                question: {
                    id: "ID",
                    title: "Title",
                    type: "Type",
                    answers: "Answers",
                    answer: {
                        id: "ID",
                        text: "Text",
                        code: "Answer code"
                    }
                }
            },
            questionTypes: {
                single: "Single answer",
                multiple: "Multiple answer",
                open: "Open"
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
                form: "Form"
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
        forms: {
            name: "Бланк |||| Бланки",
            fields: {
                id: "ID",
                title: "Название",
                questions_count: "Количество вопросов",
                questions: "Вопросы",
                question: {
                    title: "Текст вопроса",
                    type: "Тип вопроса",
                    answers: "Ответы",
                    answer: {
                        text: "Текст ответа",
                        code: "Код ответа"
                    }
                }
            },
            questionTypes: {
                single: "Один ответ",
                multiple: "Несколько ответов",
                open: "Открытый"
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
                form: "Бланк"
            }
        }
    },
    errors: {
        required: "Поле обязательно для заполнения",
        passwordMismatched: "Пароли не совпадают"
    }
};

Reflect.set(ru, "ra.action.move_down", "Вниз");
Reflect.set(ru, "ra.action.move_up", "Вверх");
Reflect.set(ru, "ra.action.clear_array_input", "Очистить список");
Reflect.set(ru, "ra.message.clear_array_input", "Вы действительно хотите очистить весь список?");
Reflect.set(ru, "ra.configurable.customize", "Настроить");

const translations = { en, ru };

export const i18nProvider = polyglotI18nProvider(locale => translations[locale], "en");
