import appCreate from './app-create'

const createdStyles = appCreate({
    styles: {
        'list__list-item': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['border-radius--border-radius', 'color--main-color', 'display-flex', 'align-items-center',  'padding-top-10', 'padding-right-10', 'padding-bottom-10', 'padding-left-10', 'cursor-pointer'],
        },
        'list': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'flex-direction-column']
        },
        'chevron': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['cursor-pointer']
        },
        'settings-list': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['cursor-pointer']
        },
        'background_secondary': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['padding-top-20', 'padding-right-20', 'padding-bottom-20', 'padding-left-20', 'border-radius--border-radius', 'box-shadow--main-bg-lilear', 'background-color--secondary-color']
        },
        'background_main': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['padding-top-20', 'padding-right-20', 'padding-bottom-20', 'padding-left-20', 'border-radius--border-radius', 'box-shadow--main-bg-lilear', 'background-color--main-bg-color']
        },
        'container-main': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['width-1200', 'margin-0-auto']
        },
        'container-secondary': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['width-702', 'margin-0-auto']
        },
        'container-sidebar': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['width-473', 'margin-0-auto']
        },
        'post': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'align-items-flex-start', 'flex-1', 'justify-content-space-between']
        },
        'post-list': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['children/margin-top-10']
        },
        'post__likes': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex']
        },
        'post__content': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['children/margin-bottom-10']
        },
        'like': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['cursor-pointer', 'margin-right-20']
        },
        'dislike': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['cursor-pointer']
        },
        'comment': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['children/margin-top-10']
        },
        'comment__likes': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex']
        },
        'comment-list': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['children/margin-top-10']
        },
        'comment-item': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'align-items-flex-start', 'flex-1', 'justify-content-space-between']
        },
        'comment__content': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['children/margin-bottom-10']
        },
        'authentication_form': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'flex-direction-column', 'align-items-center']
        },
        'authentication_container': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['height-100vh', 'display-flex', 'align-items-center', 'justify-content-center']
        },
        'search-post__search': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'align-items-flex-end', 'children/margin-right-10']
        },
        'search-post__pagination': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'align-items-center', 'flex-1', 'justify-content-space-between']
        },
        'header': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['background-color--secondary-color', 'width-100%', 'padding-top-20', 'padding-right-20', 'padding-bottom-20', 'padding-left-20', 'margin-bottom-10']
        },
        'sidebar': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['position-sticky', 'top-0']
        },
        'user': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'align-items-flex-start', 'flex-1', 'justify-content-space-between']
        },
        'user-content': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['width-290']
        },
        'user-friendships': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'justify-content-space-between']
        },
        'chat-wrapper': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['display-flex', 'justify-content-flex-start']
        }
    }
})

export type AppClassName = keyof typeof createdStyles

export default createdStyles