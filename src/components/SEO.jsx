import React from 'react';
import { Helmet } from 'react-helmet';
import { portfolioData } from '../data';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = title ? `${title} | ${portfolioData.personal.name}` : portfolioData.personal.name;
    const siteDescription = description || portfolioData.personal.description;
    const siteKeywords = keywords || "portfolio, full stack developer, software engineer, web development, AI";
    const siteImage = image || portfolioData.personal.image || "/og-image.jpg"; // Fallback image
    const siteUrl = url || "https://phanimanda.vercel.app"; // Replace with actual URL

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />
            <meta name="author" content={portfolioData.personal.name} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={siteImage} />
        </Helmet>
    );
};

export default SEO;
