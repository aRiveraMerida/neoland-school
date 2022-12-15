import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src={"/neoland-n-logotipo.png"} alt="thunder" width="50" height="50"/>
    </>
  ),
  footer: {
    text: 'Neoland Jornadas de desarrollo ',
  },
}

export default config
