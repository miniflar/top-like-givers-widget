import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import avatar from 'flarum/common/helpers/avatar';
import icon from 'flarum/common/helpers/icon';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class TopLikeGiversWidget extends Widget {
  oninit(vnode) {
    super.oninit(vnode);

    this.monthlyCounts = app.forum.attribute('miniflar-top-like-givers-widget.data');
    this.attrs.state.users ??= [];
    this.attrs.state.isLoading ??= false;
    this.attrs.state.hasLoaded ??= false;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    if (!this.attrs.state.hasLoaded) {
      this.load();
    }
  }

  className() {
    return 'MiniFLAR-TopLikeGiversWidget';
  }

  icon() {
    return 'fas fa-thumbs-up';
  }

  title() {
    return app.translator.trans('miniflar-top-like-givers-widget.forum.widget.title');
  }

  description() {
    return '';
  }

  content() {
    if (this.attrs.state.isLoading) {
      return <LoadingIndicator />;
    }

    const users = this.attrs.state.users.sort((a, b) => this.monthlyCounts[b.id()] - this.monthlyCounts[a.id()]);

    return (
      <div className="MiniFLAR-TopLikeGiversWidget-users">
        {users.map((user) => (
          <div className="MiniFLAR-TopLikeGiversWidget-users-item">
            <div className="MiniFLAR-TopLikeGiversWidget-users-item-avatar">{avatar(user)}</div>
            <div className="MiniFLAR-TopLikeGiversWidget-users-item-content">
              <div className="MiniFLAR-TopLikeGiversWidget-users-item-name">{user.displayName()}</div>
              <div className="MiniFLAR-TopLikeGiversWidget-users-item-value">
                {icon('fas fa-thumbs-up')} {this.monthlyCounts[user.id()]}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  load() {
    this.attrs.state.isLoading = true;

    app.store.find('users', { filter: { top_like_givers: true } }).then((users) => {
      this.attrs.state.users = users;
      this.attrs.state.isLoading = false;
      this.attrs.state.hasLoaded = true;
      m.redraw();
    });
  }
}
