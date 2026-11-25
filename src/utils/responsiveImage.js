/**
 * Returns a responsive srcSet string when mobile/tablet WebP variants exist
 * under /images/optimized/, ensuring mobile viewports avoid downloading full desktop payloads.
 */
export function getImageSrcSet(url) {
  if (!url) return undefined;
  if (url === '/images/optimized/hero-riverfront.webp') {
    return '/images/optimized/hero-riverfront-480w.webp 480w, /images/optimized/hero-riverfront-800w.webp 800w, /images/optimized/hero-riverfront.webp 1280w';
  }
  if (url === '/images/optimized/master-plan.webp') {
    return '/images/optimized/master-plan-400w.webp 400w, /images/optimized/master-plan-640w.webp 640w, /images/optimized/master-plan.webp 1000w';
  }
  const galleryMatch = url.match(/^(\/images\/optimized\/gallery-\d{2})\.webp$/);
  if (galleryMatch) {
    return `${galleryMatch[1]}-400w.webp 400w, ${url} 800w`;
  }
  return undefined;
}
