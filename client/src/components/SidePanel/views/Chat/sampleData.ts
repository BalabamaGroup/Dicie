import { ChatMessage } from '@/common/types/chat';

export const data: ChatMessage[] = [
  {
    userId: 1,
    username: 'username_1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    userId: 1,
    username: 'username_1',
    text: 'Bibendum at varius vel pharetra vel. Nisl tincidunt eget nullam non nisi est sit. ',
  },
  {
    userId: 2,
    username: 'username_2',
    text: 'olor magna eget est lorem. Ut consequat semper viverra nam. Vulputate ut pharetra',
  },
  {
    userId: 3,
    username: 'username_3',
    text: ' Fermentum posuere urna nec tincidunt praesent semper feugiat.',
  },
  {
    userId: 3,
    username: 'username_3',
    text: 'Nisl tincidunt eget nullam non nisi est sit. Ultricies mi quis hendrerit dolor magna eget est lorem. Ut consequat semper viverra nam. Vulputate ut pharetra sit amet aliquam id diam.',
  },
  {
    userId: 3,
    username: 'username_3',
    text: 'Viverra adipiscing at in tellus integer feugiat scelerisque.',
  },
  {
    userId: 1,
    username: 'username_1',
    text: ' Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Tortor condimentum lacinia quis vel eros donec ac odio. Fames ac turpis egestas sed tempus urna et. Bibendum at varius vel pharetra vel. Nisl tincidunt eget nullam non nisi est sit. Ultricies mi quis hendrerit dolor magna eget est lorem. Ut consequat semper viverra nam. Vulputate ut pharetra sit amet aliquam id diam. Et malesuada fames ac turpis. Leo vel fringilla est ullamcorper eget. Vulputate mi sit amet mauris commodo quis imperdiet massa. ',
  },
  {
    userId: 3,
    username: 'username_3',
    text: 'Et egestas quis ipsum suspendisse ultrices gravida dictum. Turpis in eu mi bibendum.',
  },
];

export const actions = {
  send: () => {
    console.log('SEND');
  },
};
