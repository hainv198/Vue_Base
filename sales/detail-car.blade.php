@extends('layouts.web.master')
@section('content')
    @push('css')
        <link rel="stylesheet" type="text/css" href="{{asset('assets/web/pc/styles/layout6462.css')}}">
        <link rel="stylesheet" type="text/css" href="{{asset('assets/web/pc/styles/modules6462.css')}}">
        <link rel="stylesheet" type="text/css" href="{{asset('assets/web/pc/styles/contents6462.css')}}">
        <link rel="stylesheet" type="text/css" href="{{asset('assets/web/pc/styles/jquery.mCustomScrollbar6462.css')}}">
    @endpush

    @push('js-detail-sale-car')
        <script src="{{asset("assets/web/js/lib/clipboard.min.js")}}"></script>
        <script src="{{asset("assets/web/js/lib/jquery-1.12.4.min.js")}}"></script>
        <script src="{{asset("assets/web/js/lib/html5shiv.js")}}"></script>
        <script src="{{asset("assets/web/js/lib/MUI.js")}}"></script>
        <script src="{{asset("assets/web/js/lib/common.js")}}"></script>
    @endpush

    <script src="{{asset("assets/web/js/lib/swiper.min.js")}}"></script>
    <div class="secondhand-container" style="margin-top: 150px;">
        <div class="inner-type2">
            <div class="car-detail-visual-section">
                <div class="car-detail-visual-header">
                    <div class="box-align">

                        <div class="car-detail-infos">
                            <h1 class="">{{$data->name}}</h1>
                            <ul class="bar-type">
                                <li>{{$data->car_base}}</li>

                                <li>{{$data->distance}} km</li>

                                <li>{{__($data->location)}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tooltip-top-wrap tooltipToggle-top tooltip-site">
                        <button type="button" class="btn btn-share tooltipOpenBtn-top" data-target="tooltipCont-top" data-on="true" data-siblings="false">

                        </button>
                        <div class="tooltip tooltipCont tooltipCont-top">
                            <div class="tooltipCont-inner">
                                <div class="layer-list">
                                    <ul class="list-type-col6">

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swipe-detail-wrap layer-zoom" id="secondhand-slide">
                    <div class="car-details">
                        <div class="swiper-container detail-slide-gallery-top">
                            <div class="swiper-wrapper">
                                @if(!$data->saleImages->isEmpty())
                                    @foreach($data->saleImages as $item)
                                        <div class="swiper-slide">
                                            <div class="img">
                                                <img src="{{Storage::disk('local')->url($item->image)}}" alt=""/>
                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                            <div class="zoom-swiper-button-prev">
                                        <span class="icon swiper-prev"></span>
                                    </div>
                            <div class="zoom-swiper-button-next">
                                        <span class="icon swiper-next"></span>
                                    </div>
                            <button type="button" class="btn-zoom zoomBtn" data-layer="layer-zoom" style="border: none; background-color: transparent">
                                        <span class="icon zoom"></span>
                                    </button>
                            <div class="swiper-pagination-wrap">
                                        <div class="swiper-pagination"></div>
                                    </div>
                        </div>
                        <div class="swiper-container detail-slide-gallery-thumbs">
                            <div class="swiper-wrapper">
                                @if(!$data->saleImages->isEmpty())
                                    @foreach($data->saleImages as $item)
                                        <div class="swiper-slide" data-link="{{$item->id}}">
                                            <div class="img">
                                                <img src="{{Storage::disk('local')->url($item->image)}}" alt="">
                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                        <div class="swiper-scrollbar"></div>
                    </div>
                </div>

            </div>
            <div class="car-detail-info-section">
                <div class="car-detail-info-area carInfoAccor">
                    <div class="section-form">
                        <div class="form-header">
                            <button type="button" class=" btn-toggle-wide carInfoToggleBtn active"
                                    data-target="carInfoToggleCont01" data-on="true" data-siblings="false" style="border: none;background-color: transparent; font-weight: bold">
                                {{__('Thông tin xe')}}
                            </button>
                        </div>
                        <div class="form-cont carInfoToggleCon carInfoToggleCont01 active">
                            <div class="row">
                                <ul class="txt-type-list d-flex justify-content-around" style="width: 100%">
                                    <li>
                                        <span>{{__('Biển số xe')}}</span>
                                        <p><strong>{{$data->license_plate}}</strong></p>
                                    </li>
                                    <li>
                                        <span>{{__('Năm sản xuất')}}</span>
                                        <p><strong>{{$data->year}}</strong></p>
                                    </li>
                                    <li>
                                        <span>{{__('Số km đã chạy')}}</span>
                                        <p><strong>{{$data->distance}} km </strong></p>
                                    </li>

                                    <li>
                                        <span>{{__('Dung tích xi lanh/Loại xe')}}</span>
                                        <p><strong>{{$data->displacement_volume}}/cc</strong></p>
                                    </li>
                                    <li><span>{{__('Nhiên liệu')}}</span>
                                        <p><strong>{{__($data->fuel)}}</strong></p>
                                    </li>
                                    <li><span>{{__('Hộp số')}}</span>
                                        <p><strong>{{$data->feature}}</strong></p>
                                    </li>
                                    <li><span>{{__('Màu sắc')}}</span>
                                        <p><strong>{{$data->color}}</strong></p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="section-form">
                        <div class="form-header">
                            <h3 type="button" class=" btn-toggle-wide carInfoToggleBtn active" data-target="carInfoToggleCont05" data-on="true" data-siblings="false" style="font-weight: bold"">
                                {{__('Mô tả xe')}}
                            </h3>
                        </div>
                        <div class="form-cont carInfoToggleCon carInfoToggleCont05 active">
                            <div class="row">
                                <p>

                                    @if(app()->getLocale() == 'en')
                                        {{$data->description_en}}
                                    @else
                                        {{$data->description}}
                                    @endif

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(function () {

            if ($('#secondhand-slide').length) {

                (function () {
                    var subTopSlideThumbs = MUI.slide.init('#secondhand-slide .detail-slide-gallery-thumbs', 'swiper', {
                        spaceBetween: 10,
                        slidesPerView: 10,
                        freeMode: true,
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                        scrollbar: {
                            el: '#secondhand-slide .swiper-scrollbar',
                            hide: false,
                            dragSize: 50,
                            draggable: true,
                        },
                    });
                    var subTopSlide = MUI.slide.init('#secondhand-slide .detail-slide-gallery-top', 'swiper', {
                        spaceBetween: 10,
                        thumbs: {
                            swiper: subTopSlideThumbs,
                        },
                        pagination: {
                            el: '#secondhand-slide .swiper-pagination',
                            type: 'fraction',
                        },

                    });

                    $('#secondhand-slide .detail-slide-gallery-thumbs').on('click', '.swiper-slide', function () {
                        //console.log($(this).attr('data-link'));
                        var idx = $(this).attr('data-link') - 1;
                        subTopSlide.slideTo(idx);
                    });

                    var zoomFlag = true;

                    function zoomSwiperDestroy() {
                        if (MUI.slide.LayerSwiper) {
                            subTopSlideThumbs.destroy();
                            subTopSlide.destroy();
                        }
                    }
                    function zoomSwiperUpdate() {
                        subTopSlideThumbs.update();
                        subTopSlide.update();
                    }

                    $('.zoomBtn').on('click', function () {
                        if (zoomFlag == true) {
                            $(this).addClass('zoomOut');
                            zoomSwiperDestroy();

                            $('#secondhand-slide').addClass('zoomMode');
                            zoomSwiperUpdate();
                            MUI.IScrollSingle.iscrollRefresh(500);
                            zoomFlag = false;
                        } else {
                            $(this).removeClass('zoomOut');
                            zoomSwiperDestroy()

                            $('#secondhand-slide').removeClass('zoomMode');
                            zoomSwiperUpdate();

                            zoomFlag = true;
                        }
                    });

                })();
            }
            if ($('.car-detail-sticky-wrap').length) {
                $(window).on('scroll', function (e) {
                    var scrollPos = window.scrollY || window.pageYOffset,
                        $target = $('.car-detail-sticky-wrap'),
                        $parent = $('.car-detail-info-section'),
                        $targetScroll = $target.find('.detail-sticky-iscroll'),
                        parentBottomPos = $parent.offset().top + $parent.height() - $targetScroll.height(),
                        _navHeight = 0,
                        targetPos = $target.offset().top;

                    if (scrollPos >= targetPos) {

                        if (scrollPos >= parentBottomPos + _navHeight) {
                            $target.find('.car-detail-sticky').scrollTop(0);
                            $target.removeClass('fixed');
                            $target.find('.car-detail-sticky').css({ top: $parent.height() - $targetScroll.height() + _navHeight });

                        }
                        else {
                            $target.addClass('fixed');
                            $target.find('.car-detail-sticky').css({ top: _navHeight });
                        }

                    }
                    else {
                        $target.find('.car-detail-sticky').scrollTop(0);
                        $target.removeClass('fixed');
                        $target.find('.car-detail-sticky').css({ top: _navHeight });
                    }
                });
            }
            //스티키

        });

    </script>
    <script type="text/javascript" src="{{asset("assets/web/js/lib/usedCarOneDetaila29f.js")}}"></script>
    <style>
        #launcher {
            display: none;
        }
    </style>
    <script>
        $(document).ready(function () {
            $('#questionBtn').on('click', function () {
                var func;
                for (var i in frames) {
                    var frame = frames[i];
                    try {
                        if (frame.document.getElementsByClassName('u-userLauncherColor').length > 0) {
                            console.log(frame)
                            console.log(frame.frameElement)
                            func = frame.document.getElementsByClassName('u-userLauncherColor')[0].click();
                        }
                    } catch (e) {
                        continue;
                    }
                }
                console.log('func', func);
                $('#11center').click(func);
                $('#11center').click();
            });
        });
    </script>
@endsection

