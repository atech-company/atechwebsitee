<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{
    public function index(): JsonResponse
    {
        $services = Service::query()
            ->where('status', 'published')
            ->orderBy('title')
            ->get();

        return $this->successResponse($services);
    }
}
