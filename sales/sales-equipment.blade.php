<div class="container-fluid">
    <div class="blog-posts  xs-padding-bottom-50px">
        <div class="mt-5 mb-5">
            <div class="header_service_tab">
                <h4>
                    <span style="font-size: 20px; text-transform: uppercase">{{__('Bán thiết bị')}}</span>
                    <span class="cp_under_line" style="height: 2px"></span>
                </h4>

                <a href="{{route('sales-equipment')}}" class="hvr-icon-wobble-horizontal hvr-float-shadow">
                    {{__('Xem tất cả')}} <i class='bx bx-right-arrow-alt hvr-icon'></i>
                </a>
            </div>
            <hr>
        </div>
        <div class="container">
            <ul class="biolife-carousel nav-center xs-margin-top-34px nav-none-on-mobile"
                data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":3, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 3}},{"breakpoint":992, "settings":{ "slidesToShow": 2}},{"breakpoint":768, "settings":{ "slidesToShow": 2}},{"breakpoint":600, "settings":{ "slidesToShow": 1}}]}'>
                @foreach($sale_equipment as $item)
                    @if($item->type === 2)
                        <li>
                            <div class="slide-box container_card">
                                <div class=" box_card">
                                    <div class="top_card">
                                        <img src="{{asset('img/thumbnails/sales/'.$item->id.'/'.$item->file_path)}}" alt="" style="height: 250px"/>

                                    </div>
                                    <div class="bottom_card hvr-underline-from-left">
                                        @if(app()->getLocale() != 'en')
                                            <h3>{{$item->name}}</h3>
                                        @endif

                                        @if(app()->getLocale() == 'en')
                                            <h3>{{$item->name_en}}</h3>
                                        @endif

                                        <div class="advants">
                                            <ul class="car__list">
                                                @if($item->status == 3)
                                                    <li>
                                                        <i class='bx bx-user'></i>
                                                        <span class="ml-1">{{__('Thiết bị văn phòng')}}</span>
                                                    </li>
                                                @elseif($item->status == 4)
                                                    <li>
                                                        <i class='bx bx-user'></i>
                                                        <span class="ml-1">{{__('Máy phát tín hiệu')}}</span>
                                                    </li>
                                                @elseif($item->status == 5)
                                                    <li>
                                                        <i class='bx bx-user'></i>
                                                        <span class="ml-1">{{__('Thiết bị gia dụng')}}</span>
                                                    </li>
                                                @elseif($item->status == 6)
                                                    <li>
                                                        <i class='bx bx-user'></i>
                                                        <span class="ml-1">{{__('Thiết bị y tế')}}</span>
                                                    </li>
                                                @endif
                                            </ul>
                                        </div>
                                        <div class="car__footer">
                                            <span class="car__price">{{$item->price}} </span>
                                            <a href="" data-toggle="modal" data-target="#rentalCarlongtime" class="car__more btn-contact"><span>{{__('Liên hệ')}}</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    @endif
                @endforeach

            </ul>
        </div>
    </div>
</div>

