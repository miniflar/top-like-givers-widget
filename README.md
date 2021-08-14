# MiniFLAR Top Like Givers Widget

![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge) [![Latest Stable Version](https://img.shields.io/packagist/v/miniflar/top-like-givers-widget.svg?style=for-the-badge)](https://packagist.org/packages/miniflar/top-like-givers-widget) [![PayPal](https://img.shields.io/badge/paypal-ralkage-4cl?style=for-the-badge&logo=paypal)](https://paypal.me/ralkage)

A [Flarum](http://flarum.org) extension. Top Like Givers in the past month Widget.

Why top like givers and not receivers? Simply because it's a statistic that no one bothers to consider as forum activity. 

If we're honest, liking a post does count as much towards forum activity as the posts receiving those likes. It takes effort to smash that like button in a discussion!

You probably think I'm crazy and might pass up on installing this extension, but what if I told you that your users that go on liking sprees could _like_ the fact that they are being noticed for actively reading your forum content? 😉

Besides, a liked post can mean that a user read some if not most of a forum post and could not offer a reply at the time (it relieves the pressure of feeling as if they _NEED_ to reply).

__Note:__ Regarding the interval to when the widget statistics update, it will update [every 10 minutes](https://github.com/miniflar/top-like-givers-widget/blob/main/src/LikeRepository.php#L32) and will possibly be configurable in the future.

## Installation

This will also install [Forum Widgets Core](https://github.com/afrux/forum-widgets-core) as it relies on it.

[Flarum Likes](https://github.com/flarum/likes) is also a required package.

Install with composer:

```sh
composer require miniflar/top-like-givers-widget:"*"
```

## Updating

```sh
composer update miniflar/top-like-givers-widget:"*"
php flarum migrate
php flarum cache:clear
```

## Screenshots
<details>
<summary>Forum Widget</summary>

![Top Like Givers Widget](https://i.imgur.com/M02CpUL.png)
</details>

## Links

- [Packagist](https://packagist.org/packages/miniflar/top-like-givers-widget)
- [GitHub](https://github.com/miniflar/top-like-givers-widget)
- [Discuss](https://discuss.flarum.org/d/28646)

An extension by [miniFLAR](https://github.com/miniflar).
