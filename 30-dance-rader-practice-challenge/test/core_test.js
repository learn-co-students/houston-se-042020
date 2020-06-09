const puppeteer = require('puppeteer');
const { expect } = require('chai');
const path = require('path');
const htmlFilePath = `file:${path.join(__dirname, '/../index.html')}`;
const json = require('../db.json');
const firstDancer = json.dancers[0];

let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });
});

describe('Core Features', () => {
  it('shows the name in an h2', async () => {
    const h2 = await page.evaluate(() => document.querySelector('#dancer-name').textContent.trim());

    expect(h2).to.equal(firstDancer.name);
  });

  it('shows the number of likes', async () => {
    const likes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    expect(parseInt(likes, 10)).to.equal(firstDancer.likes);
  });

  it('shows the description', async () => {
    const desc = await page.evaluate(() => document.querySelector('#dancer-description').textContent.trim());

    expect(desc).to.equal(firstDancer.description);
  });

  it('shows the feedback in LIs', async () => {
    const feedback = await page.evaluate(() => Array.from(document.querySelectorAll('.feedback ul li')).map(el => el.textContent));

    feedback.forEach((fb, idx) => {
      expect(fb).to.equal(firstDancer.feedback[idx]);
    });
  });

  it('increases the likes (persistently) when clicking a button', async () => {
    const oldLikes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    await page.click('#like');
    await page.goto(htmlFilePath, { waitUntil: 'networkidle2' });

    const likes = await page.evaluate(() => document.querySelector('#like-count').textContent.trim());

    expect(parseInt(likes, 10)).to.equal(parseInt(oldLikes, 10) + 1);
  });

  it('adds feedback via a form', async () => {
    const feedback = 'testing test test';
    await page.type('#new-feedback', feedback);
    await page.click('input[type="submit"]');

    const lastFeedback = await page.evaluate(() => document.querySelector('.feedback ul li:last-of-type').textContent.trim());

    expect(lastFeedback).to.equal(feedback);
  });
});
