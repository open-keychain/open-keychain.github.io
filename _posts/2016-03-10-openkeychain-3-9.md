---
layout: post
title: "Google Summer of Code 2016, and OpenKeychain 3.9: Performance Improvements and Text Handling"
---

# Google Summer of Code 2016

We are happy to announce that we have been accepted as an organization for [Google Summer of Code 2016](https://summerofcode.withgoogle.com/)!
We had a very positive experience with GSoC in the past years, gaining new contributors and features, and we hope the outcome will be equally successful this year!
Our issue tracker is already happily abuzz with students handing in their patches.

If you are a student and want to get paid for coding that feature you always wanted to see in OpenKeychain, check out our [GSoC 2016 Page](https://github.com/open-keychain/open-keychain/wiki/Google-Summer-of-Code-2016) and get involved!

# OpenKeychain 3.9

We released OpenKeychain 3.9 last thursday!

A few words on the major changes:

## Performance
Compared to security, the performance of our code was never a *huge* priority for us.
However, we received an increasing number of reports that the decryption and signing routines were really slow under certain circumstances.
In this new release, we got rid of some bottlenecks and use better caching, which should lead to a significant speedup for all crypto operations.

## Handling of Encrypted Text
An encrypted data file usually includes some amount of metadata on the encrypted content.
This includes things like the filename of the encrypted file, a modification date, and a flag whether the data is plain text or binary.
Until now, we mostly trusted this data - if it said it was text, we displayed it as text, if it said the content was binary, we treated it as binary, if there was a filename, we tried to guess the type by its file extension.
This *mostly* works - encrypting a `file.pdf` will detect the filetype as pdf, and offer PDF Viewers in the list of apps to open the file with.

However, there is the special case of an encrypted text which is marked as binary, and also comes with no filename.
With no information about the file content, we only supported saving the data and opening it as a generic binary file - for which no Apps usually exist to handle it.
This is correct behavior - but not particularly helpful if the user *knows* that the data is just a text and simply wants to view it.
Unfortunately, text data is incorrectly marked as binary quite often.

To improve on this situation, we now treat data where we have no better information about its content as plaintext, *if* it contains no invalid characters for an UTF-8 encoding.
We hope this change works as intended in most cases.


\- Vincent Breitmoser, Dominik Schürmann
