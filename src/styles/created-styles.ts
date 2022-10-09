import appCreate from './app-create'

const createdStyles = appCreate({
    styles: {
        'list_list-item': {
            extraSmall: [],
            small: [],
            medium: [],
            large: [],
            extraLarge: ['border-radius--border-radius', 'color--main-color', 'display-flex', 'align-items-center',  'padding-top-10', 'padding-right-10', 'padding-bottom-10', 'padding-left-10', 'cursor-pointer'],
        }
    }
})

export type AppClassName = keyof typeof createdStyles

export default createdStyles