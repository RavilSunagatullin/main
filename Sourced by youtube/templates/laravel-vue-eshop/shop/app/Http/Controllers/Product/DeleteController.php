<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\ProductTag;
use App\Models\ColorProduct;

class DeleteController extends Controller
{
    public function __invoke(Product $product){
        $tags= ProductTag::where('product_id', $product->id)->delete();
        $tags= ColorProduct::where('product_id', $product->id)->delete();
        $product->delete();
        return redirect()->route('product.index');
    }
}
