<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Open Camera</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
    }
    video {
      width: 80%;
      max-width: 600px;
      border: 2px solid #4CAF50;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .error {
      color: red;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Camera Viewer</h1>
  <video id="video" autoplay></video>
  <p id="error-message" class="error"></p>

  <script>
    // الحصول على عنصر الفيديو
    const video = document.getElementById('video');
    const errorMessage = document.getElementById('error-message');

    // طلب إذن الكاميرا وتشغيلها
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream; // عرض الفيديو في عنصر الفيديو
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
        errorMessage.textContent = 'Unable to access the camera. Please allow camera permissions.';
      });
  </script>
</body>
</html>