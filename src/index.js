'use strict';

// ---------- Image / css assets ------------

require.context('./assets/', true, /\.(svg|png|jpe?g)$/);
require('./assets/styles/main.scss');

// -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */

// ----------- Custom scripts ---------------

require('./assets/scripts/components/swiper.js');
require('./assets/scripts/components/header.js');
require('./assets/scripts/components/review.js');
require('./assets/scripts/components/threeBox.js');
require('./assets/scripts/components/checklist.js');
require('./assets/scripts/components/expandList.js');
require('./assets/scripts/components/text-roller.js');
require('./assets/scripts/components/caseScroller.js');
require('./assets/scripts/components/capabilities.js');
require('./assets/scripts/components/loader.js');
require('./assets/scripts/components/heroList.js');
require('./assets/scripts/components/threeSlider.js');
require('./assets/scripts/components/textCategories.js');
require('./assets/scripts/components/table.js');
require('./assets/scripts/components/threeIcon.js');
require('./assets/scripts/components/reviewsSlider.js');
require('./assets/scripts/components/footer.js');
require('./assets/scripts/components/ebook.js');
require('./assets/scripts/components/capabilitiesSlider.js');
require('./assets/scripts/components/hubspotForm.js');

