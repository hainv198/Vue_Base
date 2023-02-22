<div class="container-fluid">
    <div class="blog-posts  xs-padding-bottom-50px">
        <div class="mt-5 mb-5">
            <div class="header_service_tab">
                <h4 class="m-0">
                    <span style="font-size: 20px; text-transform: uppercase">{{__('Bán xe')}}</span>
                    <span class="cp_under_line" style="height: 2px"></span>
                </h4>
                <a href="{{route('sales-car')}}" class="hvr-icon-wobble-horizontal hvr-float-shadow">
                    {{__('Xem tất cả')}} <i class='bx bx-right-arrow-alt hvr-icon'></i>
                </a>
            </div>
            <br>
            <hr>
        </div>
        <div class="container">
            <ul class="biolife-carousel nav-center xs-margin-top-34px nav-none-on-mobile"
                data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":3, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 3}},{"breakpoint":992, "settings":{ "slidesToShow": 2}},{"breakpoint":768, "settings":{ "slidesToShow": 2}},{"breakpoint":600, "settings":{ "slidesToShow": 1}}]}'>
                @foreach($sales_car as $item)
                    @if($item->type === 1)
                        <li>
                            <div class="slide-box container_card">
                                <div class=" box_card">
                                    <a href="{{route('detail-sales-car',  $item->id)}}" class="top_card">
                                        <a href="{{route('detail-sales-car',  $item->id)}}">
                                            @if(!$item->saleImages->isEmpty())
                                                <img src="{{Storage::disk('local')->url($item->saleImages->first()->image)}}" alt="" style="height: 250px"/>
                                            @endif
                                        </a>
                                    </a>
                                    <div class="bottom_card hvr-underline-from-left">
                                        <div class="car__title">
                                            <h3 class="car__name">
                                                <a style="font-weight: bold" href="{{route('detail-sales-car',  $item->id)}}" class="car_sales_car">
                                                    {{
                                                    $item->name != ''
                                                  ? $item->name
                                                  : $item->name_default
                                                }}
                                                </a>
                                            </h3>
                                        </div>

                                        <div class="advants">
                                            <ul class="car__list">
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"></path>
                                                    </svg>
                                                    <span>{{$item->seats}} people</span>
                                                </li>

                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M19.088,4.95453c-.00732-.00781-.00952-.01819-.01715-.02582s-.01819-.00995-.02606-.01733a9.97886,9.97886,0,0,0-14.08948,0c-.00787.00738-.01837.00964-.02606.01733s-.00983.018-.01715.02582a10,10,0,1,0,14.1759,0ZM12,20a7.9847,7.9847,0,0,1-6.235-3H9.78027a2.9636,2.9636,0,0,0,4.43946,0h4.01532A7.9847,7.9847,0,0,1,12,20Zm-1-5a1,1,0,1,1,1,1A1.001,1.001,0,0,1,11,15Zm8.41022.00208L19.3999,15H15a2.99507,2.99507,0,0,0-2-2.81573V9a1,1,0,0,0-2,0v3.18427A2.99507,2.99507,0,0,0,9,15H4.6001l-.01032.00208A7.93083,7.93083,0,0,1,4.06946,13H5a1,1,0,0,0,0-2H4.06946A7.95128,7.95128,0,0,1,5.68854,7.10211l.65472.65473A.99989.99989,0,1,0,7.75732,6.34277l-.65466-.65466A7.95231,7.95231,0,0,1,11,4.06946V5a1,1,0,0,0,2,0V4.06946a7.95231,7.95231,0,0,1,3.89734,1.61865l-.65466.65466a.99989.99989,0,1,0,1.41406,1.41407l.65472-.65473A7.95128,7.95128,0,0,1,19.93054,11H19a1,1,0,0,0,0,2h.93054A7.93083,7.93083,0,0,1,19.41022,15.00208Z"></path>
                                                    </svg>
                                                    <span>{{$item->distance}} km</span>
                                                </li>

                                            </ul>
                                        </div>
                                        <div class="car__footer">
                                            <span class="car__price">{{$item->price}} </span>
                                            <a data-toggle="modal" data-target="#rentalCarlongtime" class="car__more btn-contact">
                                                <span>{{__('Liên hệ')}}</span>
                                            </a>
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


