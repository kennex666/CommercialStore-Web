# Tài liệu diễn giải các thuộc tính CSS

## Thuộc tính mặc định

- `container-allpage` sử dụng để chứa toàn trang web với padding đặt sẵn. (DEPRECATED)
- `postion-relative` sử dụng để set `position: relative` nhanh
- `postion-absolute` sử dụng để set `position: absolute` nhanh
- `text-center-in-image` chữ được canh giữa hình.
```
 <div class="text-center-in-image">
    <img src="img/chat-phone.svg" alt="Phone" width="210px">
    <div> <!--- Cái này sẽ nằm giữa chữ-->
        <button class="btn btn-black mg-top-45px hover">Need help?</button>
    </div>
</div>
```
- `no-a-decor` thẻ a không có gạch chân
- `hover` khi rê chuột vào sẽ có hiệu ứng mờ đi
- `center-flex-row`: Canh giữa flex dạng row

## Các thuộc tính màu nền - Background color

- Màu xám: `bg-color-gray`
- Test khu vực hiển thị: `bg-color-test`
- Màu cam: `bg-color-orgage`

## Các thuộc tính font thống nhất

- Chữ nhỏ: `font-size-s`
- Chữ bình thường: `font-size-m`
- Chữ lớn: `font-size-l`
- Chữ thanh: `font-weight-light`
- Chữ đậm: `bold`
- Chữ màu cam: `font-color-orange`
- Chữ màu xám: `font-color-gray` 
- Chữ màu đen: `font-color-black`
- Chữ màu trắng: `font-color-white`

## Margin cách các icon 

- `mg-right-7px`: Cách phải 7px
- `mg-left-5px`: Cách bên trái 5px
- `mg-right-25px`: Cách bên phải 25px
- `mg-top-45px`: Cách top 45px

## Padding cho page
- Padding mặc định:

`.padding-default {
    padding: 0px 185px 5px 185px;
}`

## Button
- `btn`: Nút màu trắng xám, chữ màu đen, định dạng flex
  - `btn-medium-size`: Kế thừa btn, nút to hơn.
  - `btn-small-size`: Nút nhỏ
  - `btn-black`: Nút màu đen 
  - `btn-small-size-increase`: Dạng nhỏ hơn medium một chút
  - `btn-decor-grayborder`: Nút có viền màu xám, nền trắng
  - `btn-decor-ograngeborder`: Nút có viền màu cam, nền trắng
  - `btn-padding-left-right-15px`: Nút nhỏ trong thẻ mua hàng
  - `btn-padding-left-right-box`: Nút nhỏ trong thẻ mua hàng có dạng box
  - `btn-decor-ograngebg`: Nút có nền cam chữ trắng