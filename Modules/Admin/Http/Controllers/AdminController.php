<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Admin\Repositories\AdminRepository;

class AdminController extends Controller
{
    private $adminRepository;


    public function __construct(AdminRepository $adminRepository)
    {
        $this->adminRepository = $adminRepository;
    }

    public function index()
    {
        dd($this->adminRepository->get());
    }
}
