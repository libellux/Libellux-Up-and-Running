<template>
  <div
    v-if="visible"
    class="social-share"
  >
    <ul
      class="social-share-list"
      role="listbox"
    >
      <social-share-network
        v-for="network in userNetworks"
        :key="network.name"
        :network="network"
        :is-plain="isPlain"
      />
      <slot />
    </ul>
  </div>
</template>

<script>
import SocialShareNetwork from './SocialShareNetwork.vue'
import {
  isExternalUrl,
  getMetaContentByName,
} from '../utils'

const inBrowser = typeof window !== 'undefined'
const $window = inBrowser ? window : null

export default {
  components: {
    SocialShareNetwork,
  },

  props: {
    networks: {
      type: Array,
      default: () => ['twitter', 'facebook', 'reddit'],
    },

    tags: {
      type: Array,
      default: () => [],
    },

    twitterUser: {
      type: String,
      default: undefined,
    },

    fallbackImage: {
      type: String,
      default: undefined,
    },

    autoQuote: {
      type: Boolean,
      default: true,
    },

    isPlain: {
      type: Boolean,
      default: false,
    },

    networksData: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    visible () {
      return this.networks.length && !this.$frontmatter.noSocialShare
    },

    url () {
      return (
        this.$frontmatter.$shareUrl ||
        this.$frontmatter.shareUrl ||
        ($window ? $window.location.href : '')
      )
    },

    title () {
      return (
        this.$frontmatter.$shareTitle ||
        this.$frontmatter.shareTitle ||
        this.$frontmatter.title ||
        ($window ? $window.document.title : this.$title)
      )
    },

    description () {
      return (
        this.$frontmatter.$shareDescription ||
        this.$frontmatter.shareDescription ||
        this.$frontmatter.description ||
        getMetaContentByName('description') ||
        this.$description
      )
    },

    media () {
      const mediaUrl = (
        this.$frontmatter.$shareImage ||
        this.$frontmatter.shareImage ||
        this.$frontmatter.image ||
        this.fallbackImage
      )

      if (!mediaUrl) return ''

      if (isExternalUrl(mediaUrl)) return mediaUrl

      const realUrl = $window
        ? `${$window.location.origin}${this.$withBase(mediaUrl)}`
        : ''

      return realUrl
    },

    quote () {
      return (
        this.$frontmatter.$shareQuote ||
        this.$frontmatter.shareQuote ||
        (this.autoQuote ? this.description : '')
      )
    },

    hashtags () {
      const shareTags = (
        this.$frontmatter.$shareTags ||
        this.$frontmatter.shareTags ||
        this.$frontmatter.tags ||
        this.$frontmatter.tag ||
        this.tags ||
        getMetaContentByName('keywords')
      )

      if (Array.isArray(shareTags)) {
        return shareTags.join(',')
      }

      if (typeof shareTags === 'string') {
        return shareTags.replace(/\s/g, '')
      }

      return ''
    },
  },

  data () {
    // Remove duplicated networks
    const networks = [...new Set(this.networks)]
    const userNetworks = Object.keys(this.networksData)
      .map(name => ({ name, ...this.networksData[name] }))
      .filter(network => networks.includes(network.name))
      .sort((prev, next) => networks.indexOf(prev.name) - networks.indexOf(next.name))

    return {
      userNetworks,
      popup: {
        status: false,
        resizable: false,
        toolbar: false,
        menubar: false,
        scrollbars: false,
        location: false,
        directories: false,
        width: 626,
        height: 436,
        top: 0,
        left: 0,
        interval: null,
      },
    }
  },

  methods: {
    /**
     * Opens sharer popup
     *
     * @param {string} shareUrl target sharer url
     * @param {string} name sharer name
     * @param {string} url current page url
     */
    openSharer (shareUrl, { name, url }) {
      // If a popup window already exist it will be replaced, trigger a close event
      let popupWindow = null

      popupWindow = window.open(
        shareUrl,
        'sharer',
        'status=' + (this.popup.status ? 'yes' : 'no') +
        ',height=' + this.popup.height +
        ',width=' + this.popup.width +
        ',resizable=' + (this.popup.resizable ? 'yes' : 'no') +
        ',left=' + this.popup.left +
        ',top=' + this.popup.top +
        ',screenX=' + this.popup.left +
        ',screenY=' + this.popup.top +
        ',toolbar=' + (this.popup.toolbar ? 'yes' : 'no') +
        ',menubar=' + (this.popup.menubar ? 'yes' : 'no') +
        ',scrollbars=' + (this.popup.scrollbars ? 'yes' : 'no') +
        ',location=' + (this.popup.location ? 'yes' : 'no') +
        ',directories=' + (this.popup.directories ? 'yes' : 'no'),
      )

      popupWindow.focus()

      // Create an interval to detect popup closing event
      this.popup.interval = setInterval(() => {
        if (popupWindow && popupWindow.closed) {
          clearInterval(this.popup.interval)

          popupWindow = undefined

          this.$root.$emit('social_share_close', { name, url })
        }
      }, 500)
    },
  },

  /**
   * Sets popup default dimensions.
   */
  mounted () {
    if (!inBrowser) return false

    /**
     * Center the popup on dual screens
     * http://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen/32261263
     */
    const docElem = $window.document.documentElement
    const screen = $window.screen
    const dualScreenLeft = $window.screenLeft !== undefined
      ? $window.screenLeft
      : screen.left
    const dualScreenTop = $window.screenTop !== undefined
      ? $window.screenTop
      : screen.top
    const width = $window.innerWidth
      ? $window.innerWidth
      : (docElem.clientWidth ? docElem.clientWidth : screen.width)
    const height = $window.innerHeight
      ? $window.innerHeight
      : (docElem.clientHeight ? docElem.clientHeight : screen.height)

    this.popup.left = ((width / 2) - (this.popup.width / 2)) + dualScreenLeft
    this.popup.top = ((height / 2) - (this.popup.height / 2)) + dualScreenTop
  },
}
</script>
