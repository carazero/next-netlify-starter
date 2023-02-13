import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

// Set the port number
const port = 3000;

// Set the views directory
app.set('views', './views');
app.set('view engine', 'ejs');

// Render the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Download the video
app.get('/download', (req, res) => {
  const videoUrl = req.query.url;

  // Check if the video URL is valid
  if (!ytdl.validateURL(videoUrl)) {
    return res.status(400).send('Invalid YouTube video URL');
  }

  // Set the video file name
  const videoName = 'video.mp4';

  // Download the video
  ytdl(videoUrl, { filter: format => format.container === 'mp4' })
    .pipe(res)
    .on('finish', () => console.log('Video downloaded successfully!'))
    .on('error', (error) => console.error(`Error downloading video: ${error}`))
    .on('end', () => res.end());
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
      </main>

      <Footer />
    </div>
  )
}
