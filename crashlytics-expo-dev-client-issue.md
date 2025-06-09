## 🔥 [🐛] Crashlytics does not report crashes in debug mode when using expo-dev-client

<!---
**Note <= v5 is deprecated, v5 issues are unlikely to get attention. Feel free to ask in discussions instead.**

Hello there you awesome person;

Please note that the issue list of this repo is exclusively for bug reports;

1) For feature requests, questions and general support please use [GitHub Discussions](https://github.com/invertase/react-native-firebase/discussions).
2) If this is a setup issue then please make sure you've correctly followed the setup guides, most setup issues such as 'duplicate dex files', 'default app has not been initialized' etc are all down to an incorrect setup as the guides haven't been correctly followed.
-->

## Issue

- When using an Expo project with `react-native-firebase/crashlytics`, calling `crashlytics().crash()` does not work as expected in debug mode if `expo-dev-client` is installed.
- If I remove `expo-dev-client`, the app crashes natively and the crash is reported to the Firebase console as expected.
- If I add `expo-dev-client`, the app crashes, but instead of a native crash, I see the error overlay provided by Expo, and the crash is not reported to Firebase.
- I assume this happens because `expo-dev-client` provides a custom error overlay that catches and displays errors instead of letting the app crash natively.
- If this behavior is expected and cannot be resolved, I think it should be documented in the official docs so that others do not waste time trying to make it work.

---

## Project Files

### Javascript

<details><summary>Click To Expand</summary>
<p>

#### `package.json`:

```json
{
  "name": "my-app",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web",
    "lint": "expo lint",
    "keystore:debug": "keytool -list -v -keystore ./android/app/debug.keystore",
    "log:crash": "adb logcat | grep -i crash",
    "install:expo": "npx expo install"
  },
  "dependencies": {
    "@expo/vector-icons": "~14.1.0",
    "@react-native-firebase/app": "~22.2.0",
    "@react-native-firebase/crashlytics": "~22.2.0",
    "@react-navigation/bottom-tabs": "^7.3.10",
    "@react-navigation/elements": "~2.3.8",
    "@react-navigation/native": "^7.1.6",
    "@reduxjs/toolkit": "~2.8.2",
    "expo": "~53.0.10",
    "expo-blur": "~14.1.5",
    "expo-constants": "~17.1.6",
    "expo-dev-client": "~5.2.0",
    "expo-font": "~13.3.1",
    "expo-haptics": "~14.1.4",
    "expo-image": "~2.2.0",
    "expo-linking": "~7.1.5",
    "expo-router": "~5.0.7",
    "expo-splash-screen": "~0.30.9",
    "expo-status-bar": "~2.2.3",
    "expo-symbols": "~0.4.5",
    "expo-system-ui": "~5.0.8",
    "expo-web-browser": "~14.1.6",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-native": "0.79.3",
    "react-native-gesture-handler": "~2.24.0",
    "react-native-reanimated": "~3.17.4",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "~4.11.1",
    "react-native-web": "~0.20.0",
    "react-native-webview": "13.13.5",
    "react-redux": "~9.2.0"
  },
  "devDependencies": {
    "@babel/core": "~7.25.2",
    "@types/react": "~19.0.10",
    "typescript": "~5.8.3",
    "eslint": "~9.25.0",
    "eslint-config-expo": "~9.2.0"
  },
  "private": true,
  "expo": {
    "doctor": {
      "reactNativeDirectoryCheck": {
        "listUnknownPackages": false
      }
    }
  }
}
```

#### `firebase.json` for react-native-firebase v6:

```json
# N/A
```

</p>
</details>

### iOS

<details><summary>Click To Expand</summary>
<p>

#### `ios/Podfile`:

- [ ] I'm not using Pods
- [x] I'm using Pods and my Podfile looks like:

```ruby
# N/A
```

#### `AppDelegate.m`:

```objc
// N/A
```

</p>
</details>

---

### Android

<details><summary>Click To Expand</summary>
<p>

#### Have you converted to AndroidX?

- [ ] my application is an AndroidX application?
- [ ] I am using `android/gradle.settings` `jetifier=true` for Android compatibility?
- [ ] I am using the NPM package `jetifier` for react-native compatibility?

#### `android/build.gradle`:

```groovy
// N/A
```

#### `android/app/build.gradle`:

```groovy
// N/A
```

#### `android/settings.gradle`:

```groovy
// N/A
```

#### `MainApplication.java`:

```java
// N/A
```

#### `AndroidManifest.xml`:

```xml
<!-- N/A -->
```

</p>
</details>

---

## Environment

<details><summary>Click To Expand</summary>
<p>

**`react-native info` output:**

```
OUTPUT GOES HERE
```

- **Platform that you're experiencing the issue on**:
  - [ ] iOS
  - [ ] Android
  - [ ] **iOS** but have not tested behavior on Android
  - [ ] **Android** but have not tested behavior on iOS
  - [ ] Both
- **`react-native-firebase` version you're using that has this issue:**
  - `e.g. 22.2.0`
- **`Firebase` module(s) you're using that has the issue:**
  - `crashlytics`
- **Are you using `TypeScript`?**
  - `Y/N` & `VERSION`

</p>
</details>

---

**Summary:**
When using `expo-dev-client`, native crashes triggered by `crashlytics().crash()` are intercepted by the Expo error overlay and are not reported to Firebase Crashlytics. Removing `expo-dev-client` restores the expected behavior. If this is expected, please document it to save others time.

---
