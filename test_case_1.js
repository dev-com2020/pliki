// Importowanie Playwright
const { chromium } = require('playwright');

(async () => {
  // Uruchomienie przeglądarki
  const browser = await chromium.launch({ headless: false }); // Ustawienie headless: false uruchamia przeglądarkę z UI
  const page = await browser.newPage();

  // Przejście na stronę
  await page.goto('https://dev-com.pl');

  // Sprawdzenie tytułu strony
  const title = await page.title();
  console.log('Tytuł strony:', title);

  // Sprawdzenie, czy tytuł strony jest poprawny
  if (title === 'DevCom Portfolio') {
    console.log('Tytuł jest poprawny');
  } else {
    console.log('Tytuł jest niepoprawny');
  }

  await page.click('text=Kontakt');

  // Sprawdzenie adresu URL po kliknięciu
  const url = page.url();
  console.log('Obecny URL:', url);

  // Zamknięcie przeglądarki
  await browser.close();
})();
