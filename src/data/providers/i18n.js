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
                role: "Role",
                createdAt: "Created at",
                updatedAt: "Updated at"
            },
            roles: {
                interviewer: "Interviewer",
                admin: "Admin",
                root: "Root"
            }
        },
        forms: {
            name: "Form |||| Forms",
            fields: {
                id: "ID",
                title: "Title",
                description: "Description",
                questionsCount: "Questions count",
                questions: "Questions",
                question: {
                    title: "Title",
                    type: "Type",
                    answers: "Answers",
                    required: "Required",
                    isIgnoreString: "Answer codes to ignore this question",
                    answer: {
                        text: "Text",
                        code: "Answer code"
                    }
                },
                createdAt: "Created at",
                updatedAt: "Updated at"
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
                form: "Form",
                area: "Area",
                formsCount: "Forms count",
                createdAt: "Created at",
                updatedAt: "Updated at"
            }
        },
        results: {
            name: "Result |||| Results",
            fields: {
                id: "ID",
                beginDate: "Begin date",
                endDate: "End date",
                answers_count: "Answers",
                completed: "Completed",
                survey: "Survey",
                account: "Interviewer",
                point: "Geolocation of interviewer",
                questions: "Questions",
                question: {
                    beginDate: "Question begin time",
                    endDate: "Question end time",
                    title: "Title",
                    type: "Type",
                    answers: "Answers",
                    required: "Required",
                    answer: {
                        text: "Text",
                        code: "Answer code",
                        selected: "Selected",
                        inputText: "Respondent answer text"
                    }
                },
                createdAt: "Created at",
                updatedAt: "Updated at"
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
                role: "Роль",
                createdAt: "Дата и время создания",
                updatedAt: "Дата и время изменения"
            },
            roles: {
                interviewer: "Интервьюер",
                admin: "Администратор",
                root: "Главный администратор"
            }
        },
        forms: {
            name: "Бланк |||| Бланки",
            fields: {
                id: "ID",
                title: "Название",
                description: "Описание",
                questionsCount: "Количество вопросов",
                questions: "Вопросы",
                question: {
                    title: "Текст вопроса",
                    type: "Тип вопроса",
                    answers: "Ответы",
                    required: "Обязательный",
                    isIgnoreString: "Коды ответов, при выборе которых этот вопрос будет скрыт",
                    answer: {
                        text: "Текст ответа",
                        code: "Код ответа"
                    }
                },
                createdAt: "Дата и время создания",
                updatedAt: "Дата и время изменения"
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
                form: "Бланк",
                area: "Место проведения опроса",
                formsCount: "Количество анкет",
                createdAt: "Дата и время создания",
                updatedAt: "Дата и время изменения"
            }
        },
        results: {
            name: "Результат |||| Результаты",
            fields: {
                id: "ID",
                beginDate: "Дата начала",
                endDate: "Дата окончания",
                answers_count: "Ответы",
                completed: "Завершен",
                survey: "Опрос",
                account: "Интервьюер",
                point: "Местоположение интервьюера",
                questions: "Вопросы",
                question: {
                    id: "ID",
                    beginDate: "Время начала вопроса",
                    endDate: "Время завершения вопроса",
                    title: "Текст вопроса",
                    type: "Тип вопроса",
                    answers: "Ответы",
                    required: "Обязательный",
                    answer: {
                        id: "ID",
                        text: "Текст ответа",
                        code: "Код ответа",
                        selected: "Выбран",
                        inputText: "Текст ответа респондента"
                    }
                },
                createdAt: "Дата и время создания",
                updatedAt: "Дата и время изменения"
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
