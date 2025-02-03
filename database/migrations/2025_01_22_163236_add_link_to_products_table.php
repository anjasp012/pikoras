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
        Schema::table('products', function (Blueprint $table) {
            $table->longText('link_shopee')->after('product_description');
            $table->longText('link_lazada')->after('product_description');
            $table->longText('link_tokopedia')->after('product_description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('link_shopee');
            $table->dropColumn('link_lazada');
            $table->dropColumn('link_tokopedia');
        });
    }
};
