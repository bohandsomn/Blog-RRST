function classNameAdapter(atomContext?: Record<string, object>, className?: string) {
    const classNames = className?.split(' ')
    return classNames?.reduce((accumulator, currentClassName) => {
        return {
            ...accumulator,
            ...atomContext?.[currentClassName]
        }
    }, {}) || {}
}

export default classNameAdapter