import en from './en'

const uk: typeof en = {
    "feature": {
        "post": {
            "post-update": {
                "field": {
                    "title": "Введіть назву",
                    "content": "Введіть вміст",
                    "privacy": "Введіть конфіденційність",
                },
                "button": {
                    "submit": "Надіслати"
                },
                "photo": {
                    "title": "Користувача"
                }
            },
            "post-data": {
                "post-content": {
                    "time": {
                        "created": "Створено",
                        "updated": "Оновлено",
                    }
                },
                "post-settings": {
                    "list-item": {
                        "user": "Користувач",
                        "post": "Пост",
                        "update": "Оновити",
                        "delete": "Видалити",
                    }
                }
            },
            "comment": {
                "comment-form": {
                    "field": {
                        "content": "Введіть вміст",
                    },
                    "button": {
                        "submit": "Надіслати"
                    },
                },
                "comment-item": {
                    "photo": {
                        "title": "Користувача"
                    }
                },
                "comment-update": {
                    "field": {
                        "content": "Введіть коментар",
                    },
                    "button": {
                        "submit": "Надіслати"
                    },
                },
                "comment-settings": {
                    "list-item": {
                        "user": "Користувач",
                        "update": "Оновити",
                        "delete": "Видалити",
                    }
                }
            }
        },
        "authentication": {
            "log-in": {
                "field": {
                    "login": "Введіть логін",
                    "password": "Введіть пароль",
                },
                "button": {
                    "submit": "Авторизуватися"
                },
                "message": {
                    "question": "Ви не зареєстровані?",
                    "link": "Реєстрація"
                },
                "greeting": "Авторизуватися"
            },
            "registration": {
                "field": {
                    "name": "Введіть ім'я",
                    "email": "Введіть пошту",
                    "login": "Введіть логін",
                    "password": "Введіть пароль",
                },
                "button": {
                    "submit": "Реєстрація"
                },
                "message": {
                    "question": "Ви вже зареєстровані?",
                    "link": "Логін"
                },
                "greeting": "Реєстрація"
            }
        },
        "heaser": {
            "authentication": {
                "photo": {
                    "title": "Користувач"
                },
                "button": {
                    "registration": "Реєстрація",
                    "log-in": "Авторизуватися"
                }
            }
        },
        "sidebar": {
            "list": {
                "home": "Додому",
                "user": "Користувач",
                "search-posts": "Пошук постів",
                "log-out": "Вийти"
            }
        }
    },
    "components": {
        "likes": {
            "like": "Подобається",
            "dislike": "Не подобається"
        }
    }
}

export default uk