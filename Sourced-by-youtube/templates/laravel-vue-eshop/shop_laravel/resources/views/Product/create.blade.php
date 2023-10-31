@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0"> Add Product</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
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
                <form action="{{ route('product.store') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <input type="text" value="{{ old('title') }}" name="title" class="form-control"
                            placeholder="title">
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ old('description') }}" name="description" class="form-control"
                            placeholder="description">
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ old('content') }}" name="content" class="form-control"
                            placeholder="content">
                    </div>
                    <div class="form-group">
                        <textarea name="content" class="form-control" placeholder="content" cols="30" rows="10">{{ old('content') }}</textarea>
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ old('price') }}" name="price" class="form-control"
                            placeholder="price">
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ old('count') }}" name="count" class="form-control"
                            placeholder="count in stock">
                    </div>
                    <div class="form-group">
                        <select name="category_id" class="form-control select2" style="width: 100%;">
                          <option selected="selected" disabled>choose category</option>
                          @foreach ($categories as $category)
                            <option value="{{$category->id}}">{{$category->title}}</option>
                          @endforeach
                          
                        </select>
                      </div>
                    <div class="form-group">
                        <select class="tags" multiple="multiple" name="tags[]" data-placeholder="Add tags"
                             style="width: 100%;">
                             @foreach ($tags as $tag)
                                <option value="{{$tag->id}}">{{$tag->title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <select name="colors[]" class="colors" multiple="multiple" data-placeholder="Add colors"
                             style="width: 100%;">
                             @foreach ($colors as $color)
                             <option value="{{$color->id}}">{{$color->title}}</option>
                         @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                          <div class="custom-file">
                            <input name="preview_image" type="file" class="custom-file-input" id="preview_image">
                            <label class="custom-file-label" for="preview_image">Choose file</label>
                          </div>
                          {{-- <div class="input-group-append">
                            <span class="input-group-text">Upload</span>
                          </div> --}}
                        </div>
                      </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Append">
                    </div>
                </form>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection
