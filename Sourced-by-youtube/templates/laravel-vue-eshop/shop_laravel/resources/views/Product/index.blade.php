@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Product</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('main.index') }}">Home</a></li>
                        <li class="breadcrumb-item active">Products</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">

                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <a href="{{ route('product.create') }}" class="btn btn-primary">Addition</a>
                        </div>

                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Content</th>
                                        <th>Preview image</th>
                                        <th>Price</th>
                                        <th>Count</th>
                                        <th>Category</th>
                                        <th>Tags</th>
                                        <th>Colors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($products as $product)
                                        <tr>
                                            
                                            <td>{{ $product->id }}</td>
                                            <td><a
                                                    href="{{ route('product.show', $product->id) }}">{{ $product->title }}</a>
                                            </td>
                                            <td>{{ $product->description }}</td>
                                            <td>{{ $product->content }}</td>
                                            <td>{{ $product->preview_image }}</td>
                                            <td>{{ $product->price }}</td>
                                            <td>{{ $product->count }}</td>
                                            <td>
                                                {{-- {{$product}} --}}
                                                @foreach ($categories as $category)
                                                @if ($category->id == $product->category_id)
                                                {{$category->title}}
                                                @endif
                                                @endforeach
                                            </td>
                                            <td>
                                                @foreach ($productTags as $productTag)
                                                @if ($product->id == $productTag->product_id)
                                                        
                                                            @foreach($tags as $tag)
                                                            @if ($tag->id == $productTag->tag_id){
                                                                {{$tag->title}}
                                                            }
                                                            @endif
                                                            @endforeach
                                                        
                                                @endif
                                                @endforeach
                                                
                                            </td>
                                            <td>@foreach ($colorProducts as $colorProduct)
                                                @if ($product->id == $colorProduct->product_id)
                                                        
                                                            @foreach($colors as $color)
                                                            @if ($color->id == $colorProduct->color_id){
                                                                {{$color->title}}
                                                            }
                                                            @endif
                                                            @endforeach
                                                        
                                                @endif
                                                @endforeach</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection
