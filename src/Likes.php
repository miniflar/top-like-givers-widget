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

use Flarum\Database\AbstractModel;

class Likes extends AbstractModel
{
    protected $table = 'post_likes';
}
