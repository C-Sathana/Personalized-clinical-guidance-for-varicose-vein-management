This project presents an AI-powered system for early detection and management of varicose veins using smartphone-acquired images. The solution automatically classifies disease severity using deep learning and provides personalized clinical guidance, preventive care, and specialist referrals, enabling non-invasive and accessible healthcare screening.

🎯 Objectives

Automatically detect varicose veins from leg images

Classify disease stages using the CEAP (C0–C6) standard

Provide stage-specific remedial and preventive guidance

Enable location-based specialist referrals

Support early intervention without specialized diagnostic equipment

🧠 System Architecture

Frontend Layer: Mobile/Web interface for image capture

Image Processing: Normalization, enhancement, and augmentation

Feature Extraction & Fusion:

MobileNetV2

EfficientNet

Vision Transformer (ViT)

Swin Transformer

Inference Engine: Weighted ensemble for accurate classification

Guidance Engine: Personalized advice, alerts, and expert recommendations

⚙️ Methodology

Capture leg image via smartphone

Preprocess image (resize, normalize, enhance)

Extract deep features using CNN and Transformer models

Perform varicose vein detection and CEAP stage prediction

Provide personalized guidance or preventive advice

Store assessment history and trigger alerts for severe cases

📊 Results

Achieved ~96.9% validation accuracy

Real-time inference (<2 seconds per image)

Robust performance under varying lighting and image quality

Suitable for mobile deployment and rural healthcare use.

## App
![Map](<App (6).jpg>) ![Register Page ]![alt text](image.png)(<App (1).jpg>) ![Successful](<App (2).jpg>) ![Login in]![alt text](image-1.png)(<App (3).jpg>) ![Permission](<App (4).jpg>) ![Permission] (<App (5).jpg>)![Home UI ](image-2.png) ![Scanning](image-3.png)!![Result](image-4.png)![Recommentation](image-5.png)[Training](<Screenshot (1114).png>)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
