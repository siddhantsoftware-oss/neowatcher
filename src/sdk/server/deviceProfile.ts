export const DeviceProfile = {
    "MaxStreamingBitrate": 12000000,
    "MaxStaticBitrate": 100000000,
    "MusicStreamingTranscodingBitrate": 384000,
    "DirectPlayProfiles": [
        {
            "Container": "webm",
            "Type": "Video",
            "VideoCodec": "vp8,vp9,av1",
            "AudioCodec": "vorbis,opus"
        },
        {
            "Container": "mp4,m4v",
            "Type": "Video",
            "VideoCodec": "h264,hevc,vp9,av1",
            "AudioCodec": "aac,mp3,opus,flac,alac,vorbis"
        },
        {
            "Container": "mov",
            "Type": "Video",
            "VideoCodec": "h264",
            "AudioCodec": "aac,mp3,opus,flac,alac,vorbis"
        },
        {
            "Container": "opus",
            "Type": "Audio"
        },
        {
            "Container": "webm",
            "AudioCodec": "opus",
            "Type": "Audio"
        },
        {
            "Container": "mp3",
            "Type": "Audio"
        },
        {
            "Container": "aac",
            "Type": "Audio"
        },
        {
            "Container": "m4a",
            "AudioCodec": "aac",
            "Type": "Audio"
        },
        {
            "Container": "m4b",
            "AudioCodec": "aac",
            "Type": "Audio"
        },
        {
            "Container": "flac",
            "Type": "Audio"
        },
        {
            "Container": "alac",
            "Type": "Audio"
        },
        {
            "Container": "m4a",
            "AudioCodec": "alac",
            "Type": "Audio"
        },
        {
            "Container": "m4b",
            "AudioCodec": "alac",
            "Type": "Audio"
        },
        {
            "Container": "webma",
            "Type": "Audio"
        },
        {
            "Container": "webm",
            "AudioCodec": "webma",
            "Type": "Audio"
        },
        {
            "Container": "wav",
            "Type": "Audio"
        },
        {
            "Container": "ogg",
            "Type": "Audio"
        }
    ],
    "TranscodingProfiles": [
        {
            "Container": "ts",
            "Type": "Audio",
            "AudioCodec": "aac",
            "Context": "Streaming",
            "Protocol": "hls",
            "MaxAudioChannels": "2",
            "MinSegments": "2",
            "BreakOnNonKeyFrames": true
        },
        {
            "Container": "aac",
            "Type": "Audio",
            "AudioCodec": "aac",
            "Context": "Streaming",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "mp3",
            "Type": "Audio",
            "AudioCodec": "mp3",
            "Context": "Streaming",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "opus",
            "Type": "Audio",
            "AudioCodec": "opus",
            "Context": "Streaming",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "wav",
            "Type": "Audio",
            "AudioCodec": "wav",
            "Context": "Streaming",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "opus",
            "Type": "Audio",
            "AudioCodec": "opus",
            "Context": "Static",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "mp3",
            "Type": "Audio",
            "AudioCodec": "mp3",
            "Context": "Static",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "aac",
            "Type": "Audio",
            "AudioCodec": "aac",
            "Context": "Static",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "wav",
            "Type": "Audio",
            "AudioCodec": "wav",
            "Context": "Static",
            "Protocol": "http",
            "MaxAudioChannels": "2"
        },
        {
            "Container": "ts",
            "Type": "Video",
            "AudioCodec": "aac,mp3",
            "VideoCodec": "h264",
            "Context": "Streaming",
            "Protocol": "hls",
            "MaxAudioChannels": "2",
            "MinSegments": "2",
            "BreakOnNonKeyFrames": true
        }
    ],
    "ContainerProfiles": [],
    "CodecProfiles": [
        {
            "Type": "VideoAudio",
            "Codec": "aac",
            "Conditions": [
                {
                    "Condition": "Equals",
                    "Property": "IsSecondaryAudio",
                    "Value": "false",
                    "IsRequired": false
                }
            ]
        },
        {
            "Type": "VideoAudio",
            "Conditions": [
                {
                    "Condition": "Equals",
                    "Property": "IsSecondaryAudio",
                    "Value": "false",
                    "IsRequired": false
                }
            ]
        },
        {
            "Type": "Video",
            "Codec": "h264",
            "Conditions": [
                {
                    "Condition": "NotEquals",
                    "Property": "IsAnamorphic",
                    "Value": "true",
                    "IsRequired": false
                },
                {
                    "Condition": "EqualsAny",
                    "Property": "VideoProfile",
                    "Value": "high|main|baseline|constrained baseline|high 10",
                    "IsRequired": false
                },
                {
                    "Condition": "EqualsAny",
                    "Property": "VideoRangeType",
                    "Value": "SDR",
                    "IsRequired": false
                },
                {
                    "Condition": "LessThanEqual",
                    "Property": "VideoLevel",
                    "Value": "52",
                    "IsRequired": false
                },
                {
                    "Condition": "NotEquals",
                    "Property": "IsInterlaced",
                    "Value": "true",
                    "IsRequired": false
                }
            ]
        },
        {
            "Type": "Video",
            "Codec": "hevc",
            "Conditions": [
                {
                    "Condition": "NotEquals",
                    "Property": "IsAnamorphic",
                    "Value": "true",
                    "IsRequired": false
                },
                {
                    "Condition": "EqualsAny",
                    "Property": "VideoProfile",
                    "Value": "main|main 10",
                    "IsRequired": false
                },
                {
                    "Condition": "EqualsAny",
                    "Property": "VideoRangeType",
                    "Value": "SDR",
                    "IsRequired": false
                },
                {
                    "Condition": "LessThanEqual",
                    "Property": "VideoLevel",
                    "Value": "183",
                    "IsRequired": false
                },
                {
                    "Condition": "NotEquals",
                    "Property": "IsInterlaced",
                    "Value": "true",
                    "IsRequired": false
                }
            ]
        },
        {
            "Type": "Video",
            "Codec": "vp9",
            "Conditions": [
                {
                    "Condition": "EqualsAny",
                    "Property": "VideoRangeType",
                    "Value": "SDR|HDR10|HLG",
                    "IsRequired": false
                }
            ]
        },
        {
            "Type": "Video",
            "Codec": "av1",
            "Conditions": [
                {
                    "Condition": "EqualsAny",
                    "Property": "VideoRangeType",
                    "Value": "SDR|HDR10|HLG",
                    "IsRequired": false
                }
            ]
        }
    ],
    "SubtitleProfiles": [
        {
            "Format": "vtt",
            "Method": "External"
        },
        {
            "Format": "ass",
            "Method": "External"
        },
        {
            "Format": "ssa",
            "Method": "External"
        }
    ],
    "ResponseProfiles": [
        {
            "Type": "Video",
            "Container": "m4v",
            "MimeType": "video/mp4"
        }
    ]
}