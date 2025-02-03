<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('post_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->constrained('posts', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('parent_id')->nullable()->constrained('post_comments', 'id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('your_name');
            $table->string('your_comment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_comments');
    }
};
