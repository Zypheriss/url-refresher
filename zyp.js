import puppeteer from 'puppeteer';
import chalk from 'chalk'; 

(async () => {
  const url = 'camo';

  let refreshCount = 0;

  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto(url);

  setInterval(async () => {
    refreshCount++;
    console.log(
      chalk.blue(`[${new Date().toLocaleTimeString()}]`) +
      chalk.green(` Sayfa yenilendi! Toplam: `) +
      chalk.yellow(`${refreshCount} kez`)
    );
    try {
      await page.reload({ timeout: 0 });
    } catch (err) {
      console.error(chalk.red('Sayfa yenilenirken hata oluştu:'), err);
    }
  }, 1000);
})();
