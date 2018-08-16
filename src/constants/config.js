const devMode = (process.env.NODE_ENV !== 'development');

export default {
  // App Details
  appName: 'MC2 Serverless Client Stack',

  // Build Configuration - Debug or Release
  DEV: devMode,

  // Google Analytics - uses a 'dev' account while testing (first in order)
  gaTrackingId: (devMode) ? 'UA-12345678-2' : 'UA-12345678-1',
};
