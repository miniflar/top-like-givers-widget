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

class AddLikesGivenToApi {

    private $repository;

    public function __construct(LikeRepository $repository)
    {
        $this->repository = $repository;
    }

    public function __invoke() {
        return [
          'miniflar-top-like-givers-widget.data' => $this->repository->getTopLikeGivers(),
        ];
    }
}
