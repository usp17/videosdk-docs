---
title: Stop HLS | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Stop HLS
pagination_label: Stop HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: stop-hls
---

# Stop HLS

This could refer to stopping the transmission of an ongoing HLS stream, which would mean the stream is no longer available to viewers.

## Stopping HLS

`stopHls()` can be used to stop a interactive livestream of the meeting which can be accessed from the `useMeeting` hook.

### Example

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

const MeetingView = () => {
  const { stopHls } = useMeeting();

  const handleStopHls = () => {
    // Stop Hls
    stopHls();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleStopHls();
        }}
      >
        <Text>Stop Hls</Text>
      </TouchableOpacity>
    </>
  );
};
```

## Event associated with HLS

- **onHlsStateChanged** - Whenever meeting HLS state changes, then `onHlsStateChanged` event will trigger.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `Constants.hlsEvents.HLS_STARTED`

```js
import { Constants, useMeeting } from "@videosdk.live/react-native-sdk";

function onHlsStateChanged(data) {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    console.log("Meeting Hls is started");
  }else if (status === Constants.hlsEvents.HLS_PLAYABLE) {
    //highlight-start
    // on hlsStateChanged started you will receive downstreamUrl
    const { downstreamUrl } = data;
    //highlight-end
    console.log("Meeting Hls is Playable");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
  } else {
    //
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onHlsStateChanged,
  ...
});

```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [stopHls](/react-native/api/sdk-reference/use-meeting/methods#stophls)
- [onHlsStateChanged](/react-native/api/sdk-reference/use-meeting/events#onhlsstatechanged)
