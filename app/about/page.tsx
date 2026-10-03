import type { Metadata } from 'next'
import About from '../../src/components/About'

export const metadata: Metadata = {
    title: 'About - Kino',
    description: 'About Kino and its data source. This product uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.',
    keywords: ['about', 'TMDB attribution', 'data source'],
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About - Kino',
        description: 'About Kino and its data source.',
        type: 'website',
        siteName: 'Kino',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function AboutPage() {
    return <About />
}
