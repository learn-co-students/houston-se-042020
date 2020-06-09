const puppeteer = require('puppeteer');
const { expect } = require('chai');
const path = require('path');
const htmlFilePath = `file:${path.join(__dirname, '/../index.html')}`;

let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });
});

describe('Advanced Features', () => {
  it('persists feedback', async () => {
    const feedback = `New feedback ${Math.random()}`;

    await page.type('#new-feedback', feedback);
    await page.click('input[type="submit"]');
    await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });

    const lastFeedback = await page.evaluate(() => document.querySelector('.feedback ul li:last-of-type').textContent.trim());

    expect(lastFeedback).to.equal(feedback);
  });

  it('persistently deletes feedback when clicking on a feedback LI', async () => {
    const oldFeedback = await page.evaluate(() => Array.from(document.querySelectorAll('.feedback ul li')).map(el => el.textContent));

    await page.click('.feedback ul li:last-of-type');
    await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });

    const currentFeedback = await page.evaluate(() => Array.from(document.querySelectorAll('.feedback ul li')).map(el => el.textContent));

    expect(currentFeedback[currentFeedback.length - 1]).to.not.equal(oldFeedback[oldFeedback.length - 1]);
    expect(currentFeedback.length).to.not.equal(oldFeedback.length);
  });

  it('decreases the likes (persistently) when clicking a button', async () => {
    const oldLikes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    await page.click('#unlike');
    await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });

    const likes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    expect(parseInt(likes, 10)).to.equal(parseInt(oldLikes, 10) - 1);
  });

  it('does not let likes go below 0', async () => {
    const oldLikes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    for (let i = 0; i < parseInt(oldLikes, 10) + 2; ++i) {
      await page.click('#unlike');
    }

    await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });

    const likes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    expect(parseInt(likes, 10)).to.equal(0);
    
    await page.evaluate(() => fetch('http://localhost:3000/dancers/1', {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: 23 })
    }));
  });

  it('creates a menu of all dancers', async () => {
    const numLIs = await page.evaluate(() => document.querySelectorAll('nav ul li').length);
    const json = require('../db.json');

    expect(numLIs).to.equal(json.dancers.length);
  });

  it('updates the dancer details when clicking on a dancer in the menu', async () => {
    const json = require('../db.json');
    const secondDancer = json.dancers[1];

    await page.click('nav ul li:nth-of-type(2) button');

    const dancerName = await page.evaluate(() => document.querySelector('#dancer-name').textContent);

    expect(dancerName).to.equal(secondDancer.name);
  });
});