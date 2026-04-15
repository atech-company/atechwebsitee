<?php

namespace App\Http\Controllers;

use App\Http\Requests\GoogleAuthRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Spatie\Permission\Models\Role;

class AuthController extends Controller
{
    public function google(GoogleAuthRequest $request): JsonResponse
    {
        $googleUser = Socialite::driver('google')->stateless()->userFromToken($request->string('token')->value());

        $user = User::query()->updateOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName() ?? 'Google User',
                'google_id' => $googleUser->getId(),
                'avatar' => $googleUser->getAvatar(),
                'password' => Hash::make(Str::random(32)),
                'email_verified_at' => now(),
            ],
        );

        if (! Role::query()->where('name', 'client')->exists()) {
            Role::query()->create(['name' => 'client']);
        }

        $user->assignRole('client');

        $token = $user->createToken('web')->plainTextToken;

        return $this->successResponse([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function me(): JsonResponse
    {
        return $this->successResponse(auth()->user());
    }
}
