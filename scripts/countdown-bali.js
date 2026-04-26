// Countdown timer för Bali-resan
// Flyg: 16 juli 2026, 22:40

function updateCountdown() {
  // Sätt måldag och tid (16 juli 2026, 22:40)
  const targetDate = new Date('2026-07-16T22:40:00').getTime();
  
  // Hämta aktuell tid
  const now = new Date().getTime();
  
  // Beräkna skillnaden
  const distance = targetDate - now;
  
  // Beräkna tidsenheter
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Uppdatera HTML
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    if (distance < 0) {
      countdownElement.innerHTML = 'Vi är framme på Bali! 🏝️';
    } else {
      countdownElement.innerHTML = `
        <strong>${days} dagar</strong>, 
        <strong>${hours}</strong> timmar, 
        <strong>${minutes}</strong> minuter, 
        <strong>${seconds}</strong> sekunder kvar till avresa!
      `;
    }
  }
}

// Uppdatera direkt vid sidladdning
updateCountdown();

// Uppdatera varje sekund
setInterval(updateCountdown, 1000);
