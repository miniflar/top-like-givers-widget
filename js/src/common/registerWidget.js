import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import TopLikeGiversWidget from "./components/TopLikeGiversWidget";

export default function (app) {
  new Widgets()
    .add({
      key: 'topLikeGivers',
      component: TopLikeGiversWidget,
      isDisabled: () => {
        const monthlyCounts = app.forum.attribute('miniflar-top-like-givers-widget.data');

        return !app.forum.attribute('canSearchUsers') || !monthlyCounts || !Object.keys(monthlyCounts).length;
      },
      isUnique: true,
      placement: 'end',
      position: 3,
    })
    .extend(app, 'miniflar-top-like-givers-widget');
}
