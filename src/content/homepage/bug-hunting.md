---
title: "Bug hunting"
index: 1
---
I've filed some bug reports for the Chromium browser project, mostly focused on Chrome extension APIs and runtime. You can see some of the public ones [on the Chromium bug tracker](https://issues.chromium.org/issues?q=%22derin%20eryilmaz%22) or you can find an overview of my bug work on [Google's Leaderboard](https://bughunters.google.com/profile/d465895d-ed3d-4f0b-a872-d80be440f7c3). I've also been mentioned in [Chrome's release updates](https://chromereleases.googleblog.com/2023/08/stable-channel-update-for-chromeos_25.html).

My favorite discovery is an XSS that allows Chrome extensions to edit/read local files on ChromeOS and run commands in its Linux container, among other dangerous things (it was given a CVE number and a severity of 8.8/10). The writeup can be found [on my blog](/blog/cve-2023-4369/). I also post other random things there.
