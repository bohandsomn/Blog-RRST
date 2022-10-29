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
                    "title": "Пользователь"
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
                        "title": "Пользователь"
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
        },
        "heaser": {
            "authentication": {
                "photo": {
                    "title": "Пользователь"
                },
                "button": {
                    "registration": "Регистрация",
                    "log-in": "Авторизоваться"
                }
            }
        },
        "sidebar": {
            "list": {
                "home": "Домой",
                "user": "Пользователь",
                "search-posts": "Поиск постов",
                "log-out": "Выйти"
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