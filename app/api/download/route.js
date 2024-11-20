
export default async function handler(req, res) {
  const { videoUrl } = req.query;

  try {
    const response = await fetch(videoUrl);

    res.setHeader('Content-Type', response.headers.get('content-type'));
    res.setHeader('Content-Disposition', `attachment; filename="${response.headers.get('content-disposition').split('=')[1]}"`);

    response.body.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch video' });
  }
}