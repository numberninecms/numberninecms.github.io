import { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default'

export interface LocalThemeHomePageFrontmatter extends DefaultThemeHomePageFrontmatter {
    introductionText?: string;
    license?: string;
    version?: string
    caption?: string
}