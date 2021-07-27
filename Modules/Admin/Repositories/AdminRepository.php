<?php


namespace Modules\Admin\Repositories;

use Modules\Core\Eloquent\BaseRepository;
use Modules\Core\Models\User;

class AdminRepository extends BaseRepository
{

    public function model()
    {
        return User::class;
    }
}
