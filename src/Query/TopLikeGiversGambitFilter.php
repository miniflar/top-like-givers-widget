<?php

/*
 * This file is part of miniflar/top-like-givers-widget.
 *
 * Copyright (c) Christian Lopez.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


namespace MiniFLAR\TopLikeGiversWidget\Query;

use MiniFLAR\TopLikeGiversWidget\LikeRepository;
use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;
use Illuminate\Database\Query\Builder;

class TopLikeGiversGambitFilter  extends AbstractRegexGambit implements FilterInterface
{
    /**
     * @var LikeRepository
     */
    private $repository;

    public function __construct(LikeRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * {@inheritdoc}
     */
    public function apply(SearchState $search, $bit)
    {
        return parent::apply($search, $bit);
    }

    /**
     * {@inheritdoc}
     */
    public function getGambitPattern()
    {
        return 'is:top_like_givers';
    }

    /**
     * {@inheritdoc}
     */
    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $this->constrain($search->getQuery(), $matches[1], $negate);
    }

    public function getFilterKey(): string
    {
        return 'top_like_givers';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        $this->constrain($filterState->getQuery(), $negate);
    }

    protected function constrain(Builder $query, ?bool $negate = false)
    {
        $ids = array_keys($this->repository->getTopLikeGivers());

        $query->whereIn('id', $ids);
    }
}
