## Thư viện sử dụng
wavesurfer.js
## Cách sử dụng
B1: Tạo waveSurfer instance: WaveSurfer.create(options);
B2: instance.load("file media") => Để tạo wave và player;

Có 2 cách dùng kết hợp player với waveSurfer:
### Cách 1: 
Sử dụng waveSurfer để tạo 1 Media Element thông qua các options: "backend", "mediaControls",... Sau đó ta có thể custom lại player đó bằng css và Javascript.
Ưu tiên cách này hơn, vì ta không phải code nhiều, nó tự link hết với nhau rồi, nên đỡ lỗi, cũng như khi gặp browser không hỗ trợ wavesurfer thì nó sẽ hiện cái này lên thay thế wave luôn.

### Cách 2: 
WaveSurfer cung cấp cho chúng ta rất nhiều api để tua, thay đổi âm lượng, play/pause,... giống như các player khác. Nên ta hoàn toàn có thể tạo riêng biệt 2 player: 1 là waveSurfer và 1 là custom player của chúng ta, sau đó sử dụng API của 2 thằng để link với nhau :3
Ví dụ: Khi play, thì ta phải gọi 2 api: videoElement.play() và wavesurfer.play()

## Lưu ý
Wave trong WaveSurfer không có options hay API nào để custom cũng như chia wave ra thành 2 nửa, mỗi nửa có 1 độ dài khác nhau như theo yêu cầu đặt ra.
Vậy nên, để làm được theo yêu cầu đặt ra em đã sửa cứng code thư viện wavesurfer.js. Nếu ta import thư viện gốc của wavesurfer vào app của chúng ta thì kết quả hiển thị sẽ khác.
Dòng code sửa: 1425 -> 1435