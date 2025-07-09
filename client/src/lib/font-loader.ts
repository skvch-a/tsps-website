export function loadTekturFont() {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Tektur:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}
