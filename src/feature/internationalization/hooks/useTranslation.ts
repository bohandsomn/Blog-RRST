import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import translations from '../translations'

const DEFAULT_LOCALE = 'en'

const useTranslation = () => {
    const router = useRouter()
    const translation = useMemo(() => {
        if (router.locale === undefined) {
            return translations[DEFAULT_LOCALE]
        }
        const translation: typeof translations[typeof DEFAULT_LOCALE] | undefined = translations[router.locale as keyof typeof translations]
        if (translation === undefined) {
            return translations[DEFAULT_LOCALE]
        }
        return translation
    }, [router.locale])

    const switchLanguage = useCallback((language: keyof typeof translations) => {
        router.push('/', '/', {locale: language})
    }, [router])

    return {
        translation,
        switchLanguage
    }
}

export default useTranslation