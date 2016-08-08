import EmoticonContainer from 'views/EmoticonContainer';

export default {
  '/:source/:category': {
    component: EmoticonContainer,
    name: 'emoticons',
  },
};
