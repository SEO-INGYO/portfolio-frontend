import { NextResponse } from 'next/server';
import axios from 'axios';
const cheerio = require('cheerio');

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  console.log(`Fetching data from URL: ${url}`);

  try {
    const { data } = await axios.get(url);
    console.log('Data fetched successfully.');

    const $ = cheerio.load(data);
    const description = $('meta[property="og:description"]').attr('content') || 'No description available';
    const title = $('meta[property="og:title"]').attr('content') || 'No title available';
    const image = $('meta[property="og:image"]').attr('content') || 'https://via.placeholder.com/150';

    return NextResponse.json({ title, description, image });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to scrape the webpage.' }, { status: 500 });
  }
}