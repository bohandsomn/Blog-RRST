import appCreate from './app-create'

const createdStyles = appCreate({
    styles: {
        'list_list-item': {
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
            extraLarge: ['border-radius--border-radius', 'background-color--secondary-color', 'display-flex', 'flex-direction-column', 'padding-top-10', 'padding-right-10', 'padding-bottom-10', 'padding-left-10']
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
        }
    }
})

export type AppClassName = keyof typeof createdStyles

export default createdStyles