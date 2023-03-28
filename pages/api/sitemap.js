const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "monthly", priority: 0.8 },
    { url: "/services/turning", changefreq: "monthly", priority: 0.8 },
    { url: "/services/milling", changefreq: "monthly", priority: 0.8 },
    { url: "/services/design", changefreq: "monthly", priority: 0.8 },
    { url: "/services/general", changefreq: "monthly", priority: 0.8 },
    { url: "/calculator", changefreq: "monthly", priority: 0.8 },
    { url: "/capabilities", changefreq: "monthly", priority: 0.8 },
    { url: "/career", changefreq: "monthly", priority: 0.8 },
    { url: "/contacts", changefreq: "monthly", priority: 0.8 },
    { url: "/gallery", changefreq: "monthly", priority: 0.8 },
    { url: "/privacy", changefreq: "monthly", priority: 0.8 },
  ];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
