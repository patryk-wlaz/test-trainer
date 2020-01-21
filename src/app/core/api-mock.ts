import { InMemoryDbService } from 'angular-in-memory-web-api';

const mockups = {
  mockedbrands: [
    {
      id: 'b96903ae-018a-4c2c-ab76-136380c47e11',
      name: 'Mini',
      description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'approved',
      contactPhone: '111222333',
      contactName: 'Gladys Bell',
      contactEmail: 'gladys@bell.com',
      logo: 'https://agencyosblobstorage.blob.core.windows.net/mdm/media/mini.jpg',
      websiteUrl: 'https://www.google.com/',
      facebookProfileUrl: 'https://www.google.com/',
      instagramProfileUrl: 'https://www.google.com/',
      clientId: 'dc03f34e-4cc1-4f46-9737-85baa183e99e',
      country: {
        code: 'GB',
        name: 'United Kingdom of Great Britain and Northern Ireland',
      },
      categoryNames: [
        'Automotive: Cars',
      ],
    },
    {
      id: '6930f373-e4fc-4d24-8a6f-47e1270fd125',
      name: 'BMW',
      description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'approved',
      contactPhone: '111222333',
      contactName: 'Gladys Bell',
      contactEmail: 'gladys@bell.com',
      logo: 'https://agencyosblobstorage.blob.core.windows.net/mdm/media/bmw_i7Ege2G.png',
      websiteUrl: 'https://www.google.com/',
      facebookProfileUrl: 'https://www.google.com/',
      instagramProfileUrl: 'https://www.google.com/',
      clientId: 'dc03f34e-4cc1-4f46-9737-85baa183e99e',
      country: {
        code: 'GB',
        name: 'United Kingdom of Great Britain and Northern Ireland',
      },
      categoryNames: [
        'Automotive: Cars',
      ],
    },
  ],
  mockedclients: [
    {
      id: 'dc03f34e-4cc1-4f46-9737-85baa183e99e',
      name: 'BMW',
      logo: 'assets/img/clients/bmw.png',
      mine: true,
      description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      markets: [
        {
          status: 'pitch',
          name: 'United Kingdom of Great Britain and Northern Ireland',
          code: 'GB',
          mine: true,
        },
        {
          status: 'pitch',
          name: 'Poland',
          code: 'PL',
          mine: true,
        },
        {
          status: 'pitch',
          name: 'Czech',
          code: 'CZ',
          mine: false,
        },
        {
          status: 'pitch',
          name: 'United States of America',
          code: 'US',
          mine: false,
        },
      ],
    },
    {
      id: '3d92a509-2e6e-477c-9529-5911097ba12e',
      name: 'IKEA',
      logo: 'assets/img/clients/ikea.png',
      mine: true,
      markets: [
        {
          status: 'pitch',
          name: 'USA',
          code: 'US',
          mine: true,
        }],
    },
    {
      id: '3fd4726a-80da-4353-94d2-928d87a79ebc',
      name: 'British Airways',
      logo: 'assets/img/clients/british-airways.png',
      mine: false,
    },
    {
      id: '40d5aa2b-6631-43d1-91f7-695a66e87fca',
      name: 'Eurostar',
      logo: 'assets/img/clients/eurostar.png',
      mine: false,
    },
    {
      id: 'a68eb6c9-c94a-4024-b0ca-6b7bf03bb9eb',
      name: 'Colgate-Palmolive',
      logo: 'assets/img/clients/colgate-palmolive.png',
      mine: false,
    },
    {
      id: '092141bb-96c1-46cc-b3c1-c90e6f38b521',
      name: 'Danone',
      logo: 'assets/img/clients/danone.png',
      mine: false,
    },
  ],
  recentWork: [
    {
      id: 1,
      title: 'BMW',
      logo: 'assets/img/clients/bmw.png',
      mine: true,
      market: 'USA',
    },
    {
      id: 2,
      title: 'Danone',
      logo: 'assets/img/clients/danone.png',
      mine: true,
      market: 'UK',
    },
    {
      id: 3,
      title: 'Colgate',
      logo: 'assets/img/clients/colgate-palmolive.png',
      mine: true,
      market: 'USA',
    },
  ],
  articles: [
    {
      title: 'Toby Jenner Named Global CEO of Wavemaker',
      time: 1575473586000,
      thumbnailUrl:
        'https://wavemakerglobal.com/sites/default/files/lead-images/Toby%20Jenner%202019%20casual.jpg',
    },
    {
      title:
        'Wavemaker UK Wins 7 Media Week Awards, Including Agency Partner of the Year for the Second Year in a Row',
      time: 1575390786000,
      // tslint:disable-next-line: max-line-length
      thumbnailUrl:
        'https://wavemakerglobal.com/sites/default/files/lead-images/Media%20Week%20Award%20Win%20Photo.jpg',
    },
    {
      title: 'Effies: Wavemaker Poland is the Most Effective Agency in 20 Years',
      time: 1574872386000,
      thumbnailUrl: 'https://wavemakerglobal.com/sites/default/files/lead-images/COV_2427.jpg',
    },
    {
      title: 'Wavemaker Malaysia wins at the MMA Awards',
      time: 1572885186000,
      thumbnailUrl: 'https://wavemakerglobal.com/sites/default/files/lead-images/MMA2.jpg',
    },
  ],
  mockedusers: {
    find: () => ({
      // to pretend that mockedusersmyself is collection - in memory api needs it
      id: '7f014d0a-545e-4c15-9b4d-63516f92efd2',
      mimId: 7,
      azureId: 'c76127fc-7f41-472b-942c-a5e47d413eaa',
      firstname: 'HTuser1',
      userPrincipalName: 'HTuser1@insidemediatst.onmicrosoft.com',
      lastname: null,
      email: 'HTuser1@anotheremail.com',
      active: true,
      agencyId: 'f5692f07-18f1-4515-be97-b442d01da0e6',
      countryId: '023f0590-1593-42ad-b5b5-dda3f6bb6d51',
      departmentId: null,
      createdAt: '2019-06-24T07:43:26.372Z',
      updatedAt: '2019-11-27T12:37:53.113Z',
      deletedAt: null,
      userRoles: [
        {
          id: '1fc4007f-2854-42d5-a976-cf88365b08da',
          name: 'user',
          applicationId: '4d70963f-2486-4c1f-bc47-d9edf24c908a',
          countries: [],
          agencies: [],
          permissions: [],
        },
        {
          id: '4963b8ca-0df5-4202-99e4-0dadeb08924a',
          name: 'MarketAdmin',
          applicationId: '4b6e7815-528a-4ca8-b047-85a1e2e58d67',
          countries: [],
          agencies: [],
          permissions: [
            {
              key: 'SHELF_SPEND_ACCESS',
            },
          ],
        },
        {
          id: '301465da-3987-44b6-baa0-9b3c99f840b6',
          name: 'ShelfSpendUser',
          applicationId: '921db418-e2a2-4a42-8f13-13780aee33f1',
          countries: [],
          agencies: [],
          permissions: [
            {
              key: 'SHELF_SPEND_ACCESS',
            },
          ],
        },
      ],
      azureIdentityCheckedAt: 1574947535827,
      avatar: 'assets/mockups/user-avatar-mockup.svg',
    }),
  },
  contacts: [
    {
      name: 'Angela Crawford',
      avatar: 'assets/mockups/contacts/AngelaCrawford.jpg',
      city: 'New York',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Kenneth Cummings',
      avatar: 'assets/mockups/contacts/KennethCummings.jpg',
      city: 'Montgomery',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Joan Warren',
      avatar: 'assets/mockups/contacts/JoanWarren.jpg',
      city: 'New York',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Zachary Peterson',
      avatar: 'assets/mockups/contacts/ZacharyPeterson.jpg',
      city: 'Leeds',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Janice Price',
      avatar: 'assets/mockups/contacts/JanicePrice.jpg',
      city: 'Miami',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Samuel Reed',
      avatar: 'assets/mockups/contacts/SamuelReed.jpg',
      city: 'London',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Tammy Garcia',
      avatar: 'assets/mockups/contacts/TammyGarcia.jpg',
      city: 'London',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Richard Hansen',
      avatar: 'assets/mockups/contacts/RichardHansen.jpg',
      city: 'Manchester',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Kimberly Valdez',
      avatar: 'assets/mockups/contacts/KimberlyValdez.jpg',
      city: 'Milano',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Megan Sanders',
      avatar: 'assets/mockups/contacts/MeganSanders.jpg',
      city: 'New York',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Sara Wong',
      avatar: 'assets/mockups/contacts/SaraWong.jpg',
      city: 'Jacksonville',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Sharon Gutierrez',
      avatar: 'assets/mockups/contacts/SharonGutierrez.jpg',
      city: 'West Covina',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Bryan Montgomery',
      avatar: 'assets/mockups/contacts/BryanMontgomery.jpg',
      city: 'Scranton',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Judy Allen',
      avatar: 'assets/mockups/contacts/JudyAllen.jpg',
      city: 'Tacoma',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Jonathan Doris',
      avatar: 'assets/mockups/contacts/JonathanDoris.jpg',
      city: 'Pomona',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Joyce Rodriguez',
      avatar: 'assets/mockups/contacts/JoyceRodriguez.jpg',
      city: 'Akron',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Jordan Phillips',
      avatar: 'assets/mockups/contacts/JordanPhillips.jpg',
      city: 'Swansea',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Rebecca Douglas',
      avatar: 'assets/mockups/contacts/RebeccaDouglas.jpg',
      city: 'Bournemouth',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'Anna King',
      avatar: 'assets/mockups/contacts/AnnaKing.jpg',
      city: 'Southend',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
    {
      name: 'George Porter',
      avatar: 'assets/mockups/contacts/GeorgePorter.jpg',
      city: 'London',
      position: 'Senior Planner',
      experience: ['Aviation', 'Automotive'],
    },
  ],
};

export class APIMock implements InMemoryDbService {
  createDb() {
    return mockups;
  }
}
