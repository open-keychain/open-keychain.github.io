---
layout: page
title: Privacy Policy
---

> You don't have to take our word on all of this. OpenKeychain is an open source project. Anyone can study the source code and make an informed decision.

### We do not run infrastructure

OpenKeychain is an app that provides end-to-end encryption for other protocols, such as email.
We do not run infrastructure or provide cloud services.

### Keyservers

Public keys created in OpenKeychain can be uploaded to public keyservers.
These are not run by us and thus we are not responsible for them.
By default the [SKS keyserver pool](https://sks-keyservers.net/) is used.

### Sensitive Permissions

Because we request the CAMERA, GET_ACCOUNTS, and CONTACTS permissions, we [are required](https://support.google.com/googleplay/android-developer/answer/113469#privacy) to provide this Privacy Policy.
Data aquired using these permissions is **not** shared with cloud services.

  * The CAMERA permissions is required to scan QR Codes.
  * GET_ACCOUNTS is required to provide helpful autocomplete functionality for email addresses.
  * CONTACTS is required to link keys to contacts in your address book. **This is done offline.**