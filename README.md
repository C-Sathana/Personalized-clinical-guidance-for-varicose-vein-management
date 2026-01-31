<img width="720" height="1532" alt="image" src="https://github.com/user-attachments/assets/8ebfaa1d-728d-46a2-af05-702961704cb1" />This project presents an AI-powered system for early detection and management of varicose veins using smartphone-acquired images. The solution automatically classifies disease severity using deep learning and provides personalized clinical guidance, preventive care, and specialist referrals, enabling non-invasive and accessible healthcare screening.

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

<img width="194" height="353" alt="image" src="https://github.com/user-attachments/assets/e8e8a7f1-07f1-4c2c-83ec-07091d86d0e5" />

<img width="720" height="1532" alt="image" src="https://github.com/user-attachments/assets/ce54d1b8-6ca8-471f-a018-f686d72d145c" />


<img width="720" height="1532" alt="image" src="https://github.com/user-attachments/assets/bbdb76a9-68a0-4785-8cfe-ee7525b34e36" />

<img width="195" height="388" alt="image" src="https://github.com/user-attachments/assets/df5ef874-6ff9-4a46-91ac-e7f52d7fe5c0" />

<img width="190" height="383" alt="image" src="https://github.com/user-attachments/assets/43f7780a-697a-4d71-99ba-b5ec1f806e09" />

<img width="310" height="601" alt="image" src="https://github.com/user-attachments/assets/e616283c-037c-4e2d-ab5e-561b7efe69cd" />

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
