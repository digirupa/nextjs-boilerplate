import { NextSeo } from 'next-seo'

type TProps = {
  title?: string
}

const HeadApplication = ({ title = 'home' }: TProps) => {
  return (
    <NextSeo
      title={'Digirupa - ' + title}
      description='Digirupa Next.js Boilerplate'
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]}
    />
  )
}

export default HeadApplication
