import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
        </Head>
        <body className="min-w-[50%] mx-auto  sm:min-w-full sm:min-h-fit  sm:object-cover sm:object-bottom sm:w-max md:w-max 2xl:object-right 3xl:w-1/12  lg:overflow-y-scroll lg:container lg:mx-auto lg:px-0 lg:mb-0  lg:pb-5">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
