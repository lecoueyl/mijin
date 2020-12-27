module.exports = {
  common: {
    default: 'Default',
    description: 'Description',
    events: 'Events',
    methods: 'Methods',
    name: 'Name',
    properties: 'Properties',
    props: 'Props',
    required: 'Required',
    slots: 'Slots',
    type: 'Type',
    viewCode: 'View code',
  },

  error: {
    title: 'Not found',
    notFound: 'Oh, could not find what you are looking for.',
    occurred: 'Oups, an error occurred.',
  },

  props: {
    align: 'Align',
    bordered: 'Bordered',
    circle: 'Circle',
    color: 'Color',
    default: 'Default',
    disabled: 'Disabled',
    dismissible: 'Dismissible',
    expanded: 'Expanded',
    external: 'External',
    filled: 'Filled',
    fixed: 'Fixed',
    group: 'Group',
    gutter: 'Gutter',
    icon: 'Icon',
    iconPosition: 'Icon position',
    image: 'Image',
    inline: 'Inline',
    label: 'Label',
    letter: 'Letter',
    level: 'Level',
    link: 'Link',
    loading: 'Loading',
    multiple: 'Multiple',
    orderedList: 'Ordered list',
    password: 'Password',
    placeholder: 'Placeholder',
    position: 'Position',
    removable: 'Removable',
    rounded: 'Rounded',
    score: 'Score',
    secondary: 'Secondary',
    size: 'Size',
    summary: 'Summary',
    tag: 'Tag',
    tooltip: 'Tooltip',
    truncate: 'Truncate',
    underline: 'Underline',
    variant: 'Variant',
  },

  sections: {
    foundations: {
      title: 'Foundations',

      colors: {
        title: 'Colors',
        primary: 'Primary',
        gray: 'Gray',
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

      badge: {
        title: 'Badge',
      },

      button: {
        title: 'Button',
      },

      chart: {
        title: 'Chart',
      },

      checkbox: {
        title: 'Checkbox',
      },

      collapse: {
        title: 'Collapse',
        events: {
          toggle: {
            description: 'Emitted when collapse is toggled',
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

      datepicker: {
        title: 'Datepicker',
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

      list: {
        title: 'List',
      },

      modal: {
        title: 'Modal',
      },

      note: {
        title: 'Note',
      },

      popover: {
        title: 'Popover',
        events: {
          close: {
            description: 'Emitted when popover is closed',
          },
          open: {
            description: 'Emitted when popover is opened',
          },
          toggle: {
            description: 'Emitted when popover is toggled',
          },
        },
        methods: {
          close: {
            description: 'Close popover if open',
          },
          open: {
            description: 'Open popover if close',
          },
          toggle: {
            description: 'Toggle popover visibility',
          },
        },
        slots: {
          content: {
            description: 'Popover content',
          },
        },
      },

      popoverItem: {
        title: 'Popover Item',
        slots: {
          action: {
            description: 'Displayed on the right end side of the item',
          },
          icon: {
            description: 'Displayed on the left side of the item',
          },
        },
      },

      progress: {
        title: 'Progress',
      },

      radio: {
        title: 'Radio',
        slots: {
          summary: {
            description: 'Summary placeholder',
          },
        },
      },

      select: {
        title: 'Select',
        events: {
          select: {
            description: 'Emitted when an option is  selected',
          },
        },
      },

      skeleton: {
        title: 'Skeleton',
      },

      status: {
        title: 'Status',
      },

      table: {
        title: 'Table',
      },

      tabs: {
        title: 'Tabs',
      },

      tag: {
        title: 'Tag',
        events: {
          remove: {
            description: 'Emitted when remove button is triggered',
          },
        },
      },

      textarea: {
        title: 'Textarea',
      },

      toggle: {
        title: 'Toggle',
      },
    },

    organisms: {
      title: 'Organisms',

      form: {
        title: 'Form',

        agreedToTerms: 'Agreed to {terms} and {privacy} statements.',
        alreadyAUser: 'Already a user? {login}',
        department: 'Department',
        email: 'Email',
        emailRequired: 'Email is a required field',
        emailValidation: 'Email is invalid',
        forgotPassword: 'Forgot Password?',
        login: 'Log in',
        password: 'Password',
        passwordPattern: 'Password requires UpperCase, LowerCase, Number/SpecialChar and min 8 Chars',
        passwordRequired: 'Password is a required field',
        privacy: 'Privacy',
        selectDepartment: 'Select a department',
        signIn: 'Sign in',
        signUp: 'Sign up',
        termsOfUse: 'Terms of Use',
        username: 'Username',
        usernamePlaceholder: 'First and Last name',
        vueForm: 'vue-form',
      },

      popover: {
        title: 'Popover',

        actionMenu: 'Action menu',
        addToCalendar: 'Add to calendar',
        copyLink: 'Copy link',
        delete: 'Delete',
        edit: 'Edit',
        fullWidth: 'Full width',
        lastEdit: 'Last edition by Leonard Lecouey',
        openApp: 'Open in App',
        share: 'Share',
        smallText: 'Small text',
        today: 'Today at 13:37',
        undo: 'Undo',
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
    select: {
      label: 'Select label',
      placeholder: 'Select placeholder',
    },
    sentence: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    table: {
      header: {
        1: 'Name',
        2: 'Description',
        3: 'Count',
      },
      row: {
        1: {
          1: 'Banana',
          2: 'A banana is an elongated, edible fruit, botanically a berry. Produced by several kinds of large herbaceous flowering plants in the genus Musa',
          3: '20',
        },
        2: {
          1: 'Orange',
          2: 'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis',
          3: '136',
        },
      },
    },
  },
};
