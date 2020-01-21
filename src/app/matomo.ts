type EventType =
  | 'setReferrerUrl'
  | 'setCustomUrl'
  | 'deleteCustomVariables'
  | 'trackPageView'
  | 'enableLinkTracking'
  | 'setGenerationTimeMs'
  | 'setUserId';

export const track = (...values: [EventType, any?][]) => {
  (window as any)._paq.push(...values);

  return track;
};
