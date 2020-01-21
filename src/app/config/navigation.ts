const DEFAULT_TESTING_BRAND_ID = '734d1932-6312-4b65-8000-96dff16f185e';

export const navigation = {
  dashboard: [
    {
      title: 'WM_HOME.HEADER.YOU',
      path: '/',
    },
    // {
    //   title: 'WM_HOME.HEADER.WORK',
    //   path: 'work',
    // },
    {
      title: 'WM_HOME.HEADER.CONTACTS',
      path: '/contacts',
    },
    // {
    //   title: 'WM_HOME.HEADER.ACTIVITY',
    //   path: 'personal',
    // },
    {
      title: 'WM_HOME.HEADER.APPS',
      path: 'apps',
    },
  ],

  main: [
    {
      title: 'WM_HOME.NAVIGATION_MAIN.UNLOCK',
      nav: [
        {
          title: 'WM_HOME.NAVIGATION_MAIN.TOOLKIT',
          subNav: [
            {
              title: 'WM_HOME.NAVIGATION_MAIN.BUDGET',
              path: '/budget',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.SITE_SPEED',
              path: `/page-speed-insights`,
            },
          ],
        },
        {
          title: 'WM_HOME.NAVIGATION_MAIN.SCORECARDS',
          subNav: [
            {
              title: 'WM_HOME.NAVIGATION_MAIN.SUMMARY',
              path: '/scorecards',
              subPath: 'summary',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.SITE_AND_APP_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000003/intro',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.PPC_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000001/intro',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.CONTENT_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000004/intro',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.SOCIAL_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000002/intro',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.ECOMMERCE_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000006/intro',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.AUDIENCE_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000005/intro',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.PROGRAMMATIC_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000007/intro',
            },
            {
              title: 'WM_HOME.NAVIGATION_MAIN.VIDEO_AUDIT',
              path: '/scorecards',
              subPath: 'scorecard/00000000-0000-0000-0000-000000000008/intro',
            },
          ],
        },
        {
          title: 'WM_HOME.NAVIGATION_MAIN.OPPORTUNITIES',
          link: `/growth-opportunities`,
          subNav: [],
        },
      ],
    },
    {
      title: 'WM_HOME.NAVIGATION_MAIN.OPTIMISE',
      nav: [
        {
          title: 'WM_HOME.NAVIGATION_MAIN.AUDIENCES',
          link: `/audiences`,
          subNav: [],
        },
        {
          title: 'WM_HOME.NAVIGATION_MAIN.CAMPAIGNS',
          link: `/briefs`,
          subNav: [],
        },
      ],
    },
    {
      title: 'WM_HOME.NAVIGATION_MAIN.TRANSFORM',
      nav: [],
    },
  ],
  contacts: [
    {
      title: 'WM_HOME.CONTACTS.COLLABOLATORS_TITLE',
      path: 'collaborators',
    },
    {
      title: 'WM_HOME.CONTACTS.ALL_TITLE',
      path: 'all',
    },
    {
      title: 'WM_HOME.CONTACTS.SAVED_TITLE',
      path: 'saved',
    },
  ],
};
