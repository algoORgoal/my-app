# Dependency Comparison

This document compares the dependencies between the **Current Project** and the **Other Project**.

---

## 1. Dependencies Installed in Both Projects (with Version Comparison)

| Package Name                       | Current Project Version | Other Project Version |
| ---------------------------------- | :---------------------: | :-------------------: |
| @babel/core                        |         7.27.4          |        7.26.7         |
| @expo/vector-icons                 |         14.1.0          |        14.0.4         |
| @react-native-firebase/app         |         22.2.0          |        22.2.0         |
| @react-native-firebase/crashlytics |         22.2.0          |        22.2.0         |
| @react-navigation/bottom-tabs      |         7.3.14          |         7.2.0         |
| @react-navigation/native           |         7.1.10          |        7.0.14         |
| @types/react                       |         18.3.18         |        18.3.18        |
| eslint                             |         9.28.0          |        8.57.1         |
| eslint-config-expo                 |          8.0.1          |         8.0.1         |
| expo                               |         52.0.46         |        52.0.46        |
| expo-blur                          |         14.0.3          |        14.0.3         |
| expo-constants                     |         17.0.8          |        17.0.8         |
| expo-font                          |         13.0.4          |        13.0.4         |
| expo-haptics                       |         14.0.1          |        14.0.1         |
| expo-image                         |          2.0.7          |         2.0.7         |
| expo-linking                       |          7.0.5          |         7.0.5         |
| expo-router                        |         4.0.21          |        4.0.21         |
| expo-splash-screen                 |         0.29.24         |        0.29.24        |
| expo-status-bar                    |          2.0.1          |         2.0.1         |
| expo-symbols                       |          0.2.2          |         0.2.2         |
| expo-system-ui                     |          4.0.9          |         4.0.9         |
| expo-web-browser                   |         14.0.2          |        14.0.2         |
| react                              |         18.3.1          |        18.3.1         |
| react-dom                          |         18.3.1          |        18.3.1         |
| react-native                       |         0.76.9          |        0.76.9         |
| react-native-gesture-handler       |         2.20.2          |        2.20.2         |
| react-native-reanimated            |         3.16.7          |        3.16.7         |
| react-native-safe-area-context     |         4.12.0          |        4.12.0         |
| react-native-screens               |          4.4.0          |         4.4.0         |
| react-native-web                   |         0.19.13         |        0.19.13        |
| react-native-webview               |         13.12.5         |        13.12.5        |
| typescript                         |          5.8.3          |         5.7.3         |

---

## 2. Dependencies Only in the Current Project

- @react-navigation/elements
- @reduxjs/toolkit
- react-redux

---

## 3. Dependencies Only in the Other Project

- @gorhom/bottom-sheet
- @lukemorales/query-key-factory
- @react-native-async-storage/async-storage
- @react-native-community/datetimepicker
- @react-native-community/slider
- @react-native-firebase/auth
- @react-native-google-signin/google-signin
- @stomp/stompjs
- @storybook/addon-ondevice-actions
- @storybook/addon-ondevice-controls
- @storybook/react-native
- @tamagui/animations-react-native
- @tamagui/babel-plugin
- @tamagui/config
- @tamagui/font-inter
- @tamagui/lucide-icons
- @tamagui/shorthands
- @tamagui/themes
- @tamagui/toast
- @tanstack/react-query
- @tanstack/react-query-devtools
- @testing-library/react-native
- @types/dom-to-image
- @types/jest
- @types/react-test-renderer
- @types/text-encoding
- babel-loader
- burnt
- cross-env
- dom-to-image
- eslint-config-prettier
- eslint-plugin-prettier
- expo-build-properties
- expo-clipboard
- expo-dev-client
- expo-image-picker
- expo-media-library
- expo-secure-store
- expo-updates
- fast-text-encoding
- firebase
- husky
- jest
- jest-expo
- ky
- lint-staged
- msw
- msw-storybook-addon
- prettier
- react-error-boundary
- react-native-react-query-devtools
- react-native-svg
- react-native-url-polyfill
- react-native-view-shot
- react-test-renderer
- reactotron-react-native
- tamagui
- text-encoding
- ts-pattern
- zod
- zustand

---

## Notes

- Some packages are present in both projects but with different versions (see the table above).
- Packages listed in only one project may be required or optional depending on your use case.
- For the most accurate results, always check your actual `package.json` files.
