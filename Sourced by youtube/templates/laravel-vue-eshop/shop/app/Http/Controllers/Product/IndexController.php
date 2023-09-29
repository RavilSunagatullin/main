<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Color;
use App\Models\ColorProduct;
use App\Models\product;
use App\Models\ProductTag;
use App\Models\Tag;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(){
        $products = Product::all();
        $categories = Category::all();
        $productTags = ProductTag::all();
        $tags = Tag::all();
        $colorProducts = ColorProduct::all();
        $colors = Color::all();
        return view("product.index", compact('products', 'tags', 'productTags', 'colorProducts', 'colors', 'categories'));
    }
}
