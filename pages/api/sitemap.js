const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "monthly", priority: 0.8 },
    { url: "/paslaugos/tekinimas", changefreq: "monthly", priority: 0.8 },
    { url: "/paslaugos/frezavimas", changefreq: "monthly", priority: 0.8 },
    // { url: "/paslaugos/projektavimas", changefreq: "monthly", priority: 0.8 },
    { url: "/paslaugos/bendra", changefreq: "monthly", priority: 0.8 },
    { url: "/calculator", changefreq: "monthly", priority: 0.8 },
    { url: "/irengimai", changefreq: "monthly", priority: 0.8 },
    // { url: "/karjera", changefreq: "monthly", priority: 0.8 },
    { url: "/kontaktai", changefreq: "monthly", priority: 0.8 },
    { url: "/galerija", changefreq: "monthly", priority: 0.8 },
    { url: "/privatumas", changefreq: "monthly", priority: 0.8 },
  ];
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });
  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );
  res.end(xmlString);
};
