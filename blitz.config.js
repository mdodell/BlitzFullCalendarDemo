const { sessionMiddleware, simpleRolesIsAuthorized } = require("blitz")
const withTM = require("next-transpile-modules")(["@fullcalendar"])

module.exports = withTM({
  middleware: [
    sessionMiddleware({
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Note: we provide webpack above so you should not `require` it
  //   // Perform customizations to webpack config
  //   // Important: return the modified config
  //   return config
  // },
})
