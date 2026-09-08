const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.log('PAGE EXCEPTION:', error.message);
  });

  try {
    console.log('Navigating...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    console.log('Navigation complete. Waiting 2 seconds...');
    await page.waitForTimeout(2000);
  } catch (e) {
    console.log('Navigation failed:', e.message);
  }

  await browser.close();
  console.log('Done.');
})();
