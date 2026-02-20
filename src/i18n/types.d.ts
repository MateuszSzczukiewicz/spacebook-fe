import type common from './locales/en/common.json'
import type auth from './locales/en/auth.json'

type Resources = {
  common: typeof common
  auth: typeof auth
}

declare module 'i18next' {
  type CustomTypeOptions = {
    defaultNS: 'common'
    resources: Resources
  }
}
