<?php

/*
 * This file is part of miniflar/top-like-givers-widget.
 *
 * Copyright (c) Christian Lopez.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace MiniFLAR\TopLikeGiversWidget;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\User\Filter\UserFilterer;
use Flarum\User\Search\UserSearcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(AddLikesGivenToApi::class),

    (new Extend\Filter(UserFilterer::class))
        ->addFilter(Query\TopLikeGiversGambitFilter::class),

    (new Extend\SimpleFlarumSearch(UserSearcher::class))
        ->addGambit(Query\TopLikeGiversGambitFilter::class),
];
