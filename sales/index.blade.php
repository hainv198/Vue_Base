@extends('layouts.web.master')
@section('content')
    @include('frontend.sales.banner')
    <section id="content" class="content">
        @include('frontend.sales.slide-sales')

        @include('frontend.sales.sales-car')

        @include('frontend.sales.sales-equipment')
    </section>
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
            var cardItem = item.closest('.bottom_card');
            console.log(cardItem)
            $('#ip_name_car').val(cardItem.find('h3').text().trim());

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

            console.log(name, email, name_service)

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