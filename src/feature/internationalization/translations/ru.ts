import en from './en'

const ru: typeof en = {
    "feature": {
        "post": {
            "post-update": {
                "field": {
                    "title": "Введите название",
                    "content": "Введите содержание",
                    "privacy": "Введите конфиденциальность",
                },
                "button": {
                    "submit": "Отправить"
                },
                "photo": {
                    "title": "Фото пользователя"
                }
            },
            "post-data": {
                "post-content": {
                    "time": {
                        "created": "Созданный",
                        "updated": "Обновлено",
                    }
                },
                "post-settings": {
                    "list-item": {
                        "user": "Пользователь",
                        "post": "Пост",
                        "update": "Обновить",
                        "delete": "Удалить",
                    }
                }
            },
            "comment": {
                "comment-form": {
                    "field": {
                        "content": "Введите содержание",
                    },
                    "button": {
                        "submit": "Отправить"
                    },
                },
                "comment-item": {
                    "photo": {
                        "title": "Фото пользователя"
                    }
                },
                "comment-update": {
                    "field": {
                        "content": "Введите комментарий",
                    },
                    "button": {
                        "submit": "Отправить"
                    },
                },
                "comment-settings": {
                    "list-item": {
                        "user": "Пользователь",
                        "update": "Обновить",
                        "delete": "Удалить",
                    }
                }
            }
        },
        "authentication": {
            "log-in": {
                "field": {
                    "login": "Введите логин",
                    "password": "Введите пароль",
                },
                "button": {
                    "submit": "Авторизоваться"
                },
                "message": {
                    "question": "Вы не зарегистрированы?",
                    "link": "Регистрация"
                },
                "greeting": "Авторизоваться"
            },
            "registration": {
                "field": {
                    "name": "Введите имя",
                    "email": "Введите почту",
                    "login": "Введите логин",
                    "password": "Введите пароль",
                },
                "button": {
                    "submit": "Регистрация"
                },
                "message": {
                    "question": "Вы уже зарегистрированы?",
                    "link": "Авторизоваться"
                },
                "greeting": "Регистрация"
            }
        }
    },
    "components": {
        "likes": {
            "like": "Нравиться",
            "dislike": "Не нравится"
        }
    }
}

export default ru