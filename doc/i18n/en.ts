module.exports = {
  common: {
    viewCode: 'View code',
    name: 'Name',
    props: 'Props',
    type: 'Type',
    default: 'default',
    required: 'Required',
  },

  error: {
    title: 'Not found',
    notFound: 'Oh, could not find what you are looking for.',
    occurred: 'Oups, an error occurred.',
  },

  props: {
    color: 'Color',
    default: 'Default',
    disabled: 'Disabled',
    expanded: 'Expanded',
    external: 'External',
    filled: 'Filled',
    group: 'Group',
    icon: 'Icon',
    iconPosition: 'Icon position',
    image: 'Image',
    label: 'Label',
    letter: 'Letter',
    level: 'Level',
    link: 'Link',
    loading: 'Loading',
    multiple: 'Multiple',
    password: 'Password',
    removable: 'Removable',
    rounded: 'Rounded',
    secondary: 'Secondary',
    size: 'Size',
    summary: 'Summary',
    tag: 'Tag',
    variant: 'Variant',
  },

  sections: {
    foundations: {
      title: 'Foundations',

      colors: {
        title: 'Colors',
        primary: 'Primary',
        shades: 'Shades',
        contrast: 'Contrast',
        accents: 'Accents',
      },

      icons: {
        title: 'Icons',
      },

      layout: {
        title: 'Layout',
      },

      typography: {
        title: 'Typography',
      },
    },

    atoms: {
      title: 'Atoms',

      avatar: {
        title: 'Avatar',
      },

      button: {
        title: 'Button',
      },

      checkbox: {
        title: 'Checkbox',
      },

      collapse: {
        title: 'Collapse',
        events: {
          toggle: {
            description: 'triggers when collapse is toggled',
          },
        },
        methods: {
          toggleExpand: {
            description: 'Toggle between collapse and expand',
          },
          resizeContent: {
            description: 'Resize content container to fit child element size',
          },
        },
      },

      divider: {
        title: 'Divider',
      },

      headline: {
        title: 'Headline',
      },

      icon: {
        title: 'Icon',
      },

      input: {
        title: 'Input',
      },

      link: {
        title: 'Link',
      },

      note: {
        title: 'Note',
      },

      skeleton: {
        title: 'Skeleton',
      },

      tabs: {
        title: 'Tabs',
      },

      tag: {
        title: 'Tag',
      },

      toggle: {
        title: 'Toggle',
      },
    },

    organisms: {
      title: 'Organisms',

      form: {
        title: 'Form',

        email: 'Email',
        emailRequired: 'Email is a required field',
        emailValidation: 'Email is invalid',
        forgotPassword: 'Forgot Password?',
        password: 'Password',
        passwordRequired: 'Password is a required field',
        passwordPattern: 'Password requires UpperCase, LowerCase, Number/SpecialChar and min 8 Chars',
        signIn: 'Sign in',
        signUp: 'Sign up',
        username: 'Username',
        vueForm: 'vue-form',
      },
    },
  },

  theme: {
    dark: 'Dark',
    light: 'Light',
    system: 'System',
  },

  examples: {
    input: {
      label: 'Input label',
      placeholder: 'Input placeholder',
    },
    link: 'This is a link',
    list: {
      1: 'Apple',
      2: 'Orange',
      3: 'Mango',
    },
    sentence: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
