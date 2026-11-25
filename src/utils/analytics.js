/**
 * Safe GTM / GA4 / Google Ads Conversion Telemetry Helper
 * Forwards conversion events to window.dataLayer and window.gtag when configured,
 * without introducing placeholder tags or third-party console errors.
 */
export function trackConversion(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      project: 'Rohan Ekam Balewadi',
      timestamp: new Date().toISOString(),
      ...params,
    });
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch {
    // Non-blocking telemetry safeguard
  }
}
