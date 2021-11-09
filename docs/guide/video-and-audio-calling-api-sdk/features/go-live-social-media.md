---
title: RTMP Live Social Media Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: RTMP Live Social Media features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Go Live On Social Media
pagination_label: Go Live On Social Media
keywords:
  - Facebook Live
  - Youtube Live
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: go-live-social-media
---

# Go Live On Social Media

This feature allows participant to broadcast meeting on various social media platforms such as Facebook or Youtube.
This guide will provide an overview of how participant can start and stop broadcasting meeting.

1. **Start LiveStream** - By using `startLivestream()` function, a participant can start broadcasting meeting on various platforms by provding url and stream keys as an argument.
2. **Stop LiveStream** - By using `stopLivestream()` function, a participant can stop broadcasting on all platforms.

### Start And Stop Live Stream

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Start Live Stream
  meeting?.startLivestream([
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "key",
    },
  ]);

  // Stop Live Stream
  meeting?.stopLivestream();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Start Live Stream
  meeting?.startLivestream([
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "key",
    },
  ]);

  // Stop Live Stream
  meeting?.stopLivestream();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Start Live Stream
  meeting?.startLivestream([
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "key",
    },
  ]);

  // Stop Live Stream
  meeting?.stopLivestream();
};
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
/// keep track of livestream
private var livestreamStarted = false

@IBAction func livestreamButtonTapped(_ sender: Any) {
    if !livestreamStarted {
        // prepare output
        // specify social-media-url and stream-key
        let output = LivestreamOutput(url: "<rtmp://a.rtmp.youtube.com/live2>", streamKey: "<stream-key>")
        
        // start livestream
        self.meeting?.startLivestream(outputs: [output])
    }
    else {
        // stop livestream
        self.meeting?.stopLivestream()
    }
}
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>

### Events

1. **livestream-started** - Whenever broadcasting of meeting started, `livestream-started` event will trigger.

2. **livestream-stopped** - Whenever broadcasting of meeting stopped, `livestream-stopped` event will trigger.

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
meeting.on("livestream-started", () => {
  console.log("LiveStream Started");
});

meeting.on("livestream-stopped", () => {
  console.log("LiveStream Stopped");
});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onLiveStreamstarted: () => {
    console.log("LiveStream Started");
  },
  onLiveStreamStopped: () => {
    console.log("LiveStream Stopped");
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onLiveStreamstarted: () => {
    console.log("LiveStream Started");
  },
  onLiveStreamStopped: () => {
    console.log("LiveStream Stopped");
  },
});
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
/// Called after livestream starts
func onLivestreamStarted() {
    liveStreamStarted = true
    
    // show indication that livestream is started
}

/// Called after livestream stops
func onLivestreamStopped() {
    liveStreamStarted = false

    // hide livestream indication
}
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>