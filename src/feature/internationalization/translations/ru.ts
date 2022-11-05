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
                "log-out": "Выйти",
                "chat": "Чат"
            }
        },
        "user-data": {
            "photo": {
                "title": "Пользователь"
            },
            "user-update": {
                "field": {
                    "name": "Введите ваше имя",
                    "surname": "Введите вашу фамилию",
                    "email": "Введите адрес электронной почты",
                    "login": "Введите свой логин",
                    "birthday": "Введите свой день рождения",
                    "privacy": "Введите вашу приватность",
                },
                "button": {
                    "update": "Обновить",
                    "cancel": "Отмена",
                }
            },
            "user-content": {
                "birthday": "День рождения:",
                "email": "Эл. адрес:",
                "login": "Авторизоваться:",
                "chat": "Чат",
                "subcribe": "Подписаться",
                "unsubcribe": "Отписаться",
            },
            "user-settings": {
                "chat": "Чат",
                "update": "Обновить"
            },
            "friendships": {
                "friendships-list": {
                    "friendships-list-item": {
                        "photo": {
                            "title": "Пользователь"
                        }
                    }
                },
                "chevron": {
                    "subscribers": "Подписчики",
                    "subscriptions": "Подписки",
                }
            }
        },
        "post-creator": {
            "form": {
                "header": "Создать сообщение",
                "field": {
                    "title": "Введите название",
                    "content": "Введите содержание",
                    "privacy": "Введите приватность",
                },
                "button": {
                    "submit": "Создавать"
                }
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