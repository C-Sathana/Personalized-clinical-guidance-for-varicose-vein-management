This project presents an AI-powered system for early detection and management of varicose veins using smartphone-acquired images. The solution automatically classifies disease severity using deep learning and provides personalized clinical guidance, preventive care, and specialist referrals, enabling non-invasive and accessible healthcare screening.


## App

<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/3d957991-249c-4ce4-bc21-c4361a12dc26" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/292072e7-3b36-4f5a-ad2d-ce2830178ec7" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/89d2ee8f-a88d-4b5a-b7fd-9615f01c0ee7" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/e3a2a2ae-e741-4a02-b5e3-9ada18fedee2" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/d0f66195-5e1c-4a16-98b8-71d1693f7157" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/0760a926-2cd9-4bfe-9949-21c96358e146" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/53919d2f-0383-4600-9ec6-b4eacb7d1937" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/ba0927d6-fb88-4f17-b4d3-f9a86a666385" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/c0083740-7f5c-4ade-97a3-95f900d8b12c" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/5735f198-0756-43b8-842b-1fa0f4b9604d" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/433f4e11-fe01-4d51-b5b8-addfc7f7d33f" />
<img width="303" height="551" alt="image" src="https://github.com/user-attachments/assets/24c77d93-3370-4fad-8f86-e69b1d3ff0b6" />


## Objectives

Automatically detect varicose veins from leg images

Classify disease stages using the CEAP (C0–C6) standard

Provide stage-specific remedial and preventive guidance

Enable location-based specialist referrals

Support early intervention without specialized diagnostic equipment

## System Architecture

<imgwidth="640" height="665" alt="image" src="https://github.com/user-attachments/assets/ae64e621-e6fa-47c3-bbbc-ed7e87a2c214" />

Frontend Layer: Mobile/Web interface for image capture

Image Processing: Normalization, enhancement, and augmentation

Feature Extraction & Fusion:

MobileNetV2,EfficientNet,Vision Transformer (ViT),Swin Transformer

Inference Engine: Weighted ensemble for accurate classification

Guidance Engine: Personalized advice, alerts, and expert recommendations

## Results
<img width="1416" height="593" alt="image" src="https://github.com/user-attachments/assets/a1bfdb88-03df-41fe-a071-a4bb5dcb7a6e" />
<img width="1338" height="587" alt="image" src="https://github.com/user-attachments/assets/278cc2ef-0ddf-4344-913d-098b217272e5" />


Achieved ~96.9% validation accuracy

Real-time inference (<2 seconds per image)

Robust performance under varying lighting and image quality

Suitable for mobile deployment and rural healthcare use.


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
