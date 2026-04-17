export const enCommon = {
  brand: 'UK Visa Central',
  navigation: {
    home: 'Home',
    apply: 'Get my visa',
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
      name: 'UKVisaCentral',
      description:
        'We provide comprehensive guidance and support throughout your visa journey with expert assistance and reliable service.',
      since: 'Serving clients worldwide since 2016',
      location: 'U.S. Vital Documents LLC, 312 W. 2nd St, Casper, WY 82601, US',
    },
    sections: {
      support: 'Support',
      stayConnected: 'Stay Connected',
      newsletterText: 'Get the latest visa updates and news delivered to your inbox.',
      subscribeButton: 'Subscribe',
      followUs: 'Follow us on social media',
    },
    supportLinks: {
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
        'We are an independent application support service for UK travel authorisations and visas. We are not affiliated with, endorsed by, or connected to the UK Government or Home Office. Official ETA and visa decisions are made solely by UK authorities.',
        'We work with certified immigration professionals to provide assistance with ETA and Visitor Visa applications. Our service covers application guidance, data and document checks, submission support, and customer assistance to help reduce errors and save time.',
        'Our fees are transparent. A full breakdown of service fees is clearly shown at checkout before payment is made. Once payment is completed, work on your application begins immediately and service fees are non-refundable.',
      ],
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()} UKVisaCentral. All rights reserved.`,
    },
  },
  notFound: {
    title: 'Page not found',
    link: 'Back to home',
  },
} as const
