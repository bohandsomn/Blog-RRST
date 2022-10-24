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