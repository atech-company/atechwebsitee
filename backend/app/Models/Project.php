<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Project extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'full_description',
        'cover_image',
        'gallery_images',
        'technologies',
        'client_name',
        'project_url',
        'featured',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'featured' => 'boolean',
            'gallery_images' => 'array',
            'technologies' => 'array',
        ];
    }
}
