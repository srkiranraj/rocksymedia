// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {

    var samples = {
        'Bengali': [
            {
                "track": 1,
                "name": "RMW02F001",
                "length": "02:49",
                "file": "Bengali/Female/RMW02F001.mp3"
            }, {
                "track": 2,
                "name": "RMW02F002",
                "length": "00:49",
                "file": "Bengali/Female/RMW02F002.m4a"
            }, {
                "track": 3,
                "name": "RMW02M001",
                "length": "01:10",
                "file": "Bengali/Male/RMW02M001.mp3"
            }, {
                "track": 4,
                "name": "RMW02M002",
                "length": "00:35",
                "file": "Bengali/Male/RMW02M002.mp3"
            }, {
                "track": 5,
                "name": "RMW02M003",
                "length": "00:59",
                "file": "Bengali/Male/RMW02M003.mp3"
            }, {
                "track": 6,
                "name": "RMW02M004",
                "length": "01:19",
                "file": "Bengali/Male/RMW02M004.mp3"
            }, {
                "track": 7,
                "name": "RMW02M005",
                "length": "01:05",
                "file": "Bengali/Male/RMW02M005.mp3"
            }, {
                "track": 8,
                "name": "RMW02M006",
                "length": "01:11",
                "file": "Bengali/Male/RMW02M006.mp3"
            }
        ],
        'Gujarati': [
            {
                "track": 1,
                "name": "RMW04F001",
                "length": "00:36",
                "file": "Gujarati/Female/RMW04F001.mp3"
            }, {
                "track": 2,
                "name": "RMW04F002",
                "length": "01:17",
                "file": "Gujarati/Female/RMW04F002.mp3"
            }, {
                "track": 3,
                "name": "RMW04F003",
                "length": "00:20",
                "file": "Gujarati/Female/RMW04F003.mp3"
            }, {
                "track": 4,
                "name": "RMW04M001",
                "length": "01:19",
                "file": "Gujarati/Male/RMW04M001.mp3"
            }, {
                "track": 5,
                "name": "RMW04M002",
                "length": "00:33",
                "file": "Gujarati/Male/RMW04M002.mp3"
            }, {
                "track": 6,
                "name": "RMW04M003",
                "length": "01:24",
                "file": "Gujarati/Male/RMW04M003.mp3"
            }
        ],
        'Kannada': [
            {
                "track": 1,
                "name": "RMW16F001",
                "length": "01:23",
                "file": "Kannada/Female/RMW16F001.wav"
            }, {
                "track": 2,
                "name": "RMW16F002",
                "length": "00:34",
                "file": "Kannada/Female/RMW16F002.mp3"
            }, {
                "track": 3,
                "name": "RMW16F003",
                "length": "00:38",
                "file": "Kannada/Female/RMW16F003.WAV"
            }, {
                "track": 4,
                "name": "RMW16M001",
                "length": "00:40",
                "file": "Kannada/Male/RMW16M001.mp3"
            }, {
                "track": 5,
                "name": "RMW16M002",
                "length": "03:21",
                "file": "Kannada/Male/RMW16M002.mp3"
            }, {
                "track": 6,
                "name": "RMW16M003",
                "length": "00:48",
                "file": "Kannada/Male/RMW16M003.mp3"
            }, {
                "track": 7,
                "name": "RMW16M004",
                "length": "00:11",
                "file": "Kannada/Male/RMW16M004.mp3"
            }
        ],
        'Malayalam': [
            {
                "track": 1,
                "name": "RMW17F001",
                "length": "02:23",
                "file": "Malayalam/Female/RMW17F001.mp3"
            }, {
                "track": 2,
                "name": "RMW17F002",
                "length": "00:29",
                "file": "Malayalam/Female/RMW17F002.mp3"
            }, {
                "track": 3,
                "name": "RMW17F003",
                "length": "00:36",
                "file": "Malayalam/Female/RMW17F003.mp3"
            }, {
                "track": 4,
                "name": "RMW17M001",
                "length": "00:31",
                "file": "Malayalam/Male/RMW17M001.mp3"
            }, {
                "track": 5,
                "name": "RMW17M002",
                "length": "00:24",
                "file": "Malayalam/Male/RMW17M002.mp3"
            }, {
                "track": 6,
                "name": "RMW17M003",
                "length": "00:09",
                "file": "Malayalam/Male/RMW17M003.mp3"
            }, {
                "track": 7,
                "name": "RMW17M004",
                "length": "00:34",
                "file": "Malayalam/Male/RMW17M004.mp3"
            }, {
                "track": 8,
                "name": "RMW17M005",
                "length": "01:10",
                "file": "Malayalam/Male/RMW17M005.mp3"
            }
        ],
        'Marathi': [
            {
                "track": 1,
                "name": "RMW09F001",
                "length": "00:25",
                "file": "Marathi/Female/RMW09F001.mp3"
            }, {
                "track": 2,
                "name": "RMW09F002",
                "length": "00:22",
                "file": "Marathi/Female/RMW09F002.mp3"
            }, {
                "track": 3,
                "name": "RMW09F003",
                "length": "00:50",
                "file": "Marathi/Female/RMW09F003.mp3"
            }, {
                "track": 4,
                "name": "RMW09M001",
                "length": "00:46",
                "file": "Marathi/Male/RMW09M001.mp3"
            }, {
                "track": 5,
                "name": "RMW09M002",
                "length": "00:23",
                "file": "Marathi/Male/RMW09M002.mp3"
            }, {
                "track": 6,
                "name": "RMW09M003",
                "length": "00:27",
                "file": "Marathi/Male/RMW09M003.mp3"
            }
        ],
        'Oriya': [
            {
                "track": 1,
                "name": "RMW11F001",
                "length": "00:30",
                "file": "Oriya/Female/RMW11F001.wma"
            }, {
                "track": 2,
                "name": "RMW11F002",
                "length": "02:07",
                "file": "Oriya/Female/RMW11F002.mp3"
            }, {
                "track": 3,
                "name": "RMW11F003",
                "length": "01:03",
                "file": "Oriya/Female/RMW11F003.mp3"
            }, {
                "track": 4,
                "name": "RMW11M001",
                "length": "00:46",
                "file": "Oriya/Male/RMW11M001.wma"
            }, {
                "track": 5,
                "name": "RMW11M002",
                "length": "01:38",
                "file": "Oriya/Male/RMW11M002.mp3"
            }, {
                "track": 6,
                "name": "RMW11M003",
                "length": "00:44",
                "file": "Oriya/Male/RMW11M003.mp3"
            }, {
                "track": 7,
                "name": "RMW11M001",
                "length": "00:44",
                "file": "Oriya/Male/RMW11M004.mp3"
            }
        ],
        'Tamil': [
            {
                "track": 1,
                "name": "RMW18F001",
                "length": "01:02",
                "file": "Tamil/Female/RMW18F001.mp3"
            }, {
                "track": 2,
                "name": "RMW18F002",
                "length": "00:29",
                "file": "Tamil/Female/RMW18F002.mp3"
            }, {
                "track": 3,
                "name": "RMW18F003",
                "length": "00:51",
                "file": "Tamil/Female/RMW18F003.mp3"
            }, {
                "track": 4,
                "name": "RMW18M001",
                "length": "00:31",
                "file": "Tamil/Male/RMW18M001.mp3"
            }, {
                "track": 5,
                "name": "RMW18M002",
                "length": "00:24",
                "file": "Tamil/Male/RMW18M002.mp3"
            }, {
                "track": 6,
                "name": "RMW18M003",
                "length": "00:36",
                "file": "Tamil/Male/RMW18M003.mp3"
            }, {
                "track": 7,
                "name": "RMW18M004",
                "length": "00:49",
                "file": "Tamil/Male/RMW18M004.mp3"
            }, {
                "track": 8,
                "name": "RMW18M005",
                "length": "00:37",
                "file": "Tamil/Male/RMW18M005.mp3"
            }
        ],
        'Telugu': [
            {
                "track": 1,
                "name": "RMW19F001",
                "length": "03:07",
                "file": "Telugu/Female/RMW19F001.wav"
            }, {
                "track": 2,
                "name": "RMW19F002",
                "length": "00:25",
                "file": "Telugu/Female/RMW19F002.wav"
            }, {
                "track": 3,
                "name": "RMW19F003",
                "length": "00:50",
                "file": "Telugu/Female/RMW19F003.wav"
            }, {
                "track": 4,
                "name": "RMW19M001",
                "length": "00:57",
                "file": "Telugu/Male/RMW19M001.wav"
            }, {
                "track": 5,
                "name": "RMW19M002",
                "length": "19:14",
                "file": "Telugu/Male/RMW19M002.mp3"
            }, {
                "track": 6,
                "name": "RMW19M003",
                "length": "00:28",
                "file": "Telugu/Male/RMW19M003.mp3"
            }
        ]
    }

    var initializeAudioPlayer = function(key) {

        $('#voicebank-player #plList').html('');
        $.each(samples[key], function(index, val) {
             $('#voicebank-player #plList').append('<li><div class="plItem"><div class="plNum">'+val['track']+'. </div><div class="plTitle">'+val['name']+'</div><div class="plLength">'+val['length']+'</div></div></li>');
        });

        var supportsAudio = !! document.createElement('audio').canPlayType;
        if (supportsAudio) {
            var index = 0,
                playing = false;
            mediaPath = 'assets/samples/',
            extension = '',
            tracks = samples[key],
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                // audio.src = mediaPath + tracks[id].file + extension;
                audio.src = mediaPath + tracks[id].file;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
            extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
            loadTrack(index);
        }
    };

    var index = 0;
    $.each(samples, function(key, value) {
        if(index == 0)
        {
            $('#voicebank #languages').append('<a data-language="'+key+'" class="language selected">'+key+'</a>');
            initializeAudioPlayer(key);
        }
        else
            $('#voicebank #languages').append('<a data-language="'+key+'" class="language">'+key+'</a>');
        index++;
    });

    $(document).on('click', '#voicebank #languages .language', function(event) {
        if(!$(this).hasClass('selected'))
        {
            $('#voicebank #languages').find('.selected').removeClass('selected');
            $(this).addClass('selected');
            initializeAudioPlayer($(this).data('language'));
        }
    });
    
});