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

use Carbon\Carbon;
use Illuminate\Contracts\Cache\Factory;
use function Afrux\ForumWidgets\Helper\pretty_number_format;

class LikeRepository
{
    /**
     * @var Factory
     */
    private $cache;

    public function __construct(Factory $cache)
    {
        $this->cache = $cache;
    }

    public function getTopLikeGivers(): array
    {
        return $this->cache->remember('miniflar-top-like-givers-widget.data', 600, function (): array {
            return Likes::query()
                ->selectRaw('user_id, count(user_id) as count')
                ->where('created_at', '>', Carbon::now()->subMonth())
                ->groupBy('user_id')
                ->orderBy('count', 'desc')
                ->limit(5)
                ->get()
                ->mapWithKeys(function ($like) {
                    return [$like->user_id => pretty_number_format((int) $like->count)];
                })
                ->toArray();
        });
    }
}
