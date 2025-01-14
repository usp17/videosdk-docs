---
title: Recording Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Recording Events
pagination_label: Recording Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-events
---

# Recording Events

VideoSDK provides `recording-state-changed` event which will notify you of the current state of recording for the meeting.

### recording-state-changed

- This event will be triggered when the meeting's recording status changed.
- This event can be subscribed from the `meeting` object.

### Example

Here is the usage of the event mentioned in this page.

```javascript
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const Constants = VideoSDK.Constants;

meeting.on("recording-state-changed", (data) => {
  const { status } = data;

  if (status === Constants.recordingEvents.RECORDING_STARTING) {
    console.log("Meeting recording is starting");
  } else if (status === Constants.recordingEvents.RECORDING_STARTED) {
    console.log("Meeting recording is started");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPING) {
    console.log("Meeting recording is stopping");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPED) {
    console.log("Meeting recording is stopped");
  } else {
    //
  }
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [recording-state-changed](/javascript/api/sdk-reference/meeting-class/events#recording-state-changed)
