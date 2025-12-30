import React from 'react';
import { Helmet } from 'react-helmet';
import { portfolioData } from '../data';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
    const siteName = "Phani Manda - Full Stack Developer";
    const siteTitle = title 
        ? `${title} | ${portfolioData.personal.name}` 
        : `${portfolioData.personal.name} - Full Stack Developer | React, Node.js, Python Portfolio`;
    const siteDescription = description || 
        "Phani Manda is a Computer Science student and aspiring software engineer skilled in React, Node.js, Python, MongoDB, and full-stack web development. Explore projects including real-time chat applications and AI-powered tools.";
    const siteKeywords = keywords || 
        "Phani Manda, phani manda, phanimanda, full stack developer, software engineer, React developer, Node.js developer, Python developer, MongoDB, portfolio, computer science student, web developer, Hyderabad developer, India developer, ChatX, Resumo, AI resume optimizer, real-time chat app, MERN stack, frontend developer, backend developer, JavaScript developer, TypeScript";
    const siteImage = image || "https://www.phanimanda.live/og-image.png";
    const siteUrl = url || "https://www.phanimanda.live/";
    const twitterHandle = "@phanimanda";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />
            <meta name="author" content={portfolioData.personal.name} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <link rel="canonical" href={siteUrl} />
            
            {/* Language and Region */}
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Hyderabad" />
            <meta name="geo.position" content="17.385044;78.486671" />
            <meta name="ICBM" content="17.385044, 78.486671" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Phani Manda - Full Stack Developer Portfolio" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />
            <meta name="twitter:image:alt" content="Phani Manda - Full Stack Developer Portfolio" />

            {/* Additional SEO */}
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="coverage" content="Worldwide" />
            <meta httpEquiv="content-language" content="en" />
        </Helmet>
    );
};

export default SEO;
