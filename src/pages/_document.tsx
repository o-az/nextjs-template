import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
  type DocumentProps,
} from 'next/document'

const APPLICATION_NAME = 'Application Name'

export default class Document_ extends Document<DocumentProps> {
  static getInitialProps = async (context: DocumentContext): Promise<DocumentInitialProps> => ({
    ...(await Document.getInitialProps(context)),
  })

  render(): React.ReactElement {
    return (
      <Html
        lang='en'
        className='scroll-smooth'
      >
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='application-name'
            content={'APPLICATION_NAME'}
          />
          <meta
            name='apple-mobile-web-app-capable'
            content='yes'
          />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta
            name='apple-mobile-web-app-title'
            content={APPLICATION_NAME}
          />
          <meta
            name='description'
            content={'App Description'}
          />
          <meta
            property='og:type'
            content='website'
          />
          <meta
            property='og:url'
            content='https://CHANGE_ME.COM'
          />
          <meta
            property='og:site_name'
            content={APPLICATION_NAME}
          />
          <meta
            name='format-detection'
            content='telephone=no'
          />
          <meta
            name='mobile-web-app-capable'
            content='yes'
          />
          <meta
            name='keywords'
            content='Keywords'
          />
          <meta
            name='theme-color'
            content='#14141b'
          />
          <link
            rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💀</text></svg>'
          />
        </Head>
        <body className='antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
