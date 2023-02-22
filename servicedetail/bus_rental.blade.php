@extends('layouts.web.master')
@section('content')
    <div class="hero-section hero-background">
        <h1 class="page-title">Lotte Rental Car</h1>
    </div>

    <!--Navigation section-->
    <div class="container">
        <nav class="biolife-nav">
            <ul>
                <li class="nav-item"><a href="{{route('home')}}" class="permal-link">{{__('Trang chủ')}}</a></li>
                <li class="nav-item"><a href="{{route('services')}}" class="permal-link">{{__('Sản phẩm & dịch vụ')}}</a></li>
                <li class="nav-item"><span class="current-page">{{__('Danh sách dịch vụ')}}</span></li>
            </ul>
        </nav>
    </div>

    <div class="page-contain category-page left-sidebar">
        <div class="container">
            <div class="row">
                <!-- Main content -->
                <aside id="sidebar" class="sidebar col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div class="biolife-mobile-panels">
                        <span class="biolife-current-panel-title">Sidebar</span>
                        <a class="biolife-close-btn" href="#" data-object="open-mobile-filter">&times;</a>
                    </div>
                    <div class="sidebar-contain">
                        <div class="widget biolife-filter">
                            <h4 class="wgt-title">{{__('Sản phẩm & dịch vụ')}}</h4>
                            <div class="wgt-content">
                                <ul class="cat-list">
                                    <li class="cat-list-item"><a href="{{route('services')}}" class="cat-link">{{__('Thuê xe trọn gói')}}</a></li>
                                    <li class="cat-list-item"><a href="{{route('equipment-rental')}}" class="cat-link">{{__('Thuê thiết bị')}}</a></li>
                                    <li class="cat-list-item"><a href="{{route('sales')}}" class="cat-link">{{__('Bán xe & thiết bị')}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </aside>

                <div id="main-content" class="main-content col-lg-9 col-md-8 col-sm-12 col-xs-12">
                    <div class="product-category list-style">

                        <div id="top-functions-area" class="top-functions-area">
                            <div class="flt-item to-left group-on-mobile">
                                <span class="flt-title">{{__('Tìm kiếm')}}</span>
                                <a href="#" class="icon-for-mobile">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                                <div class="wrap-selectors">
                                    <form action="{{route('bus')}}" name="frm-refine" method="get" class="d-flex">
                                        <div data-title="Hãng xe:" class="selector-item">
                                            <select name="car_base" class="selector">
                                                <option value="">{{__('Hãng xe')}}</option>
                                                <option value="Huyndai">Huyndai</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Kia">Kia</option>
                                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                                <option value="Chevrolet">Chevrolet</option>
                                                <option value="Nissan">Nissan</option>
                                                <option value="Thaco">Thaco</option>
                                                <option value="Ford">Ford</option>
                                                <option value="Honda">Honda</option>
                                                <option value="Peugeot">Peugeot</option>
                                                <option value="Samco">Samco</option>
                                                <option value="Suzuki">Suzuki</option>
                                                <option value="BMW">BMW</option>
                                                <option value="Mazda">Mazda</option>
                                                <option value="Audi">Audi</option>
                                                <option value="Daewoo">Daewoo</option>
                                                <option value="Mitsubishi">Mitsubishi</option>
                                                <option value="Porsche">Porsche</option>
                                                <option value="Perodua">Perodua</option>
                                                <option value="Rolls Royce">Rolls Royce</option>
                                            </select>
                                        </div>
                                        <div data-title="Số ghê:" class="selector-item">
                                            <select name="seats" class="selector">
                                                <option value="">{{__('Số ghế')}}</option>
                                                <option value="29">29 {{__('Chỗ')}}</option>
                                                <option value="34">34 {{__('Chỗ')}}</option>
                                                <option value="47">47 {{__('Chỗ')}}</option>
                                            </select>
                                        </div>
                                        <div data-title="Khu vực:" class="selector-item">
                                            <select name="location" class="selector">
                                                <option value="">{{__('Khu vực')}}</option>
                                                <option value="Hà Nội">{{__('Hà Nội')}}</option>
                                                <option value="Đà Nẵng">{{__('Đà Nẵng')}}</option>
                                                <option value="Hồ Chí Minh">{{__('Hồ Chí Minh')}}</option>
                                            </select>
                                        </div>
                                        <p class="btn-for-mobile">
                                            <button type="submit" class="btn-submit">Go</button>
                                        </p>
                                        <button class="btn btn-primary ml-2" type="submit">{{__('Tìm kiếm')}}</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <ul class="products-list">
                                @if($rental_bus)
                                    @foreach($rental_bus as $item)
                                        <li class="product-item col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="contain-product pr-detail-layout">
                                                <div class="product-thumb">
                                                    <a href="#" class="link-to-product">
                                                        <img src="{{Storage::disk('local')->url($item->file_path)}}" alt="dd" width="270"
                                                             height="270" class="product-thumnail">
                                                    </a>
                                                </div>
                                                <div class="info">
                                                    <h4 class="product-title"><a href="#"
                                                                                 class="pr-name">{{$item->name}}</a>
                                                    </h4>
                                                    <ul class="text-left list-detail-info-car">
                                                        <li>
                                                            <span>{{$item->description}}</span>
                                                        </li>
                                                        @if($valueSession === 'en')
                                                            <li>
                                                                    <span>
                                                                        @if($item->status === 1)
                                                                            <i class='bx bx-time'></i> Long time
                                                                        @endif
                                                                        @if($item->status === 2)
                                                                            <i class='bx bx-time'></i> Short time
                                                                        @endif
                                                                    </span>
                                                            </li>
                                                        @else
                                                            <li>
                                                                    <span>
                                                                        @if($item->status === 1)
                                                                            <i class='bx bx-time'></i> Dài hạn
                                                                        @endif
                                                                        @if($item->status === 2)
                                                                            <i class='bx bx-time'></i> Ngắn hạn
                                                                        @endif
                                                                    </span>
                                                            </li>
                                                        @endif
                                                        <li>
                                                            <span><i class='bx bx-car'></i> {{$item->car_base}}</span>
                                                        </li>
                                                        <li>
                                                            <span><i class='bx bx-user'></i> {{$item->seats}}</span>
                                                        </li>
                                                        <li>
                                                        <span>
                                                            <i class='bx bxs-map'></i>
                                                            @if($item->location === '')
                                                                {{__('Liên hệ')}}
                                                            @endif

                                                            {{__($item->location)}}
                                                        </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="advance-info">
                                                    <ul class="list">
                                                        <li>{{$item->content}}</li>
                                                        <li style="display: flex; gap: 10px"></li>
                                                    </ul>
                                                    <div class="buttons-price">
                                                        @if($item->price === '')
                                                            <span>{{__('Liên hệ báo giá')}}</span>
                                                        @endif
                                                        @if($item->price)
                                                                <p>{{$item->price}} </p>
                                                        @endif
                                                          <a data-toggle="modal" data-target="#rentalCarlongtime" class="button-contact-detail btn-contact">{{__('Liên hệ tư vấn')}}</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                @else
                                    <div>
                                        <h2>No posts found</h2>
                                    </div>
                                @endif
                            </ul>
                        </div>

                        <div class="biolife-panigations-block d-flex justify-content-center">
                            {{$rental_bus->links()}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="rentalCarlongtime" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered form_contact" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title text-center" id="exampleModalLongTitle">{{__('Liên hệ với chúng tôi')}}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="pop_up_car" method="post" class="needs-validation" novalidate>
                        @csrf
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="ip_name">{{__('Tên liên hệ')}}</label>
                                <input type="text"
                                       class="input_popup "
                                       id="ip_name"
                                       name="name"
                                       value=""
                                       required
                                       placeholder="{{__('Nhập tên')}}">
                                <div class="invalid-feedback">
                                    {{__('Vui lòng nhập tên liên hệ.')}}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="ip_phone">{{__('Số điện thoại')}}</label>
                                <input type="text"
                                       class="input_popup"
                                       name="phone"
                                       id="ip_phone"
                                       required
                                       placeholder="{{__('Số điện thoại')}}">
                                <div class="invalid-feedback">
                                    {{__('Vui lòng nhập số điện thoại.')}}
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12 mt-2">
                                <label for="ip_mail">Email</label>
                                <input type="text"
                                       class="input_popup"
                                       id="ip_mail"
                                       name="email"
                                       required
                                       placeholder="Email">
                                <div class="invalid-feedback">
                                    {{__('Vui lòng nhập đúng địa chỉ email.')}}
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12 mt-2">
                                <label for="ip_name_car">{{__('Tên sản phẩm')}}</label>
                                <input type="text"
                                       class="input_popup"
                                       id="ip_name_car"
                                       name="name_service"
                                       value=""
                                >
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group mb-2 p-2 col-md-6 d-flex flex-column">
                                <label for="ip_position">{{__('Chọn địa điểm')}}</label>
                                <select id="ip_position" class="" name="position" required >
                                    <option selected disabled value="">{{__('Chọn địa điểm')}}</option>
                                    <option value="1">{{__('Hà Nội')}}</option>
                                    <option value="2">{{__('Đà Nẵng')}} </option>
                                    <option value="3">{{__('Hồ Chí Minh')}} </option>
                                </select>
                                <div class="invalid-feedback">
                                    {{__('Vui lòng chọn địa chỉ bạn muốn thuê.')}}
                                </div>
                            </div>
                            <div class="form-group mb-2 p-2 col-md-6 d-flex flex-column">
                                <label for="ip_service">{{__('Chọn dịch vụ')}}</label>
                                <select id="ip_service"  class="" name="service" required>
                                    <option value="long_time">{{__('Thuê xe dài hạn')}}</option>
                                    <option value="short_time">{{__('Thuê xe ngắn hạn')}}</option>
                                    <option value="equipment-sales">{{__('Thuê thiết bị')}}</option>
                                    <option value="sales">{{__('Mua xe')}}</option>
                                    <option value="equipment-sales">{{__('Mua thiết bị')}}</option>
                                </select>
                                <div class="invalid-feedback">
                                    {{__('Vui lòng chọn dịch vụ cần tư vấn.')}}
                                </div>
                            </div>

                        </div>
                        <div id="short_time" class="colors short_time " style="display: none">

                            <div class="row">
                                <div class="col-md-6 input_time">
                                    <label for="inputStartDateService">{{__('Ngày bắt đầu')}}</label>
                                    <input type="date"
                                           name="start_date"
                                           id="inputStartDateService"
                                           required
                                    >
                                </div>
                                <div class="col-md-6 input_time">
                                    <label for="inputEndDateService">{{__('Ngày kết thúc')}}</label>
                                    <input type="date"
                                           name="end_date"
                                           id="inputEndDateService"
                                           required
                                    >

                                    <div class="invalid-feedback">
                                        {{__('Hãy nhập ngày bắt đầu ≤ ngày kết thúc')}}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <script>
                            $(function () {
                                $('#ip_service').change(function () {
                                    $('.colors').hide();
                                    const showDetail = $(this).val();
                                    if (showDetail == null) {
                                        return ""
                                    } else {
                                        $('#' + showDetail).show();
                                    }
                                });
                            });
                        </script>

                        <div class="form-group">
                            <label for="ip_mess" class="validationTextarea">{{__('Mô tả')}}</label> <br>
                            <textarea class="text_description input_popup"
                                      rows="5"
                                      type="text"
                                      id="ip_mess"
                                      name="message"
                                      required
                                      placeholder="{{__('Nhập mô tả')}}...">
                        </textarea>
                            <div class="invalid-feedback">
                                {{__('Vui lòng nhập thông tin mô tả.')}}
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <p style="font-size: 13px">
                                    <i>{{__('Bằng việc ấn nút')}} <b style="color: #E60013">"{{__('Gửi')}}"</b>
                                        {{__('bạn đã đồng ý cho Lotte Rental thu thập thông tin cá nhân để phục vụ tư vấn')}} </i>
                                </p>
                            </div>
                        </div>
                        <div class="modal-footer m-auto">
                            <button type="submit" id="rental_car_pop_up" class="button_form_contact">
                                {{__('Gửi')}}
                            </button>
                        </div>
                    </form>
                    <script>
                        (function() {
                            'use strict';
                            window.addEventListener('load', function() {
                                var forms = document.getElementsByClassName('needs-validation');
                                var validation = Array.prototype.filter.call(forms, function(form) {
                                    form.addEventListener('submit', function(event) {
                                        if (form.checkValidity() === false) {
                                            event.preventDefault();
                                            event.stopPropagation();
                                        }
                                        form.classList.add('was-validated');
                                    }, false);
                                });
                            }, false);
                        })();
                    </script>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">

        $('.btn-contact').on('click',function (){
            var $this = $(this);
            filToContactForm($this);
        });

        function filToContactForm(item) {
            var cardItem = item.closest('.contain-product');
            console.log(cardItem)
            $('#ip_name_car').val(cardItem.find('h4').text().trim());

        }


        $('#pop_up_car').on('submit',function(e){

            e.preventDefault();

            let name = $('#ip_name').val();
            let email = $('#ip_mail').val();
            let phone = $('#ip_phone').val();
            let name_service = $('#ip_name_car').val();
            let position = $('#ip_position').val();
            let service = $('#ip_service').val();
            let message = $('#ip_mess').val();
            let end_date = $('#inputEndDate').val();
            let start_date = $('#inputStartDate').val();


            if(name && position && service && message !== '') {
                var spinner = '<div class="spinner-border" role="status"> <span class="sr-only">Sending...</span></div> {{__('Đang gửi...')}}'
                $("#rental_car_pop_up").html(spinner).css('pointer-events', 'none')
            }

            $.ajax({
                url: "/post-contact-us",
                type: 'POST',
                data:{
                    "_token": "{{ csrf_token()}}",
                    name:name,
                    email:email,
                    phone:phone,
                    name_service:name_service,
                    position:position,
                    service:service,
                    message:message,
                    start_date:start_date,
                    end_date:end_date,
                },

                success: function(response)
                {
                    $('#ip_name').val(' ');
                    $('#inp_email').val(' ');
                    $('#ip_mess').val(' ');
                    $('#ip_position').val('1');
                    $('#ip_service').val('');
                    $('#ip_phone').val(' ');

                    $( ".close" ).trigger( "click" );

                    $("#rental_car_pop_up").text('{{__('Gửi')}}').css('pointer-events','auto')

                    $('#successMsg').fadeIn('fast').delay(3000).fadeOut('fast');
                },
                error: function(response)
                {

                }
            });
        });
    </script>

    <style>
        .spinner-border {
            height: 15px;
            width: 15px;
        }
    </style>
@endsection