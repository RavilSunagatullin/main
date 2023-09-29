@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">product</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">products</li>
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
                        <div class="card-header d-flex p-3">
                            <div class="mr-3">
                                <a href="{{ route('product.edit', $product->id) }}" class="btn btn-primary">Edit</a>
                            </div>
                            <form action="{{ route('product.delete', $product->id) }}" method="post">
                                @csrf
                                @method('delete')
                                <input type="submit" class="btn btn-danger" value="Delete">
                            </form>
                        </div>

                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <tbody>
                                    <tr>
                                        <td>ID</td>
                                        <td>{{ $product->id }}</td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td><a href="{{ route('product.show', $product->id) }}">{{ $product->title }}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{{ $product->description }}</td>
                                    </tr>
                                    <tr>
                                        <td>Content</td>
                                        <td>{{ $product->content }}</td>
                                    </tr>
                                    <tr>
                                        <td>Preview image</td>
                                        <td>{{ $product->preview_image }}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{{ $product->price }}</td>
                                    </tr>
                                    <tr>
                                        <td>Count on store</td>
                                        <td>{{ $product->count }}</td>
                                    </tr>
                                    <tr>
                                        <td>Is published</td>
                                        <td>{{ $product->is_published }}</td>
                                    </tr>
                                    <tr>
                                        <td>Tags</td>
                                        <td>
                                            @foreach ($productTags as $productTag)
                                                @if ($product->id == $productTag->product_id)
                                                    @foreach ($tags as $tag)
                                                        @if ($tag->id == $productTag->tag_id)
                                                            {
                                                            {{ $tag->title }}
                                                            }
                                                        @endif
                                                    @endforeach
                                                @endif
                                            @endforeach
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Colors</td>
                                        <td>
                                            @foreach ($colorProducts as $colorProduct)
                                                @if ($product->id == $colorProduct->product_id)
                                                    @foreach ($colors as $color)
                                                        @if ($color->id == $colorProduct->color_id)
                                                            {
                                                            {{ $color->title }}
                                                            }
                                                        @endif
                                                    @endforeach
                                                @endif
                                            @endforeach
                                        </td>
                                    </tr>
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
