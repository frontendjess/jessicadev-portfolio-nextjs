import Head from 'next/head'

const CustomHead = ({ title }) => {
    const ogImageUrl = 'https://jessicawarr.com/images/og-jessicawarr.png'
    const xImageUrl = 'https://jessicawarr.com/images/x-jessicawarr.png'
    const description =
        'Front-end developer skilled in creating engaging and responsive websites & applications with modern frameworks.'
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content={`https://jessicawarr.com/${encodeURIComponent(title)}`}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content={`https://jessicawarr.com/${encodeURIComponent(title)}`}
            />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={xImageUrl} />
        </Head>
    )
}

export default CustomHead
