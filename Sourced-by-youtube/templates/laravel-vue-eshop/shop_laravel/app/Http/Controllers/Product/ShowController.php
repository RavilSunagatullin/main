<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Color;
use App\Models\ColorProduct;
use App\Models\Product;
use App\Models\ProductTag;
use App\Models\Tag;
use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function __invoke(Product $product){
        $productTags = ProductTag::where('product_id', $product->id)->get();
        $tags = Tag::all();
        $colorProducts = ColorProduct::where('product_id', $product->id)->get();
        $colors = Color::all();
        return view("product.show", compact('product', 'tags', 'productTags', 'colorProducts', 'colors'));
    }
}
