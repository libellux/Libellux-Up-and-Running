import './styles/index.styl'
import socialShareOptions from '@dynamic/social-share'
import SocialShare from './components/SocialShare.vue'
import GlobalSocialShare from './components/GlobalSocialShare.vue'

export default ({ Vue }) => {
  const {
    networks,
    twitterUser,
    fallbackImage,
    autoQuote,
    isPlain,
    networksData,
  } = socialShareOptions

  Vue.component('SocialShare', {
    functional: true,

    props: {
      networks: {
        type: Array,
        default: undefined,
      },

      tags: {
        type: Array,
        default: undefined,
      },

      isPlain: {
        type: Boolean,
        default: undefined,
      },
    },

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { data, props, parent }) {
      if (parent._isMounted) {
        return h(SocialShare, {
          ...data,
          props: {
            networks: props.networks || networks,
            tags: props.tags,
            twitterUser,
            fallbackImage,
            autoQuote,
            isPlain: props.isPlain || isPlain,
            networksData,
          },
        })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })

  Vue.component('GlobalSocialShare', {
    functional: true,

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { parent }) {
      if (parent._isMounted) {
        return h(GlobalSocialShare, {
          attrs: {
            networks,
            isPlain,
            twitterUser,
            fallbackImage,
            autoQuote,
            networksData,
          },
        })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })
}
