import VAlert from './VAlert.vue';
import {themeColors} from '@morpheme/utils/colors';
import type {Meta, Story, StoryFn} from '@storybook/vue3';
import Icon from '@morpheme/icon';
import AlertVModelStory from './stories/AlertVModelStory.vue';
import AlertTransitionStory from './stories/AlertTransitionStory.vue';
import AlertCustomStory from './stories/AlertCustomStory.vue';
import {ref} from 'vue';
import VBtn from '@morpheme/button';
import VAlertGroup from './VAlertGroup.vue';
import VAlertTitle from './VAlertTitle.vue';

export default {
  title: 'Components/Alert',
  component: VAlert,
  argTypes: {
    color: {
      control: {type: 'select'},
      options: themeColors,
    },
  },
  args: {
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    'my-component': VAlert,
  },
  setup() {
    return {args, themeColors};
  },
  template: `
<div class="space-y-2">
  <my-component
    v-for="color in themeColors"
    :key="color"
    v-bind="args"
    :color="color"
  >
    You changes have been saved.
  </my-component>
</div>
`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-alert>Alert text</v-alert>
<v-alert color="primary">Alert text</v-alert>
<v-alert color="secondary">Alert text</v-alert>
<v-alert color="info">Alert text</v-alert>
<v-alert color="warning">Alert text</v-alert>
<v-alert color="success">Alert text</v-alert>
<v-alert color="error">Alert text</v-alert>
<v-alert color="dark">Alert text</v-alert>
      `,
    },
  },
};

export const Solid = Template.bind({});
Solid.args = {
  solid: true,
};
Solid.parameters = {
  docs: {
    source: {
      code: `<v-alert solid>Alert text</v-alert>`,
    },
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};
Outlined.parameters = {
  docs: {
    source: {
      code: `<v-alert solid>Alert text</v-alert>`,
    },
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  border: true,
  dismissable: true,
  icon: 'ic:round-info'
};
Bordered.parameters = {
  docs: {
    source: {
      code: `<v-alert border>Alert text</v-alert>`,
    },
  },
};

export const BorderPosition = (args: any) => ({
  components: {VAlert, VAlertTitle, Icon},
  setup() {
    const positions = ['left', 'top', 'right', 'bottom']
    return {args, positions};
  },
  template: `
    <v-alert
      v-for="position in positions"
      :key="position"
      :border-position="position"
      class="mb-2"
      bordered
      v-bind="args"
    >
      <VAlertTitle>Alert: {{ position }}<VAlertTitle>
      Change a few things up and try submitting again.
    </v-alert>
  `,
});

export const Tile = Template.bind({});
Tile.args = {
  tile: true,
};
Tile.parameters = {
  docs: {
    source: {
      code: `<v-alert tile>Alert text</v-alert>`,
    },
  },
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  dismissable: true,
};
Dismissable.parameters = {
  docs: {
    source: {
      code: `<v-alert dismissable>Alert text</v-alert>`,
    },
  },
};

export const Icons = Template.bind({});
Icons.args = {
  icon: 'success',
};
Icons.parameters = {
  docs: {
    source: {
      code: `<v-alert icon="success">Alert text</v-alert>`,
    },
  },
};

export const CustomSlots = () => ({
  components: {VAlert, Icon},
  template: `
<v-alert color="error" dismissable>
  <template #icon>
    <Icon name="ri:alarm-warning-fill" class="fill-current w-6 h-6 mr-2" />
  </template>
  <template #x-icon>
    <Icon name="ri:close-fill" class="fill-current w-6 h-6 text-error-500" />
  </template>

  Change a few things up and try submitting again.
</v-alert>
  `,
});
CustomSlots.parameters = {
  docs: {
    source: {
      code: `<v-alert color="error" dismissable>
  <template #icon>
    <Icon name="ri:alarm-warning-fill" class="fill-current w-6 h-6 mr-2" />
  </template>
  <template #x-icon>
    <Icon name="ri:close-fill" class="fill-current w-6 h-6 text-error-500" />
  </template>

  Change a few things up and try submitting again.
</v-alert>`,
    },
  },
};

export const VModel = () => ({
  components: {AlertVModelStory},
  template: `<AlertVModelStory />`,
});

export const Transition = () => ({
  components: {AlertTransitionStory},
  template: `<AlertTransitionStory />`,
});

export const Custom = () => ({
  components: {AlertCustomStory},
  template: `<AlertCustomStory />`,
});

export const DarkMode = () => ({
  components: {VAlert, Icon},
  setup() {
    return {
      variants: ['default', 'solid', 'outlined', 'bordered'],
      themeColors,
    };
  },
  template: `
<div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
  <div v-for="variant in variants" :key="variant" class="mt-5">
    <p class="font-semibold text-lg mb-2">{{ variant }}</p>
    <v-alert
      v-for="color in themeColors"
      :color="color"
      :key="color"
      class="mb-2"
      icon="ri:information-fill"
      dismissable
      v-bind:[variant]="true"
    >
      Change a few things up and try submitting again.
    </v-alert>
  </div>
</div>
  `,
});

export const WithTitle = () => ({
  components: {VAlert, VAlertTitle, Icon},
  setup() {
    return {};
  },
  template: `
    <v-alert
      class="mb-2"
      dismissable
      color="info"
      icon="info"
    >
      <VAlertTitle>Alert title</VAlertTitle>
      Change a few things up and try submitting again.
    </v-alert>
  `,
});

export const Group: StoryFn<typeof VAlert> = (args) => ({
  components: {VAlert, VAlertGroup, VBtn},
  setup() {
    const messages = ref([
      {
        text: 'This is a message',
      },
    ]);

    const add = () => {
      messages.value.push({
        text: 'This is a message',
      });
    };

    const addPrepend = () => {
      messages.value.unshift({
        text: 'This is a message',
      });
    };

    const remove = () => {
      messages.value.pop();
    };

    function removeAlert(index: number) {
      messages.value.splice(index, 1);
    }

    return {args, messages, add, addPrepend, remove, removeAlert};
  },
  template: `
    <div class="flex gap-2">
      <VBtn @click="add">
        Add
      </VBtn>
      <VBtn @click="addPrepend">
        Add Prepend
      </VBtn>
      <VBtn @click="remove">
        Remove
      </VBtn>
    </div>
    <div
      class="absolute top-0 right-0 w-80 p-6 min-h-screen overflow-y-auto overflow-x-hidden"
    >
      <VAlertGroup>
        <VAlert
          v-for="message in messages"
          :key="message.text"
          v-bind="args"
          color="success"
          class="mb-2"
          dismissable
          @dismissed="removeAlert"
        >
          {{ message.text }}
        </VAlert>
      </VAlertGroup>
    </div>
  `,
});