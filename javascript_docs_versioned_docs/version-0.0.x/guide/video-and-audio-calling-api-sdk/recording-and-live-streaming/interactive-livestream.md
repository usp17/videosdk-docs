---
title: Interactive Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Interactive Livestream (HLS)
pagination_label: Interactive Livestream (HLS)
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: interactive-livestream
---

# Interactive Livestream (HLS)

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can take part in a variety of activities like live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

<center>

![VideoSDK-HLS](/img/VideoSDK-HLS.png)

</center>

VideoSDK also allows you to configure the interactive livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop Interactive live streaming (HLS).

### `startHls()`

`startHls()` can be used to start a interactive livestream of the meeting which can be accessed from the `meeting` object. This method accepts one parameter:

- `config (optional)`: This parameter will define how the interactive livestream layout should look like.

  ```js
  const config = {
    // highlight-next-line
    // Layout Configuration
    layout: {
      type: "GRID", // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
      priority: "SPEAKER", // "PIN", Default : "SPEAKER"
      gridSize: 4, // MAX : 25
    },

    // highlight-next-line
    // Theme of livestream
    theme: "DARK", //  "LIGHT" | "DEFAULT"

    // highlight-next-line
    // `mode` is used to either interactive livestream video & audio both or only audio.
    mode: "video-and-audio", // "audio", Default : "video-and-audio"

    // highlight-next-line
    // Quality of livestream and is only applicable to `video-and-audio` type mode.
    quality: "high", // "low" | "med",  Default : "med"

    //highlight-start
    // This mode refers to orientation of recording.
    // landscape : Livestream the meeting in horizontally
    // portrait : Livestream the meeting in vertically (Best for mobile view)
    //highlight-end
    orientation: "landscape", // "portrait",  Default : "landscape"
  };

  startHls(config);
  ```

### `stopHls()`

- `stopHls()` is used to stop interactive livestream of the meeting which can be accessed from the `meeting` object.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const startHlsBtn = document.getElementById("startHlsBtn");
startHlsBtn.addEventListener("click", () => {
  // Start HLS
  meeting?.startHls({
    layout: {
      type: "GRID",
      priority: "SPEAKER",
      gridSize: 4,
    },
    theme: "DARK",
    mode: "video-and-audio",
    quality: "high",
    orientation: "landscape",
  });
});

const stopHlsBtn = document.getElementById("stopHlsBtn");
stopHlsBtn.addEventListener("click", () => {
  // Stop HLS
  meeting?.stopHls();
});
```

### Event associated with HLS

- **hls-state-changed** - Whenever meeting HLS state changes, then `hls-state-changed` event will trigger.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `Constants.hlsEvents.HLS_STARTED`

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const Constants = VideoSDK.Constants;

meeting.on("hls-state-changed", (data) => {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    // when hls is started you will receive downstreamUrl
    const { downstreamUrl } = data;

    console.log("Meeting Hls is started");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
  } else {
    //
  }
});
```

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls()](/javascript/api/sdk-reference/meeting-class/methods#starthls)
- [stopHls()](/javascript/api/sdk-reference/meeting-class/methods#stophls)
- [hls-state-changed](/javascript/api/sdk-reference/meeting-class/events#hls-state-changed)
