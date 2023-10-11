// Antd
import type { ThemeConfig } from 'antd'

// Utils
import { THEME_PRIMARY } from './theme.util'

export const antdTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: THEME_PRIMARY.DEFAULT
  }
}
