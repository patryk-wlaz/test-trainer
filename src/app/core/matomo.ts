type EventType =
  | 'setReferrerUrl'
  | 'setCustomUrl'
  | 'deleteCustomVariables'
  | 'trackPageView'
  | 'enableLinkTracking'
  | 'setGenerationTimeMs'
  | 'setUserId'
  | 'setSiteId'
  | 'setTrackerUrl'
  | 'resetUserId';

export const track = (...values: [EventType, any?][]): void => {
  (window as any)._paq.push(...values);
};

export const startTracking = (matomoSiteId: number): void => {
  track(['enableLinkTracking'], ['setSiteId', matomoSiteId], ['trackPageView']);
};

export const setTrackingUserId = (userId: string | number): void => {
  track(['setUserId', userId]);
};

export const clearTrackingUserId = (): void => {
  track(['resetUserId'], ['trackPageView']);
};

export const sendPageVisit = (from: string, to: string): void => {
  track(
    ['setReferrerUrl', from],
    ['setCustomUrl', to],
    ['setGenerationTimeMs', 0],
    ['trackPageView'],
    ['enableLinkTracking']
  );
};

export function loadMatomoScript(): void {
  const win = window as any;
  win._paq = win._paq || [];

  (function(): void {
    const u = '//stats.wmplanningtools.com/';

    track(['setTrackerUrl', u + 'matomo.php']);

    const d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
  })();
}
