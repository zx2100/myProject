 // import with ES6
 import Vue from 'vue'
 import mavonEditor from 'mavon-editor'
 import 'mavon-editor/dist/css/index.css'
 // use
 Vue.use(mavonEditor)



import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

VMdPreview.use(githubTheme, {
  config: {
    toc: {
      includeLevel: [3, 4],
    },
  },
});

Vue.use(VMdPreview);