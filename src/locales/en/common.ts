export const enCommon = {
  brand: 'UK Visa Portal',
  navigation: {
    home: 'Home',
    apply: 'Get my visa',
    articles: 'UK Travel Articles',
    aboutUs: 'About Us',
    myOrders: 'My Orders',
    login: 'Log in',
    logout: 'Log out',
    myApplications: 'My Applications',
    accountSettings: 'Account Settings',
  },
  buttons: {
    applyNow: 'APPLY NOW',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    saveAndContinue: 'Save & Continue',
    startApplying: 'Start Applying',
    loadMore: 'Load More',
  },
  forms: {
    search: 'Search...',
    noCountriesFound: 'No countries found',
  },
  preferences: {
    title: 'Preferences',
    language: 'Language',
    currency: 'Currency',
    updatePreferences: 'Update Preferences',
  },
  footer: {
    company: {
      name: 'UKVisaPortal',
      description:
        'We provide comprehensive guidance and support throughout your visa journey with expert assistance and reliable service.',
      since: 'Serving clients worldwide since 2016',
      location: 'London, United Kingdom',
    },
    sections: {
      articles: 'Articles',
      support: 'Support',
      stayConnected: 'Stay Connected',
      newsletterText: 'Get the latest visa updates and news delivered to your inbox.',
      subscribeButton: 'Subscribe',
      followUs: 'Follow us on social media',
    },
    articles: {
      edinburghGuide: 'Edinburgh Travel Guide',
      hiddenGems: 'Hidden Gems of the UK',
      visaGuide: 'Complete UK Visa Guide 2025',
      britishFood: 'Ultimate Guide to British Food',
      londonWithKids: 'London with Kids',
      familyActivities: 'Ultimate UK Family Activities Guide',
    },
    supportLinks: {
      helpCenter: 'Help Center',
      contactSupport: 'Contact Support',
      refundPolicy: 'Refund Policy',
    },
    legalLinks: {
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
    },
    importantDisclaimer: {
      title: 'Important Disclaimer',
      paragraphs: [
        'We are an independent application support service for UK travel authorisations and visas. We are not affiliated with the UK government. Official ETA and visa decisions are made solely by UK authorities.',
        'We work with certified immigration professionals to provide assistance with ETA and Visitor Visa applications. Our service covers application guidance, data and document checks, submission support, and customer assistance to help reduce errors and save time.',
        'Our fees are transparent. A full breakdown of service fees is clearly shown at checkout before payment is made. Once payment is completed, work on your application begins immediately and service fees are non refundable.',
      ],
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()} UKVisaPortal. All rights reserved.`,
    },
  },
  notFound: {
    title: 'Page not found',
    link: 'Back to home',
  },
} as const
