import zhCn from "@/locales/zh-CN"
import { createI18n } from 'vue-i18n'

const messages = {
    zh_CN: zhCn
}

export const i18n = createI18n({
    locale: 'zh_CN',
    messages,
})
