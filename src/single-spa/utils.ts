import * as singleSpa from 'single-spa';

export type MatchingStrategy = (location: Location) => boolean;

export interface MicrofrontendAppConfig {
  name: string;
  windowLibraryName: string;
  appUrl: string;
  matchingStrategy: MatchingStrategy;
  baseHref?: string;
  assetsPath?: string;
  appLocation?: string;
  customParams?: any;
}

export const runScript = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

export const matchingPathname = (pathnames: string[]) => (location: Location) =>
  pathnames.some((pathname) => location.pathname.startsWith(pathname));

export const registerApp = (config: MicrofrontendAppConfig) => {
  if (singleSpa.getAppNames().includes(config.name)) {
    return;
  }

  const { name, windowLibraryName, appUrl, baseHref, assetsPath, matchingStrategy, appLocation, customParams } = config;
  const params = { baseHref, assetsPath, appLocation, ...(customParams || {}) };

  const loadApp = async (): Promise<singleSpa.LifeCycles> => {
    await runScript(appUrl);

    return window[windowLibraryName];
  };

  singleSpa.registerApplication(name, loadApp, matchingStrategy, params);
};
