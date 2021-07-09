import { defineClientAppEnhance } from '@vuepress/client'
import HomeLayout from './theme/layouts/HomeLayout.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('HomeLayout', HomeLayout)
})
