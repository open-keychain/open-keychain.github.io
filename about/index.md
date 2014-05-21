---
layout: page
title: About
---

# Description

OpenKeychain allows you to manage cryptographic keys and encrypt messages as well as files for your contacts. It enables a secure end-to-end communication in times of mass surveillance.

It implements the OpenPGP standard, also often referred to as GPG or PGP (Trademark of Symantec). The standard has been proven to be resistant against modern active attackers and was required by Edward Snowden to allow secure communications with him.
Features

  * OpenKeychain is Open Source and free
  * All necessary cryptographic operations such as encryption/decryption as well as signing/verifying
  * Send keys via NFC or QR codes
  * Import from keyserver, sd card, NFC, QR codes
  * Import supports keys from other OpenPGP software like GPG
  * Upload your keys to keyservers
  * Certify the authenticity of other keys

# Expert Features

  * OpenKeychain is Free Software (GPLv3+), thus you can verify that it does not contain any backdoors by inspecting the code and building it yourself.
  * We try to design our build system as deterministically as possible and avoid pre-compiled dependencies from other sources.
  * Intent-based API, which always requires user interaction before anything is done. No automatic returns of decrypted content or similar security failures
  * Easy remote service API allowing operations without user interaction. Users can grant/revert access on an application basis.

# Requirements

  * Android version: 2.3

# Permission

  * Full network access: Internet access is ONLY used for keyserver queries
  * Control Near Field Communication: To exchange keys via NFC
  * Modify or delete the contents of your USB storage: To export keys to the sd card
  * Read the contents of your USB storage: To import keys from the sd card
