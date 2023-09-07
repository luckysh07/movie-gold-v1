// twinklingStars.ts
export function generateStars(containerSelector: string, totalStars: number): void {
    const twinklingStars = document.querySelectorAll(containerSelector);
  
    // Function to generate a random number within a range
    function getRandomNumber(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }
  
    twinklingStars.forEach((twinklingStar) => {
      for (let i = 0; i < totalStars; i++) {
        const star = document.createElement('span');
        star.style.width = star.style.height = `${getRandomNumber(1, 3)}px`;
        star.style.top = `${getRandomNumber(0, 100)}%`;
        star.style.left = `${getRandomNumber(0, 100)}%`;
        twinklingStar.appendChild(star);
      }
    });
  }
  
  