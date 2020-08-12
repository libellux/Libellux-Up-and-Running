const { resolve } = require('path')
const deepMerge = require('deepmerge')
const { RE_EMAIL, ICON_EMAIL } = require('./constants')
const BASE_NETWORKS = require('./networks.json')

/**
 * Check if given value is valid email address
 * @param {string} value  given value
 *
 * @returns {boolean} `true` if given an email address
 */
function isEmail (value) {
  return RE_EMAIL.test(value)
}

module.exports = ({
  email,
  extendsNetworks = {},
  noGlobalSocialShare,
  ...options
} = {}) => {
  const networksData = deepMerge({
    ...BASE_NETWORKS,
    ...isEmail(email) ? {
      email: {
        sharer: `mailto:${email}?subject=@title&body=@url%0D%0A%0D%0A@description`,
        type: 'direct',
        icon: ICON_EMAIL,
        color: '#d4237a',
      },
    } : {},
  }, extendsNetworks)
  const socialShareOptions = { ...options, networksData }

  return {
    name: 'social-share',

    enhanceAppFiles: resolve(__dirname, 'enhanceApp.js'),

    clientDynamicModules () {
      return {
        name: 'social-share.js',
        content: `export default ${JSON.stringify(socialShareOptions)}`,
      }
    },

    globalUIComponents: noGlobalSocialShare ? [] : ['GlobalSocialShare'],
  }
}
