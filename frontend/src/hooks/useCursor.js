import { useEffect } from 'react';

export default function useCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const onMouseOver = (e) => {
      const el = e.target.closest('a, button, [class*="card"], .brand-card, .filter-btn, .suggestion-chip, .social-btn');
      if (el) {
        cursor.classList.add('hover');
        follower.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
      }
    };

    // Smooth follower animation
    let animId;
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.14;
      followerY += (mouseY - followerY) * 0.14;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      animId = requestAnimationFrame(animateFollower);
    };
    animId = requestAnimationFrame(animateFollower);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);
}
