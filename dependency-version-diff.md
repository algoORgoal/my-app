# Dependency Version Differences

This document compares the dependency versions between your package.json and the provided input list, for both dependencies and devDependencies.

---

## 1. Dependencies with Version Mismatches

### dependencies

| Package Name                              | package.json Version | Input List Version |
| ----------------------------------------- | :------------------: | :----------------: |
| @react-navigation/elements                |        2.3.8         |   (not in input)   |
| @reduxjs/toolkit                          |        2.8.2         |   (not in input)   |
| @react-native-google-signin/google-signin |        14.0.1        |       13.3.1       |
| react-redux                               |        9.2.0         |   (not in input)   |

### devDependencies

| Package Name | package.json Version | Input List Version |
| ------------ | :------------------: | :----------------: |
| @babel/core  |        7.27.4        |   (not in input)   |

---

## 2. Dependencies Only in package.json

### dependencies

- @react-navigation/elements@2.3.8
- @reduxjs/toolkit@2.8.2
- @react-native-google-signin/google-signin@14.0.1
- react-redux@9.2.0

### devDependencies

- @babel/core@7.27.4

---

## 3. Dependencies Only in Input List

### dependencies

- @react-native-google-signin/google-signin@13.3.1

### devDependencies

_None_

---

## Notes

- The tables above list dependencies and devDependencies where the versions differ between package.json and the input list, or where a dependency is only present in one source.
- Please review and update your dependencies as needed to ensure consistency.
