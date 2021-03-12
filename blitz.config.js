const { sessionMiddleware, simpleRolesIsAuthorized } = require("blitz")
const withTM = require("next-transpile-modules")(["@fullcalendar"])

module.exports = withTM({
  middleware: [
    sessionMiddleware({
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
})
