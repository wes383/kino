'use client'

import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <div style={{
            minHeight: 'calc(100vh - 130px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            padding: '40px 20px',
            backgroundColor: '#121212',
            color: '#fff',
            fontFamily: 'Inter, sans-serif'
        }}>
            <h1 style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>
                {t('common.about', 'About')}
            </h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '16px',
                maxWidth: '520px',
                padding: '22px 26px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px'
            }}>
                <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
                >
                    <img
                        src="/tmdb-logo.svg"
                        alt="TMDB Logo"
                        style={{ height: '24px', opacity: 0.9 }}
                    />
                </a>
                <p style={{
                    margin: 0,
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: '#888',
                    textAlign: 'start',
                    direction: 'ltr'
                }}>
                    This product uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
                </p>
            </div>
        </div>
    );
}
