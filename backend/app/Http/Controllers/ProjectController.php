<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function index(): JsonResponse
    {
        $projects = Project::query()
            ->where('status', 'published')
            ->latest()
            ->get();

        return $this->successResponse($projects);
    }

    public function show(string $slug): JsonResponse
    {
        $project = Project::query()
            ->where('slug', $slug)
            ->where('status', 'published')
            ->first();

        if (! $project) {
            return $this->errorResponse('Project not found.', 404);
        }

        return $this->successResponse($project);
    }
}
