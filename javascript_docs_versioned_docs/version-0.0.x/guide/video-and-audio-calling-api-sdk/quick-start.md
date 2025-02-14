---
title: Quick Start
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
  - Javascript SDK implemntation
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start for Conference in Javascript

VideoSDK enables you to embed the video calling feature into your Javascript application in minutes.

In this quickstart, we are going to explore group calling feature of Video SDK. We will go through step by step guide of integrating video calling with Javascript Video SDK.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- Have Node and NPM installed on your device.

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app. Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/js-rtc).

First create one empty project using `mkdir folder_name` on your preferable location.

### Install Video SDK

You can import VideoSDK using `<script>` tag or you can install the VideoSDK using the below-mentioned npm command. Make sure you are in your app directory before you run this command.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="<script>" label="<script>" default>

```html
<html>
  <head>
    ....
  </head>
  <body>
    .....
    <script src="https://sdk.videosdk.live/js-sdk/0.0.67/videosdk.js"></script>
  </body>
</html>
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install @videosdk.live/js-sdk
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @videosdk.live/js-sdk
```

</TabItem>
</Tabs>

## Structure of the project

Your project structure should look like this.

```jsx title="Project Structure"
  root
   ├── index.html
   ├── config.js
   ├── index.js
```

We are going to work on two files:

- index.html: Responsible to create basic UI.
- config.js: Responsible to store token.
- index.js: Responsible to render meeting view and join the meeting.

### Step 1 : Create UI

In this step, we are going to create HTML file which will have two screens `join-screen` and `grid-screen`.

```html title="index.html"
<!DOCTYPE html>
<html>
  <head> </head>

  <body>
    <div id="join-screen">
      <!-- Create new Meeting Button -->
      <button id="createMeetingBtn">New Meeting</button>
      OR
      <!-- Join existing Meeting -->
      <input type="text" id="meetingIdTxt" placeholder="Enter Meeting id" />
      <button id="joinBtn">Join Meeting</button>
    </div>

    <!-- for Managing meeting status -->
    <div id="textDiv"></div>

    <div id="grid-screen" style="display: none">
      <!-- To Display MeetingId -->
      <h3 id="meetingIdHeading"></h3>

      <!-- Controllers -->
      <button id="leaveBtn">Leave</button>
      <button id="toggleMicBtn">Toggle Mic</button>
      <button id="toggleWebCamBtn">Toggle WebCam</button>

      <!-- render Video -->
      <div class="row" id="videoContainer"></div>
    </div>

    <!-- Add VideoSDK script -->
    //highlight-next-line
    <script src="https://sdk.videosdk.live/js-sdk/0.0.63/videosdk.js"></script>
    <script src="config.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_join_screen.png' />

</center>

### Step 2 : Implement Join Screen

Set token in `config.js` file which is generated from [here](https://app.videosdk.live/login).

```js title="config.js"
// Auth token we will use to generate a meeting and connect to it
TOKEN = "Your_Token_Here";
```

Now get all elements from DOM and declare following variables in `index.js` file and then add Event Listener to the join and create meeting buttons.

```js title="index.js"
// Getting Elements from DOM
const joinButton = document.getElementById("joinBtn");
const leaveButton = document.getElementById("leaveBtn");
const toggleMicButton = document.getElementById("toggleMicBtn");
const toggleWebCamButton = document.getElementById("toggleWebCamBtn");
const createButton = document.getElementById("createMeetingBtn");
const videoContainer = document.getElementById("videoContainer");
const textDiv = document.getElementById("textDiv");

// Declare Variables
let meeting = null;
let meetingId = "";
let isMicOn = false;
let isWebCamOn = false;

async function initializeMeeting() {}

function createLocalParticipant() {}

function createVideoElement() {}

function createAudioElement() {}

function setTrack() {}

// Join Meeting Button Event Listener
joinButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Joining the meeting...";

  roomId = document.getElementById("meetingIdTxt").value;
  meetingId = roomId;

  await initializeMeeting();
});

// Create Meeting Button Event Listener
createButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Please wait, we are joining the meeting";

  //highlight-start
  // API call to create meeting
  const url = `https://api.videosdk.live/v2/rooms`;
  const options = {
    method: "POST",
    headers: { Authorization: TOKEN, "Content-Type": "application/json" },
  };

  const { roomId } = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => alert("error", error));
  meetingId = roomId;
  //highlight-end

  await initializeMeeting();
});
```

### Step 3 : Initialize meeting

In this step, we will initialize meeting through `initMeeting()` function and join that meeting.

```js title="startMeeting index.js"
// Initialize meeting
async function initializeMeeting() {
  window.VideoSDK.config(TOKEN);

  meeting = window.VideoSDK.initMeeting({
    meetingId: meetingId, // required
    name: "Thomas Edison", // required
    micEnabled: true, // optional, default: true
    webcamEnabled: true, // optional, default: true
  });

  meeting.join();

  // Creating local participant
  createLocalParticipant();

  // Setting local participant stream
  meeting.localParticipant.on("stream-enabled", (stream) => {
    setTrack(stream, null, meeting.localParticipant, true);
  });

  // meeting joined event
  meeting.on("meeting-joined", () => {
    textDiv.style.display = "none";
    document.getElementById("grid-screen").style.display = "block";
    document.getElementById(
      "meetingIdHeading"
    ).textContent = `Meeting Id: ${meetingId}`;
  });

  // meeting left event
  meeting.on("meeting-left", () => {
    videoContainer.innerHTML = "";
  });

  // Remote participants Event
  // participant joined
  meeting.on("participant-joined", (participant) => {
    //  ...
  });

  // participant left
  meeting.on("participant-left", (participant) => {
    //  ...
  });
}
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_init_meeting.png' />

