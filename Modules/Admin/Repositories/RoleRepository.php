<?php


namespace Modules\Admin\Repositories;


use Modules\Core\Eloquent\BaseRepository;
use Modules\Core\Models\Role;

class RoleRepository extends BaseRepository
{
    public function model()
    {
        return Role::class;
    }
}
