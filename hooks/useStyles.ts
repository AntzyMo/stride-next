import { theme } from 'antd'
import { css } from '@emotion/css'

import type { GlobalToken } from 'antd'
import type { CSSInterpolation } from '@emotion/css'

type CSSFn = (token: GlobalToken) => CSSInterpolation

const { useToken } = theme

export function useTokenStyle(cssFn: CSSFn) {
  const { token } = useToken()

  return css(cssFn(token))
}
