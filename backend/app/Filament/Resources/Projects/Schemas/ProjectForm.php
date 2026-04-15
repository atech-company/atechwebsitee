<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug((string) $state))),

                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),

                Textarea::make('short_description')
                    ->required()
                    ->rows(4)
                    ->maxLength(1000),

                RichEditor::make('full_description')
                    ->required()
                    ->columnSpanFull(),

                FileUpload::make('cover_image')
                    ->label('Project Image')
                    ->image()
                    ->imageEditor()
                    ->directory('projects/covers')
                    ->maxSize(4096)
                    ->disk('public'),

                FileUpload::make('gallery_images')
                    ->label('Project Gallery Images')
                    ->image()
                    ->imageEditor()
                    ->multiple()
                    ->reorderable()
                    ->appendFiles()
                    ->directory('projects/gallery')
                    ->maxFiles(20)
                    ->maxSize(4096)
                    ->disk('public'),

                TextInput::make('project_url')
                    ->label('Site URL')
                    ->url()
                    ->maxLength(255)
                    ->placeholder('https://example.com'),

                TagsInput::make('technologies')
                    ->label('Technologies')
                    ->placeholder('Add tech stack and press Enter')
                    ->separator(',')
                    ->splitKeys([',', 'Tab', 'Enter']),

                TextInput::make('client_name')
                    ->maxLength(255),

                Toggle::make('featured')
                    ->default(false),

                Select::make('status')
                    ->required()
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'archived' => 'Archived',
                    ])
                    ->default('draft'),
            ]);
    }
}