</center>

### Step 4 : Create Media Elements

In this step, we will create a function that helps us to create audio and video elements for displaying local and remote participants. We will also set the appropriate media track based on whether it's a video or audio.

```js title=index.js
// creating video element
function createVideoElement(pId, name) {
  let videoFrame = document.createElement("div");
  videoFrame.setAttribute("id", `f-${pId}`);

  //create video
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  videoElement.setAttribute("playsinline", true);
  videoElement.setAttribute("width", "300");
  videoFrame.appendChild(videoElement);

  let displayName = document.createElement("div");
  displayName.innerHTML = `Name : ${name}`;

  videoFrame.appendChild(displayName);
  return videoFrame;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  audioElement.style.display = "none";
  return audioElement;
}

// creating local participant
function createLocalParticipant() {
  let localParticipant = createVideoElement(
    meeting.localParticipant.id,
    meeting.localParticipant.displayName
  );
  videoContainer.appendChild(localParticipant);
}

// setting media track
function setTrack(stream, audioElement, participant, isLocal) {
  if (stream.kind == "video") {
    isWebCamOn = true;
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    let videoElm = document.getElementById(`v-${participant.id}`);
    videoElm.srcObject = mediaStream;
    videoElm
      .play()
      .catch((error) =>
        console.error("videoElem.current.play() failed", error)
      );
  }
  if (stream.kind == "audio") {
    if (isLocal) {
      isMicOn = true;
    } else {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(stream.track);
      audioElement.srcObject = mediaStream;
      audioElement
        .play()
        .catch((error) => console.error("audioElem.play() failed", error));
    }
  }
}
```

### Step 5 : Handle participant events

in this step three events are used `participant-joined`, `participant-left` and `stream-enabled`.
Lets understand how we will use that event.

1. `participant-joined`: When a remote participant joins this event will trigger, in event callback will create video and audio elements which we had define in previous steps for rendering their video and audio streams.

2. `participant-left`: When a remote participant leaves this event will trigger, in event callback will remove the corresponding video and audio elements.

3. `stream-enabled`: It Handle the media track of a specific participant by associating it with the appropriate video or audio element.

```js title="index.js"
// Initialize meeting
async function initializeMeeting() {
  // ...

  //  participant joined
  meeting.on("participant-joined", (participant) => {
    let videoElement = createVideoElement(
      participant.id,
      participant.displayName
    );
    let audioElement = createAudioElement(participant.id);
    // stream-enabled
    participant.on("stream-enabled", (stream) => {
      setTrack(stream, audioElement, participant, false);
    });
    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(audioElement);
  });

  // participants left
  meeting.on("participant-left", (participant) => {
    let vElement = document.getElementById(`f-${participant.id}`);
    vElement.remove(vElement);

    let aElement = document.getElementById(`a-${participant.id}`);
    aElement.remove(aElement);
  });
}
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_grid_screen.png' />

</center>

### Step 6 : Implement Controls

In this step, we will implement meeting functionalities such as toggleMic, toggleWebcam and leave meeting

```js title="index.js"
// leave Meeting Button Event Listener
leaveButton.addEventListener("click", async () => {
  meeting?.leave();
  document.getElementById("grid-screen").style.display = "none";
  document.getElementById("join-screen").style.display = "block";
});

// Toggle Mic Button Event Listener
toggleMicButton.addEventListener("click", async () => {
  if (isMicOn) {
    // Disable Mic in Meeting
    meeting?.muteMic();
  } else {
    // Enable Mic in Meeting
    meeting?.unmuteMic();
  }
  isMicOn = !isMicOn;
});

// Toggle Web Cam Button Event Listener
toggleWebCamButton.addEventListener("click", async () => {
  if (isWebCamOn) {
    // Disable Webcam in Meeting
    meeting?.disableWebcam();

    let vElement = document.getElementById(`f-${meeting.localParticipant.id}`);
    vElement.style.display = "none";
  } else {
    // Enable Webcam in Meeting
    meeting?.enableWebcam();

    let vElement = document.getElementById(`f-${meeting.localParticipant.id}`);
    vElement.style.display = "inline";
  }
  isWebCamOn = !isWebCamOn;
});
```

## Run your code

Once you are all set with the steps mentioned above run your application as mentioned in the code-block below.

```bash
live-server --port=8000
```

## Final Output

We are done with implementation of customised video calling app in Javascript using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/js_quickstart_output.mp4' width={"100%"} />

<br/>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/js-rtc).
:::
