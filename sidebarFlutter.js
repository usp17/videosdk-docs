module.exports = {
  "guideAudioAndVideoCalling": [
    {
      "type": "category",
      "label": "Introduction",
      "items": [
        "guide/video-and-audio-calling-api-sdk/concept-and-architecture",
        "guide/video-and-audio-calling-api-sdk/authentication-and-tokens"
      ],
      "collapsed": false
    },
    {
      "type": "category",
      "label": "Install the SDK",
      "items": [
        "guide/video-and-audio-calling-api-sdk/flutter-sdk",
        "guide/video-and-audio-calling-api-sdk/release-notes",
        "guide/video-and-audio-calling-api-sdk/migration-notes",
        "guide/video-and-audio-calling-api-sdk/known-issues"
      ],
      "collapsed": true
    },
    {
      "type": "category",
      "label": "Quick Start Guide",
      "items": [
        "guide/video-and-audio-calling-api-sdk/quick-start",
        "guide/video-and-audio-calling-api-sdk/quick-start-ils",
        {
          "type": "category",
          "label": "Run Sample Project",
          "items": [
            "guide/video-and-audio-calling-api-sdk/run-a-sample-project",
            "guide/video-and-audio-calling-api-sdk/run-a-sample-ils-project"
          ],
          "collapsed": false
        }
      ],
      "collapsed": false
    },
    {
      "type": "category",
      "label": "Audio and Video Calling",
      "items": [
        {
          "type": "category",
          "label": "Basic Features",
          "items": [
            {
              "type": "category",
              "label": "Setup Call",
              "items": [
                "guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting",
                "guide/video-and-audio-calling-api-sdk/setup-call/join-meeting",
                "guide/video-and-audio-calling-api-sdk/setup-call/leave-end-meeting"
              ],
              "collapsed": true
            },
            {
              "type": "category",
              "label": "Handling Media",
              "items": [
                "guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic",
                "guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera",
                "guide/video-and-audio-calling-api-sdk/handling-media/screen-share",
                "guide/video-and-audio-calling-api-sdk/handling-media/active-speaker-indication",
                "guide/video-and-audio-calling-api-sdk/handling-media/change-audio-ouptut-device",
                "guide/video-and-audio-calling-api-sdk/handling-media/change-video-input-device"
              ],
              "collapsed": true
            },
            {
              "type": "category",
              "label": "Rendering Media",
              "items": [
                "guide/video-and-audio-calling-api-sdk/render-media/display-video",
                "guide/video-and-audio-calling-api-sdk/render-media/layout-and-grid-management",
                "guide/video-and-audio-calling-api-sdk/render-media/understanding-call-quality",
                "guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track",
                "guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track"
              ],
              "collapsed": true
            },
            {
              "type": "category",
              "label": "Get Notified on Events",
              "items": [
                "guide/video-and-audio-calling-api-sdk/get-notified/room-events",
                "guide/video-and-audio-calling-api-sdk/get-notified/participant-events",
                "guide/video-and-audio-calling-api-sdk/get-notified/media-events",
                "guide/video-and-audio-calling-api-sdk/get-notified/recording-events",
                "guide/video-and-audio-calling-api-sdk/get-notified/rtmp-events",
                "guide/video-and-audio-calling-api-sdk/get-notified/hls-events",
                "guide/video-and-audio-calling-api-sdk/get-notified/error-events"
              ],
              "collapsed": true
            },
            {
              "type": "category",
              "label": "Collaboration in Meeting",
              "items": [
                "guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub",
                "guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/chat-using-pubsub"
              ],
              "collapsed": true
            },
            {
              "type": "category",
              "label": "Control Remote Participant",
              "items": [
                "guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media",
                "guide/video-and-audio-calling-api-sdk/control-remote-participant/mute-all-participants",
                "guide/video-and-audio-calling-api-sdk/control-remote-participant/remove-participant"
              ],
              "collapsed": true
            },
            {
              "type": "category",
              "label": "Recording and Live Streaming",
              "items": [
                "guide/video-and-audio-calling-api-sdk/recording-and-live-streaming/record-meeting",
                "guide/video-and-audio-calling-api-sdk/recording-and-live-streaming/rtmp-livestream",
                "guide/video-and-audio-calling-api-sdk/recording-and-live-streaming/interactive-livestream"
              ],
              "collapsed": true
            }
          ],
          "collapsed": true
        },
        {
          "type": "category",
          "label": "Extras",
          "items": [
            "guide/video-and-audio-calling-api-sdk/extras/flutter-ios-screen-share"
          ],
          "collapsed": true
        }
      ],
      "collapsed": true
    },

    {
      "type": "category",
      "label": "Interactive Live Streaming",
      "items": [
        {
          "type": "category",
          "label": "Integrate HLS",
          "items": [
            "guide/interactive-live-streaming/integrate-hls/overview",
            "guide/interactive-live-streaming/integrate-hls/start-hls",
            "guide/interactive-live-streaming/integrate-hls/stop-hls",
            "guide/interactive-live-streaming/integrate-hls/setup-hls-player"
          ]
        },
        {
          "type": "category",
          "label": "Handling Participants",
          "items": [
            "guide/interactive-live-streaming/handling-participants/manage-roles",
            "guide/interactive-live-streaming/handling-participants/invite-guest-on-stage",
            "guide/interactive-live-streaming/handling-participants/display-attendees-count",
            "guide/interactive-live-streaming/handling-participants/manage-on-screen-participants"
          ]
        },
        {
          "type": "category",
          "label": "Interaction in Livestream",
          "items": [
            "guide/interactive-live-streaming/interaction-in-livestream/chat",
            "guide/interactive-live-streaming/interaction-in-livestream/raise-hand",
            "guide/interactive-live-streaming/interaction-in-livestream/notify-attendees"
          ]
        }
      ],
      "collapsed": true
    }
  ],
  "apiSidebar": [
    {
      "type": "doc",
      "id": "api/sdk-reference/setup"
    },
    {
      "type": "doc",
      "id": "api/sdk-reference/terminology"
    },
    {
      "type": "category",
      "label": "Videosdk Class",
      "items": [
        "api/sdk-reference/videosdk-class/introduction",
        "api/sdk-reference/videosdk-class/properties",
        "api/sdk-reference/videosdk-class/methods"
      ]
    },
    {
      "type": "category",
      "label": "Room Class",
      "items": [
        "api/sdk-reference/room-class/introduction",
        "api/sdk-reference/room-class/properties",
        "api/sdk-reference/room-class/methods",
        "api/sdk-reference/room-class/events"
      ]
    },
    {
      "type": "category",
      "label": "Participant Class",
      "items": [
        "api/sdk-reference/participant-class/introduction",
        "api/sdk-reference/participant-class/properties",
        "api/sdk-reference/participant-class/methods",
        "api/sdk-reference/participant-class/events"
      ]
    },
    {
      "type": "category",
      "label": "Stream Class",
      "items": [
        "api/sdk-reference/stream-class/introduction",
        "api/sdk-reference/stream-class/properties"
      ]
    },
    {
      "type": "category",
      "label": "PubSub Class",
      "items": [
        "api/sdk-reference/pubsub-class/introduction",
        "api/sdk-reference/pubsub-class/methods",
        "api/sdk-reference/pubsub-class/pubsub-message-class",
        "api/sdk-reference/pubsub-class/pubsub-publish-options-class"
      ]
    },
    {
      "type": "doc",
      "id": "api/sdk-reference/custom-tracks"
    }
  ]
}
;
