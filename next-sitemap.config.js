/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://tuhydroptima.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml', '/sitemap-0.xml'], // Agrega '/sitemap-0.xml' aquí
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://tuhydroptima.com'
        ]
    }
}
