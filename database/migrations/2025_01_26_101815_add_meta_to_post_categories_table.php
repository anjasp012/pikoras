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
        Schema::table('post_categories', function (Blueprint $table) {
            $table->string('meta_title')->after('post_category_slug')->nullable();
            $table->text('meta_description')->after('post_category_slug')->nullable();
            $table->string('meta_keyword')->after('post_category_slug')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('post_categories', function (Blueprint $table) {
            $table->dropColumn('meta_title');
            $table->dropColumn('meta_description');
            $table->dropColumn('meta_keyword');
        });
    }
};
