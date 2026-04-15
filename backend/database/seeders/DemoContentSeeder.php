<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\Project;
use App\Models\Service;
use App\Models\Setting;
use Illuminate\Database\Seeder;

class DemoContentSeeder extends Seeder
{
    public function run(): void
    {
        Setting::query()->updateOrCreate(
            ['site_name' => 'ATECH'],
            [
                'logo' => null,
                'favicon' => null,
                'email' => 'contact@atech.com',
                'phone' => '+1 (234) 567-890',
                'address' => 'Remote-first software agency',
                'social_links' => [
                    'website' => 'https://atechportfolio-kgsj.vercel.app/',
                ],
            ]
        );

        $pages = [
            [
                'title' => 'Home',
                'slug' => 'home',
                'hero_title' => 'Building Digital Excellence',
                'hero_subtitle' => 'We craft premium software solutions that transform businesses and delight users. Experience the future of digital innovation.',
                'content' => 'ATECH is a premium software development agency focused on speed, UX quality, and scalable architecture.',
                'meta_title' => 'Home - Premium Software Development Agency | ATECH',
                'meta_description' => 'Premium software development agency crafting exceptional digital experiences.',
                'status' => 'published',
            ],
            [
                'title' => 'About',
                'slug' => 'about',
                'hero_title' => 'About ATECH',
                'hero_subtitle' => 'Premium software development agency crafting exceptional digital experiences.',
                'content' => 'We help organizations deliver high-performance web platforms, mobile apps, APIs, and cloud-ready systems.',
                'meta_title' => 'About | ATECH',
                'meta_description' => 'Learn about ATECH and our engineering culture.',
                'status' => 'published',
            ],
            [
                'title' => 'Services',
                'slug' => 'services',
                'hero_title' => 'Our Services',
                'hero_subtitle' => 'Comprehensive solutions tailored to your business needs.',
                'content' => 'Explore web development, mobile apps, API development, cloud solutions, performance optimization, and security.',
                'meta_title' => 'Services | ATECH',
                'meta_description' => 'Comprehensive software services for modern businesses.',
                'status' => 'published',
            ],
            [
                'title' => 'Projects',
                'slug' => 'projects',
                'hero_title' => 'Featured Projects',
                'hero_subtitle' => 'Showcasing our best work and innovative solutions.',
                'content' => 'A curated set of company websites, ecommerce systems, and CMS-driven platforms.',
                'meta_title' => 'Projects | ATECH',
                'meta_description' => 'Showcasing our featured software projects.',
                'status' => 'published',
            ],
            [
                'title' => 'Contact',
                'slug' => 'contact',
                'hero_title' => 'Ready to Start Your Project?',
                'hero_subtitle' => 'Let\'s work together to bring your vision to life.',
                'content' => 'Get in touch at contact@atech.com or call +1 (234) 567-890.',
                'meta_title' => 'Contact | ATECH',
                'meta_description' => 'Contact ATECH to discuss your next digital product.',
                'status' => 'published',
            ],
        ];

        foreach ($pages as $page) {
            Page::query()->updateOrCreate(['slug' => $page['slug']], $page);
        }

        $services = [
            [
                'title' => 'Web Development',
                'slug' => 'web-development',
                'short_description' => 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
                'content' => 'Full-stack web product engineering with maintainable architecture, testing, and deployment readiness.',
                'icon' => 'globe',
                'status' => 'published',
            ],
            [
                'title' => 'Mobile Apps',
                'slug' => 'mobile-apps',
                'short_description' => 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
                'content' => 'Design and build mobile products with clean UX and robust API integration.',
                'icon' => 'smartphone',
                'status' => 'published',
            ],
            [
                'title' => 'API Development',
                'slug' => 'api-development',
                'short_description' => 'Robust, scalable REST and GraphQL APIs designed for performance, security, and maintainability.',
                'content' => 'API-first systems with strict validation, auth strategy, and observability.',
                'icon' => 'server',
                'status' => 'published',
            ],
            [
                'title' => 'Cloud Solutions',
                'slug' => 'cloud-solutions',
                'short_description' => 'Cloud infrastructure and deployment strategies to scale your applications efficiently and securely.',
                'content' => 'Cloud architecture planning, CI/CD workflows, and environment hardening.',
                'icon' => 'cloud',
                'status' => 'published',
            ],
            [
                'title' => 'Performance Optimization',
                'slug' => 'performance-optimization',
                'short_description' => 'Speed up your applications with advanced optimization techniques and best practices.',
                'content' => 'Frontend and backend tuning for faster load times and better runtime efficiency.',
                'icon' => 'gauge',
                'status' => 'published',
            ],
            [
                'title' => 'Security & Compliance',
                'slug' => 'security-compliance',
                'short_description' => 'Enterprise-grade security measures and compliance solutions to protect your data and users.',
                'content' => 'Security reviews, secure coding standards, and compliance-oriented implementation.',
                'icon' => 'shield-check',
                'status' => 'published',
            ],
        ];

        foreach ($services as $service) {
            Service::query()->updateOrCreate(['slug' => $service['slug']], $service);
        }

        $projects = [
            [
                'title' => 'SYC IT Company – Corporate Website & Digital Platform',
                'slug' => 'syc-it-company-corporate-website-digital-platform',
                'short_description' => 'Company website with headless content architecture and modern frontend stack.',
                'full_description' => 'Project type: company website. Tech stack includes React, Next.js, MongoDB, and WordPress as headless CMS.',
                'cover_image' => null,
                'gallery_images' => [],
                'technologies' => ['React', 'Next.js', 'MongoDB', 'WordPress (Headless CMS)'],
                'client_name' => 'SYC IT Company',
                'project_url' => null,
                'featured' => true,
                'status' => 'published',
            ],
            [
                'title' => 'Armando Mart – Fashion & Clothing E-Commerce Store',
                'slug' => 'armando-mart-fashion-clothing-ecommerce-store',
                'short_description' => 'Ecommerce platform for women\'s fashion products and online shopping operations.',
                'full_description' => 'Project type: ecommerce website focused on modern storefront UX and catalog management.',
                'cover_image' => null,
                'gallery_images' => [],
                'technologies' => ['React', 'WordPress', 'MongoDB'],
                'client_name' => 'Armando Mart',
                'project_url' => 'https://armandomart.com',
                'featured' => true,
                'status' => 'published',
            ],
            [
                'title' => 'Computechs Shop – Computer & Electronics Store Platform',
                'slug' => 'computechs-shop-computer-electronics-store-platform',
                'short_description' => 'Online platform for selling computer hardware and electronics.',
                'full_description' => 'Ecommerce project with CMS-driven operations and product-focused browsing flow.',
                'cover_image' => null,
                'gallery_images' => [],
                'technologies' => ['React', 'MongoDB', 'CMS'],
                'client_name' => 'Computechs Shop',
                'project_url' => null,
                'featured' => true,
                'status' => 'published',
            ],
            [
                'title' => 'Sabrina News – Online News Platform',
                'slug' => 'sabrina-news-online-news-platform',
                'short_description' => 'Dynamic news website with responsive design and structured content publishing.',
                'full_description' => 'News platform built with WordPress, PHP, and MySQL, with a modern and responsive UI.',
                'cover_image' => null,
                'gallery_images' => [],
                'technologies' => ['WordPress', 'PHP', 'MySQL'],
                'client_name' => 'Sabrina News',
                'project_url' => null,
                'featured' => true,
                'status' => 'published',
            ],
        ];

        foreach ($projects as $project) {
            Project::query()->updateOrCreate(['slug' => $project['slug']], $project);
        }
    }
}
