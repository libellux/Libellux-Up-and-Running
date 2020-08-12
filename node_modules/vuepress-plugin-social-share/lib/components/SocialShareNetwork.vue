<template>
  <li
    :key="network.name"
    class="social-share-network"
    role="option"
  >
    <button
      @click="share"
      :data-link="network.type=== 'popup'
        ? `#share-${network.name}`
        : shareUrl"
      :data-action="network.type=== 'popup'
        ? null
        : network.action"
      :title="network.name"
      class="social-share-btn"
      type="button"
      role="button"
    >
      <span
        :style="{ color: isPlain ? false : network.color }"
        v-html="network.icon"
        v-if="isSvgIcon"
        class="social-share-icon-svg"
        focusable="false"
      />

      <span
        v-else
        :style="{ backgroundImage: `url(${network.icon})` }"
        class="social-share-icon-img"
      />
    </button>
  </li>
</template>

<script>
import { isSVG } from '../utils'

export default {
  name: 'SocialShareNetwork',

  computed: {
    isSvgIcon () {
      return isSVG(this.network.icon)
    },

    shareUrl () {
      let { name, sharer } = this.network
      const {
        url,
        title,
        quote,
        media,
        hashtags,
        description,
        twitterUser,
      } = this.$parent

      /**
       * On IOS, Twitter sharing should't have a empty hashtag parameter
       * See https://github.com/nicolasbeauvais/vue-social-sharing/issues/143
       */
      if (['twitter'].includes(name) && !hashtags.length) {
        sharer = sharer.replace('&hashtags=@hashtags', '')
      }

      return sharer
        .replace(/@url/g, encodeURIComponent(url))
        .replace(/@title/g, encodeURIComponent(title))
        .replace(/@media/g, media)
        .replace(/@description/g, encodeURIComponent(description))
        .replace(/@quote/g, encodeURIComponent(quote))
        .replace(/@hashtags/g, this.generateHashTags(hashtags))
        .replace(/@twitteruser/g, twitterUser ? `&via=${twitterUser}` : '')
    },
  },

  props: {
    network: {
      type: Object,
      validator (network) {
        return network.sharer && network.icon
      },
      required: true,
    },

    isPlain: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    /**
     * Encode hashtags for the specified social network
     * @param {string} hashtags All hashtags specified
     *
     * @returns {string} hashtags string
     */
    generateHashTags (hashtags = '') {
      const { name } = this.network

      if (['facebook'].includes(name) && hashtags.length) {
        return `%23${hashtags.split(',')[0]}`
      }

      return hashtags
    },

    /**
     * Shares URL in specified network
     */
    share () {
      const { name, type } = this.network
      const { url } = this.$parent

      switch (type) {
        case 'popup':
          this.$parent.openSharer && this.$parent.openSharer(this.shareUrl, { name, url })
          break

        case 'direct':
          window.open(this.shareUrl, '_self')
          break

        default:
          break
      }

      this.$root.$emit('social_share_open', { name, url })
    },
  },
}
</script>
