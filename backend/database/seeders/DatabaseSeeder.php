<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::query()->updateOrCreate([
            'email' => 'admin@atech.com',
        ], [
            'name' => 'Atech Admin',
            'password' => Hash::make('Password@123'),
            'email_verified_at' => now(),
        ]);

        $this->call(DemoContentSeeder::class);
    }
}
