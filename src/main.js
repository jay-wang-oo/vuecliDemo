/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'

// 匯入 vee-validate 主套件
// 註冊元件 Form,Field,ErrorMessage
// 自訂規則 defineRule
// 設定檔 configure
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 匯入 VeeValidate 全部規則
import AllRules from '@vee-validate/rules'
// 匯入 vee-validate 相關規則
// import { required, email, min } from '@vee-validate/rules'
// 匯入 多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// 設定 VeeValidate 全部規則
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})
// 設定指定規則(定義驗證規則)
// defineRule('email', email)
// defineRule('required', required)
// 設定 i18n 多國語系套件(設定 vee-validate 全域規則)
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
})
// 強制預設為中文語系
setLocale('zh_TW')

// createApp(App).use(router).mount('#app')
const app = createApp(App).use(router)

// VeeValidate 註冊全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
