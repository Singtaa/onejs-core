
declare namespace CS {
    // const __keep_incompatibility: unique symbol;
    // 
    // interface $Ref<T> {
    //     value: T
    // }
    // namespace System {
    //     interface Array$1<T> extends System.Array {
    //         get_Item(index: number):T;
    //         
    //         set_Item(index: number, value: T):void;
    //     }
    // }
    // interface $Task<T> {}
    namespace UnityEngine {
        /** Controls the global audio settings from script.
        */
        class AudioSettings extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Returns the speaker mode capability of the current audio driver. (Read Only)
            */
            public static get driverCapabilities(): UnityEngine.AudioSpeakerMode;
            /** AudioSettings.speakerMode is deprecated. Use AudioSettings.GetConfiguration and AudioSettings.Reset to adjust audio settings instead.
            */
            public static get speakerMode(): UnityEngine.AudioSpeakerMode;
            public static set speakerMode(value: UnityEngine.AudioSpeakerMode);
            /** Returns the current time of the audio system.
            */
            public static get dspTime(): number;
            /** Get the mixer's current output rate.
            */
            public static get outputSampleRate(): number;
            public static set outputSampleRate(value: number);
            /** Get the mixer's buffer size in samples.
            * @param $bufferLength Is the length of each buffer in the ringbuffer.
            * @param $numBuffers Is number of buffers.
            */
            public static GetDSPBufferSize ($bufferLength: $Ref<number>, $numBuffers: $Ref<number>) : void
            /** Returns an array with the names of all the available spatializer plugins.
            * @returns An array of spatializer names. 
            */
            public static GetSpatializerPluginNames () : System.Array$1<string>
            /** Returns the name of the spatializer selected on the currently-running platform.
            * @returns The spatializer plugin name. 
            */
            public static GetSpatializerPluginName () : string
            /** Sets the spatializer plugin for all platform groups. If a null or empty string is passed in, the existing spatializer plugin will be cleared.
            * @param $pluginName The spatializer plugin name.
            */
            public static SetSpatializerPluginName ($pluginName: string) : void
            /** Returns the current configuration of the audio device and system. The values in the struct may then be modified and reapplied via AudioSettings.Reset.
            * @returns The new configuration to be applied. 
            */
            public static GetConfiguration () : UnityEngine.AudioConfiguration
            /** Changes the device configuration and invokes the AudioSettings.OnAudioConfigurationChanged delegate with the argument deviceWasChanged=false. There's no guarantee that the exact settings specified are used, but Unity automatically uses the closest match that it supports. Note: This can cause main thread stalls if AudioSettings.Reset is called when objects are loading asynchronously. 
            * @param $config The new configuration to be used.
            * @returns True if all settings could be successfully applied. 
            */
            public static Reset ($config: UnityEngine.AudioConfiguration) : boolean
            public static add_OnAudioConfigurationChanged ($value: UnityEngine.AudioSettings.AudioConfigurationChangeHandler) : void
            public static remove_OnAudioConfigurationChanged ($value: UnityEngine.AudioSettings.AudioConfigurationChangeHandler) : void
            public constructor ()
        }
        /** These are speaker types defined for use with AudioSettings.speakerMode.
        */
        enum AudioSpeakerMode
        { Raw = 0, Mono = 1, Stereo = 2, Quad = 3, Surround = 4, Mode5point1 = 5, Mode7point1 = 6, Prologic = 7 }
        /** Specifies the current properties or desired properties to be set for the audio system.
        */
        class AudioConfiguration extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The current speaker mode used by the audio output device.
            */
            public speakerMode : UnityEngine.AudioSpeakerMode
            /** The length of the DSP buffer in samples determining the latency of sounds by the audio output device.
            */
            public dspBufferSize : number
            /** The current sample rate of the audio output device used.
            */
            public sampleRate : number
            /** The current maximum number of simultaneously audible sounds in the game.
            */
            public numRealVoices : number
            /** The  maximum number of managed sounds in the game. Beyond this limit sounds will simply stop playing.
            */
            public numVirtualVoices : number
        }
        class AudioBehaviour extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        /** A representation of audio sources in 3D.
        */
        class AudioSource extends UnityEngine.AudioBehaviour
        {
            protected [__keep_incompatibility]: never;
            /** The volume of the audio source (0.0 to 1.0).
            */
            public get volume(): number;
            public set volume(value: number);
            /** The pitch of the audio source.
            */
            public get pitch(): number;
            public set pitch(value: number);
            /** Playback position in seconds.
            */
            public get time(): number;
            public set time(value: number);
            /** Playback position in PCM samples.
            */
            public get timeSamples(): number;
            public set timeSamples(value: number);
            /** The default AudioClip to play.
            */
            public get clip(): UnityEngine.AudioClip;
            public set clip(value: UnityEngine.AudioClip);
            /** The default AudioResource to play.
            */
            public get resource(): UnityEngine.Audio.AudioResource;
            public set resource(value: UnityEngine.Audio.AudioResource);
            /** The target group to which the AudioSource should route its signal.
            */
            public get outputAudioMixerGroup(): UnityEngine.Audio.AudioMixerGroup;
            public set outputAudioMixerGroup(value: UnityEngine.Audio.AudioMixerGroup);
            /** Gets or sets the gamepad audio output type for this audio source.
            */
            public get gamepadSpeakerOutputType(): UnityEngine.GamepadSpeakerOutputType;
            public set gamepadSpeakerOutputType(value: UnityEngine.GamepadSpeakerOutputType);
            /** Is the clip playing right now (Read Only)?
            */
            public get isPlaying(): boolean;
            /** True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system.
            */
            public get isVirtual(): boolean;
            /** Is the audio clip looping?
            */
            public get loop(): boolean;
            public set loop(value: boolean);
            /** This makes the audio source not take into account the volume of the audio listener.
            */
            public get ignoreListenerVolume(): boolean;
            public set ignoreListenerVolume(value: boolean);
            /** If set to true, the audio source will automatically start playing on awake.
            */
            public get playOnAwake(): boolean;
            public set playOnAwake(value: boolean);
            /** Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus.
            */
            public get ignoreListenerPause(): boolean;
            public set ignoreListenerPause(value: boolean);
            /** Whether the Audio Source should be updated in the fixed or dynamic update.
            */
            public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
            public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
            /** Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo.
            */
            public get panStereo(): number;
            public set panStereo(value: number);
            /** Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D.
            */
            public get spatialBlend(): number;
            public set spatialBlend(value: number);
            /** Enables or disables spatialization.
            */
            public get spatialize(): boolean;
            public set spatialize(value: boolean);
            /** Determines if the spatializer effect is inserted before or after the effect filters.
            */
            public get spatializePostEffects(): boolean;
            public set spatializePostEffects(value: boolean);
            /** The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones.
            */
            public get reverbZoneMix(): number;
            public set reverbZoneMix(value: number);
            /** Bypass effects (Applied from filter components or global listener filters).
            */
            public get bypassEffects(): boolean;
            public set bypassEffects(value: boolean);
            /** When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group.
            */
            public get bypassListenerEffects(): boolean;
            public set bypassListenerEffects(value: boolean);
            /** When set doesn't route the signal from an AudioSource into the global reverb associated with reverb zones.
            */
            public get bypassReverbZones(): boolean;
            public set bypassReverbZones(value: boolean);
            /** Sets the Doppler scale for this AudioSource.
            */
            public get dopplerLevel(): number;
            public set dopplerLevel(value: number);
            /** Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space.
            */
            public get spread(): number;
            public set spread(value: number);
            /** Sets the priority of the AudioSource.
            */
            public get priority(): number;
            public set priority(value: number);
            /** Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume.
            */
            public get mute(): boolean;
            public set mute(value: boolean);
            /** Within the Min distance the AudioSource will cease to grow louder in volume.
            */
            public get minDistance(): number;
            public set minDistance(value: number);
            /** (Logarithmic rolloff) MaxDistance is the distance a sound stops attenuating at.
            */
            public get maxDistance(): number;
            public set maxDistance(value: number);
            /** Sets/Gets how the AudioSource attenuates over distance.
            */
            public get rolloffMode(): UnityEngine.AudioRolloffMode;
            public set rolloffMode(value: UnityEngine.AudioRolloffMode);
            /** Enable playing of audio source though a specfic gamepad.
            * @param $slot Slot number of the gamepad (0-3).
            * @returns Returns TRUE if enabling audio output through this users controller was successful. 
            */
            public PlayOnGamepad ($slot: number) : boolean
            /** Disables audio output to a gamepad for this audio source.
            * @returns Returns true if successful. 
            */
            public DisableGamepadOutput () : boolean
            public SetGamepadSpeakerMixLevel ($slot: number, $mixLevel: number) : boolean
            public SetGamepadSpeakerMixLevelDefault ($slot: number) : boolean
            public SetGamepadSpeakerRestrictedAudio ($slot: number, $restricted: boolean) : boolean
            /** Check if the platform supports an audio output type  on gamepads.
            * @param $outputType The desired output type.
            * @returns Returns true if the gamepad supports the specified audio output type. 
            */
            public static GamepadSpeakerSupportsOutputType ($outputType: UnityEngine.GamepadSpeakerOutputType) : boolean
            public Play () : void
            /** Plays the clip.
            * @param $delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
            */
            public Play ($delay: bigint) : void
            /** Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument.
            * @param $delay Delay time specified in seconds.
            */
            public PlayDelayed ($delay: number) : void
            /** Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from.
            * @param $time Time in seconds on the absolute time-line that AudioSettings.dspTime refers to for when the sound should start playing.
            */
            public PlayScheduled ($time: number) : void
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale.
            * @param $clip The clip being played.
            * @param $volumeScale The scale of the volume (0-1).
            */
            public PlayOneShot ($clip: UnityEngine.AudioClip) : void
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale.
            * @param $clip The clip being played.
            * @param $volumeScale The scale of the volume (0-1).
            */
            public PlayOneShot ($clip: UnityEngine.AudioClip, $volumeScale: number) : void
            /** Changes the time at which a sound that has already been scheduled to play will start.
            * @param $time Time in seconds.
            */
            public SetScheduledStartTime ($time: number) : void
            /** Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled.
            * @param $time Time in seconds.
            */
            public SetScheduledEndTime ($time: number) : void
            /** Stops playing the clip.
            */
            public Stop () : void
            /** Pauses playing the clip.
            */
            public Pause () : void
            /** Unpause the paused playback of this AudioSource.
            */
            public UnPause () : void
            /** Plays an AudioClip at a given position in world space.
            * @param $clip Audio data to play.
            * @param $position Position in world space from which sound originates.
            * @param $volume Playback volume.
            */
            public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3) : void
            /** Plays an AudioClip at a given position in world space.
            * @param $clip Audio data to play.
            * @param $position Position in world space from which sound originates.
            * @param $volume Playback volume.
            */
            public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3, $volume: number) : void
            /** Set the custom curve for the given AudioSourceCurveType.
            * @param $type The curve type that should be set.
            * @param $curve The curve that should be applied to the given curve type.
            */
            public SetCustomCurve ($type: UnityEngine.AudioSourceCurveType, $curve: UnityEngine.AnimationCurve) : void
            /** Get the current custom curve for the given AudioSourceCurveType.
            * @param $type The curve type to get.
            * @returns The custom AnimationCurve corresponding to the given curve type. 
            */
            public GetCustomCurve ($type: UnityEngine.AudioSourceCurveType) : UnityEngine.AnimationCurve
            /** Provides a block of the currently playing source's output data.
            * @param $samples The array to populate with audio samples. Its length must be a power of 2.
            * @param $channel The channel to sample from.
            */
            public GetOutputData ($samples: System.Array$1<number>, $channel: number) : void
            /** Provides a block of the currently playing audio source's spectrum data.
            * @param $samples The array to populate with audio samples. Its length must be a power of 2.
            * @param $channel The channel to sample from.
            * @param $window The FFTWindow type to use when sampling.
            */
            public GetSpectrumData ($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow) : void
            /** Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be set.
            * @param $value New value of the user-defined parameter.
            * @returns True, if the parameter could be set. 
            */
            public SetSpatializerFloat ($index: number, $value: number) : boolean
            /** Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be read.
            * @param $value Return value of the user-defined parameter that is read.
            * @returns True, if the parameter could be read. 
            */
            public GetSpatializerFloat ($index: number, $value: $Ref<number>) : boolean
            /** Reads a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be read.
            * @param $value Return value of the user-defined parameter that is read.
            * @returns True, if the parameter could be read. 
            */
            public GetAmbisonicDecoderFloat ($index: number, $value: $Ref<number>) : boolean
            /** Sets a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
            * @param $index Zero-based index of user-defined parameter to be set.
            * @param $value New value of the user-defined parameter.
            * @returns True, if the parameter could be set. 
            */
            public SetAmbisonicDecoderFloat ($index: number, $value: number) : boolean
            public constructor ()
        }
        /** A container for audio data.
        */
        class AudioClip extends UnityEngine.Audio.AudioResource
        {
            protected [__keep_incompatibility]: never;
            /** The length of the audio clip in seconds. (Read Only)
            */
            public get length(): number;
            /** The length of the audio clip in samples. (Read Only)
            */
            public get samples(): number;
            /** The number of channels in the audio clip. (Read Only)
            */
            public get channels(): number;
            /** The sample frequency of the clip in Hertz. (Read Only)
            */
            public get frequency(): number;
            /** The load type of the clip (read-only).
            */
            public get loadType(): UnityEngine.AudioClipLoadType;
            /** Preloads audio data of the clip when the clip asset is loaded. When this flag is off, scripts have to call AudioClip.LoadAudioData() to load the data before the clip can be played. Properties like length, channels and format are available before the audio data has been loaded.
            */
            public get preloadAudioData(): boolean;
            /** Returns true if this audio clip is ambisonic (read-only).
            */
            public get ambisonic(): boolean;
            /** Corresponding to the "Load In Background" flag in the inspector, when this flag is set, the loading will happen delayed without blocking the main thread.
            */
            public get loadInBackground(): boolean;
            /** Returns the current load state of the audio data associated with an AudioClip.
            */
            public get loadState(): UnityEngine.AudioDataLoadState;
            /** Loads the audio data of a clip. Clips that have "Preload Audio Data" set will load the audio data automatically.
            * @returns Returns true if loading succeeded. 
            */
            public LoadAudioData () : boolean
            /** Unloads the audio data associated with the clip. This works only for AudioClips that are based on actual sound file assets.
            * @returns Returns false if unloading failed. 
            */
            public UnloadAudioData () : boolean
            /** Fills an array with sample data from the clip.
            */
            public GetData ($data: System.Array$1<number>, $offsetSamples: number) : boolean
            /** Set sample data in a clip.
            */
            public SetData ($data: System.Array$1<number>, $offsetSamples: number) : boolean
            /** Creates a user AudioClip with a name and with the given length in samples, channels and frequency.
            * @param $name Name of clip.
            * @param $lengthSamples Number of sample frames.
            * @param $channels Number of channels per frame.
            * @param $frequency Sample frequency of clip.
            * @param $_3D Audio clip is played back in 3D.
            * @param $stream True if clip is streamed, that is if the pcmreadercallback generates data on the fly.
            * @param $pcmreadercallback This callback is invoked to generate a block of sample data. Non-streamed clips call this only once at creation time while streamed clips call this continuously.
            * @param $pcmsetpositioncallback This callback is invoked whenever the clip loops or changes playback position.
            * @returns A reference to the created AudioClip. 
            */
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean) : UnityEngine.AudioClip
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback) : UnityEngine.AudioClip
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, $pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback) : UnityEngine.AudioClip
        }
        /** Gamepad audio output types.
        */
        enum GamepadSpeakerOutputType
        { Speaker = 0, Vibration = 1, SecondaryVibration = 2 }
        /** Describes when an AudioSource or AudioListener is updated.
        */
        enum AudioVelocityUpdateMode
        { Auto = 0, Fixed = 1, Dynamic = 2 }
        /** This defines the curve type of the different custom curves that can be queried and set within the AudioSource.
        */
        enum AudioSourceCurveType
        { CustomRolloff = 0, SpatialBlend = 1, ReverbZoneMix = 2, Spread = 3 }
        /** Rolloff modes that a 3D sound can have in an audio source.
        */
        enum AudioRolloffMode
        { Logarithmic = 0, Linear = 1, Custom = 2 }
        /** Spectrum analysis windowing types.
        */
        enum FFTWindow
        { Rectangular = 0, Triangle = 1, Hamming = 2, Hanning = 3, Blackman = 4, BlackmanHarris = 5 }
        /** The Audio Low Pass Filter passes low frequencies of an AudioSource or all sounds reaching an AudioListener, while removing frequencies higher than the Cutoff Frequency.
        */
        class AudioLowPassFilter extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Returns or sets the current custom frequency cutoff curve.
            */
            public get customCutoffCurve(): UnityEngine.AnimationCurve;
            public set customCutoffCurve(value: UnityEngine.AnimationCurve);
            /** Lowpass cutoff frequency in hz. 10.0 to 22000.0. Default = 5000.0.
            */
            public get cutoffFrequency(): number;
            public set cutoffFrequency(value: number);
            /** Determines how much the filter's self-resonance is dampened.
            */
            public get lowpassResonanceQ(): number;
            public set lowpassResonanceQ(value: number);
            public constructor ()
        }
        /** The Audio High Pass Filter passes high frequencies of an AudioSource, and cuts off signals with frequencies lower than the Cutoff Frequency.
        */
        class AudioHighPassFilter extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Highpass cutoff frequency in hz. 10.0 to 22000.0. Default = 5000.0.
            */
            public get cutoffFrequency(): number;
            public set cutoffFrequency(value: number);
            /** Determines how much the filter's self-resonance isdampened.
            */
            public get highpassResonanceQ(): number;
            public set highpassResonanceQ(value: number);
            public constructor ()
        }
        /** The Audio Reverb Filter takes an Audio Clip and distorts it to create a custom reverb effect.
        */
        class AudioReverbFilter extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Set/Get reverb preset properties.
            */
            public get reverbPreset(): UnityEngine.AudioReverbPreset;
            public set reverbPreset(value: UnityEngine.AudioReverbPreset);
            /** Mix level of dry signal in output in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.
            */
            public get dryLevel(): number;
            public set dryLevel(value: number);
            /** Room effect level at low frequencies in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.0.
            */
            public get room(): number;
            public set room(value: number);
            /** Room effect high-frequency level re. low frequency level in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.0.
            */
            public get roomHF(): number;
            public set roomHF(value: number);
            /** Reverberation decay time at low-frequencies in seconds. Ranges from 0.1 to 20.0. Default is 1.0.
            */
            public get decayTime(): number;
            public set decayTime(value: number);
            /** Decay HF Ratio : High-frequency to low-frequency decay time ratio. Ranges from 0.1 to 2.0. Default is 0.5.
            */
            public get decayHFRatio(): number;
            public set decayHFRatio(value: number);
            /** Early reflections level relative to room effect in millibels (mB). Ranges from -10000.0 to 1000.0. Default is -10000.0.
            */
            public get reflectionsLevel(): number;
            public set reflectionsLevel(value: number);
            /** Late reverberation level relative to room effect in millibels (mB). Ranges from -10000.0 to 2000.0. Default is 0.0.
            */
            public get reflectionsDelay(): number;
            public set reflectionsDelay(value: number);
            /** Late reverberation level relative to room effect in millibels (mB). Ranges from -10000.0 to 2000.0. Default is 0.0.
            */
            public get reverbLevel(): number;
            public set reverbLevel(value: number);
            /** Late reverberation delay time relative to first reflection in seconds. Ranges from 0.0 to 0.1. Default is 0.04.
            */
            public get reverbDelay(): number;
            public set reverbDelay(value: number);
            /** Reverberation diffusion (echo density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
            */
            public get diffusion(): number;
            public set diffusion(value: number);
            /** Reverberation density (modal density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
            */
            public get density(): number;
            public set density(value: number);
            /** Reference high frequency in hertz (Hz). Ranges from 1000.0 to 20000.0. Default is 5000.0.
            */
            public get hfReference(): number;
            public set hfReference(value: number);
            /** Room effect low-frequency level in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.0.
            */
            public get roomLF(): number;
            public set roomLF(value: number);
            /** Reference low-frequency in hertz (Hz). Ranges from 20.0 to 1000.0. Default is 250.0.
            */
            public get lfReference(): number;
            public set lfReference(value: number);
            public constructor ()
        }
        /** Reverb presets used by the Reverb Zone class and the audio reverb filter.
        */
        enum AudioReverbPreset
        { Off = 0, Generic = 1, PaddedCell = 2, Room = 3, Bathroom = 4, Livingroom = 5, Stoneroom = 6, Auditorium = 7, Concerthall = 8, Cave = 9, Arena = 10, Hangar = 11, CarpetedHallway = 12, Hallway = 13, StoneCorridor = 14, Alley = 15, Forest = 16, City = 17, Mountains = 18, Quarry = 19, Plain = 20, ParkingLot = 21, SewerPipe = 22, Underwater = 23, Drugged = 24, Dizzy = 25, Psychotic = 26, User = 27 }
        /** Value describing the current load state of the audio data associated with an AudioClip.
        */
        enum AudioDataLoadState
        { Unloaded = 0, Loading = 1, Loaded = 2, Failed = 3 }
        /** An enum containing different compression types.
        */
        enum AudioCompressionFormat
        { PCM = 0, Vorbis = 1, ADPCM = 2, MP3 = 3, VAG = 4, HEVAG = 5, XMA = 6, AAC = 7, GCADPCM = 8, ATRAC9 = 9 }
        /** Determines how the audio clip is loaded in.
        */
        enum AudioClipLoadType
        { DecompressOnLoad = 0, CompressedInMemory = 1, Streaming = 2 }
        /** Representation of a listener in 3D space.
        */
        class AudioListener extends UnityEngine.AudioBehaviour
        {
            protected [__keep_incompatibility]: never;
            /** Controls the game sound volume (0.0 to 1.0).
            */
            public static get volume(): number;
            public static set volume(value: number);
            /** The paused state of the audio system.
            */
            public static get pause(): boolean;
            public static set pause(value: boolean);
            /** This lets you set whether the Audio Listener should be updated in the fixed or dynamic update.
            */
            public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
            public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
            /** Provides a block of the listener (master)'s output data.
            * @param $samples The array to populate with audio samples. Its length must be a power of 2.
            * @param $channel The channel to sample from.
            */
            public static GetOutputData ($samples: System.Array$1<number>, $channel: number) : void
            /** Provides a block of the listener (master)'s spectrum data.
            * @param $samples The array to populate with audio samples. Its length must be a power of 2.
            * @param $channel The channel to sample from.
            * @param $window The FFTWindow type to use when sampling.
            */
            public static GetSpectrumData ($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow) : void
            public constructor ()
        }
        /** Reverb Zones are used when you want to create location based ambient effects in the Scene.
        */
        class AudioReverbZone extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** The distance from the centerpoint that the reverb will have full effect at. Default = 10.0.
            */
            public get minDistance(): number;
            public set minDistance(value: number);
            /** The distance from the centerpoint that the reverb will not have any effect. Default = 15.0.
            */
            public get maxDistance(): number;
            public set maxDistance(value: number);
            /** Set/Get reverb preset properties.
            */
            public get reverbPreset(): UnityEngine.AudioReverbPreset;
            public set reverbPreset(value: UnityEngine.AudioReverbPreset);
            /** Room effect level (at mid frequencies).
            */
            public get room(): number;
            public set room(value: number);
            /** Relative room effect level at high frequencies.
            */
            public get roomHF(): number;
            public set roomHF(value: number);
            /** Relative room effect level at low frequencies.
            */
            public get roomLF(): number;
            public set roomLF(value: number);
            /** Reverberation decay time at mid frequencies.
            */
            public get decayTime(): number;
            public set decayTime(value: number);
            /** High-frequency to mid-frequency decay time ratio.
            */
            public get decayHFRatio(): number;
            public set decayHFRatio(value: number);
            /** Early reflections level relative to room effect.
            */
            public get reflections(): number;
            public set reflections(value: number);
            /** Initial reflection delay time.
            */
            public get reflectionsDelay(): number;
            public set reflectionsDelay(value: number);
            /** Late reverberation level relative to room effect.
            */
            public get reverb(): number;
            public set reverb(value: number);
            /** Late reverberation delay time relative to initial reflection.
            */
            public get reverbDelay(): number;
            public set reverbDelay(value: number);
            /** Reference high frequency (hz).
            */
            public get HFReference(): number;
            public set HFReference(value: number);
            /** Reference low frequency (hz).
            */
            public get LFReference(): number;
            public set LFReference(value: number);
            /** Value that controls the echo density in the late reverberation decay.
            */
            public get diffusion(): number;
            public set diffusion(value: number);
            /** Value that controls the modal density in the late reverberation decay.
            */
            public get density(): number;
            public set density(value: number);
            public constructor ()
        }
        /** The Audio Distortion Filter distorts the sound from an AudioSource or sounds reaching the AudioListener.
        */
        class AudioDistortionFilter extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Distortion value. 0.0 to 1.0. Default = 0.5.
            */
            public get distortionLevel(): number;
            public set distortionLevel(value: number);
            public constructor ()
        }
        /** The Audio Echo Filter repeats a sound after a given Delay, attenuating the repetitions based on the Decay Ratio.
        */
        class AudioEchoFilter extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Echo delay in ms. 10 to 5000. Default = 500.
            */
            public get delay(): number;
            public set delay(value: number);
            /** Echo decay per delay. 0 to 1. 1.0 = No decay, 0.0 = total decay (i.e. simple 1 line delay). Default = 0.5.
            */
            public get decayRatio(): number;
            public set decayRatio(value: number);
            /** Volume of original signal to pass to output. 0.0 to 1.0. Default = 1.0.
            */
            public get dryMix(): number;
            public set dryMix(value: number);
            /** Volume of echo signal to pass to output. 0.0 to 1.0. Default = 1.0.
            */
            public get wetMix(): number;
            public set wetMix(value: number);
            public constructor ()
        }
        /** The Audio Chorus Filter takes an Audio Clip and processes it creating a chorus effect.
        */
        class AudioChorusFilter extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Volume of original signal to pass to output. 0.0 to 1.0. Default = 0.5.
            */
            public get dryMix(): number;
            public set dryMix(value: number);
            /** Volume of 1st chorus tap. 0.0 to 1.0. Default = 0.5.
            */
            public get wetMix1(): number;
            public set wetMix1(value: number);
            /** Volume of 2nd chorus tap. This tap is 90 degrees out of phase of the first tap. 0.0 to 1.0. Default = 0.5.
            */
            public get wetMix2(): number;
            public set wetMix2(value: number);
            /** Volume of 3rd chorus tap. This tap is 90 degrees out of phase of the second tap. 0.0 to 1.0. Default = 0.5.
            */
            public get wetMix3(): number;
            public set wetMix3(value: number);
            /** Chorus delay in ms. 0.1 to 100.0. Default = 40.0 ms.
            */
            public get delay(): number;
            public set delay(value: number);
            /** Chorus modulation rate in hz. 0.0 to 20.0. Default = 0.8 hz.
            */
            public get rate(): number;
            public set rate(value: number);
            /** Chorus modulation depth. 0.0 to 1.0. Default = 0.03.
            */
            public get depth(): number;
            public set depth(value: number);
            public constructor ()
        }
        /** Use this class to record to an AudioClip using a connected microphone.
        */
        class Microphone extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** A list of available microphone devices, identified by name.
            */
            public static get devices(): System.Array$1<string>;
            /** Start Recording with device.
            * @param $deviceName The name of the device.
            * @param $loop Indicates whether the recording should continue recording if lengthSec is reached, and wrap around and record from the beginning of the AudioClip.
            * @param $lengthSec Is the length of the AudioClip produced by the recording.
            * @param $frequency The sample rate of the AudioClip produced by the recording.
            * @returns The function returns null if the recording fails to start. 
            */
            public static Start ($deviceName: string, $loop: boolean, $lengthSec: number, $frequency: number) : UnityEngine.AudioClip
            /** Stops recording.
            * @param $deviceName The name of the device.
            */
            public static End ($deviceName: string) : void
            /** Query if a device is currently recording.
            * @param $deviceName The name of the device.
            */
            public static IsRecording ($deviceName: string) : boolean
            /** Get the position in samples of the recording.
            * @param $deviceName The name of the device.
            */
            public static GetPosition ($deviceName: string) : number
            /** Get the frequency capabilities of a device.
            * @param $deviceName The name of the device.
            * @param $minFreq Returns the minimum sampling frequency of the device.
            * @param $maxFreq Returns the maximum sampling frequency of the device.
            */
            public static GetDeviceCaps ($deviceName: string, $minFreq: $Ref<number>, $maxFreq: $Ref<number>) : void
            public constructor ()
        }
        /** Allow recording the main output of the game or specific groups in the AudioMixer.
        */
        class AudioRenderer extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Enters audio recording mode. After this Unity will output silence until AudioRenderer.Stop is called.
            * @returns True if the engine was switched into output recording mode. False if it is already recording. 
            */
            public static Start () : boolean
            /** Exits audio recording mode. After this audio output will be audible again.
            * @returns True if the engine was recording when this function was called. 
            */
            public static Stop () : boolean
            /** Returns the number of samples available since the last time AudioRenderer.Render was called. This is dependent on the frame capture rate.
            * @returns Number of samples available since last recorded frame. 
            */
            public static GetSampleCountForCaptureFrame () : number
            public static Render ($buffer: Unity.Collections.NativeArray$1<number>) : boolean
            public constructor ()
        }
        /** MovieTexture has been removed. Use VideoPlayer instead.
        */
        class MovieTexture extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        enum WebCamFlags
        { FrontFacing = 1, AutoFocusPointSupported = 2 }
        /** Enum representing the different types of web camera device.
        */
        enum WebCamKind
        { WideAngle = 1, Telephoto = 2, ColorAndDepth = 3, UltraWideAngle = 4 }
        /** A structure describing the webcam device.
        */
        class WebCamDevice extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** A human-readable name of the device. Varies across different systems.
            */
            public get name(): string;
            /** True if camera faces the same direction a screen does, false otherwise.
            */
            public get isFrontFacing(): boolean;
            /** Property of type WebCamKind denoting the kind of webcam device.
            */
            public get kind(): UnityEngine.WebCamKind;
            /** A string identifier used to create a depth data based WebCamTexture.
            */
            public get depthCameraName(): string;
            /** Returns true if the camera supports automatic focusing on points of interest and false otherwise.
            */
            public get isAutoFocusPointSupported(): boolean;
            /** Possible WebCamTexture resolutions for this device.
            */
            public get availableResolutions(): System.Array$1<UnityEngine.Resolution>;
        }
        /** WebCam Textures are textures onto which the live video input is rendered.
        */
        class WebCamTexture extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
            /** Return a list of available devices.
            */
            public static get devices(): System.Array$1<UnityEngine.WebCamDevice>;
            /** Returns if the camera is currently playing.
            */
            public get isPlaying(): boolean;
            /** Set this to specify the name of the device to use.
            */
            public get deviceName(): string;
            public set deviceName(value: string);
            /** Set the requested frame rate of the camera device (in frames per second).
            */
            public get requestedFPS(): number;
            public set requestedFPS(value: number);
            /** Set the requested width of the camera device.
            */
            public get requestedWidth(): number;
            public set requestedWidth(value: number);
            /** Set the requested height of the camera device.
            */
            public get requestedHeight(): number;
            public set requestedHeight(value: number);
            /** Returns an clockwise angle (in degrees), which can be used to rotate a polygon so camera contents are shown in correct orientation.
            */
            public get videoRotationAngle(): number;
            /** Returns if the texture image is vertically flipped.
            */
            public get videoVerticallyMirrored(): boolean;
            /** Did the video buffer update this frame?
            */
            public get didUpdateThisFrame(): boolean;
            /** This property allows you to set/get the auto focus point of the camera. This works only on Android and iOS devices.
            */
            public get autoFocusPoint(): UnityEngine.Vector2 | null;
            public set autoFocusPoint(value: UnityEngine.Vector2 | null);
            /** This property is true if the texture is based on depth data.
            */
            public get isDepth(): boolean;
            /** Starts the camera.
            */
            public Play () : void
            /** Pauses the camera.
            */
            public Pause () : void
            /** Stops the camera.
            */
            public Stop () : void
            /** Gets the pixel color at coordinates (x, y).
            * @param $x The x coordinate of the pixel to get. The range is 0 through the (texture width - 1).
            * @param $y The y coordinate of the pixel to get. The range is 0 through the (texture height - 1).
            * @returns The pixel color. 
            */
            public GetPixel ($x: number, $y: number) : UnityEngine.Color
            /** Gets the pixel color data for a mipmap level as Color structs.
            * @returns An array that contains the pixel colors. 
            */
            public GetPixels () : System.Array$1<UnityEngine.Color>
            /** Gets the pixel color data for part of the texture as Color structs.
            * @param $x The starting x position of the section to fetch.
            * @param $y The starting y position of the section to fetch.
            * @param $blockWidth The width of the section to fetch.
            * @param $blockHeight The height of the section to fetch.
            * @returns An array that contains the pixel colors. 
            */
            public GetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number) : System.Array$1<UnityEngine.Color>
            public GetPixels32 () : System.Array$1<UnityEngine.Color32>
            /** Gets the pixel color data for a mipmap level as Color32 structs.
            * @param $colors An optional array to write the pixel data to.
            * @returns An array that contains the pixel colors. 
            */
            public GetPixels32 ($colors: System.Array$1<UnityEngine.Color32>) : System.Array$1<UnityEngine.Color32>
            public constructor ($deviceName: string, $requestedWidth: number, $requestedHeight: number, $requestedFPS: number)
            public constructor ($deviceName: string, $requestedWidth: number, $requestedHeight: number)
            public constructor ($deviceName: string)
            public constructor ($requestedWidth: number, $requestedHeight: number, $requestedFPS: number)
            public constructor ($requestedWidth: number, $requestedHeight: number)
            public constructor ()
        }
    }
    namespace UnityEngine.AudioSettings {
        interface AudioConfigurationChangeHandler
        { 
        (deviceWasChanged: boolean) : void; 
        Invoke?: (deviceWasChanged: boolean) => void;
        }
        var AudioConfigurationChangeHandler: { new (func: (deviceWasChanged: boolean) => void): AudioConfigurationChangeHandler; }
        class Mobile extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get muteState(): boolean;
            public static get stopAudioOutputOnMute(): boolean;
            public static set stopAudioOutputOnMute(value: boolean);
            public static get audioOutputStarted(): boolean;
            public static add_OnMuteStateChanged ($value: System.Action$1<boolean>) : void
            public static remove_OnMuteStateChanged ($value: System.Action$1<boolean>) : void
            public static StartAudioOutput () : void
            public static StopAudioOutput () : void
        }
    }
    namespace UnityEngine.Audio {
        /** Represents an audio resource asset that you can play through an AudioSource.
        */
        class AudioResource extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Object representing a group in the mixer.
        */
        class AudioMixerGroup extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            public get audioMixer(): UnityEngine.Audio.AudioMixer;
        }
        /** An implementation of IPlayable that controls an AudioClip.
        */
        class AudioClipPlayable extends System.ValueType implements UnityEngine.Playables.IPlayable, System.IEquatable$1<UnityEngine.Audio.AudioClipPlayable>
        {
            protected [__keep_incompatibility]: never;
            /** Creates an AudioClipPlayable in the PlayableGraph.
            * @param $graph The PlayableGraph that will contain the new AnimationLayerMixerPlayable.
            * @param $clip The AudioClip that will be added in the PlayableGraph.
            * @param $looping True if the clip should loop, false otherwise.
            * @returns A AudioClipPlayable linked to the PlayableGraph. 
            */
            public static Create ($graph: UnityEngine.Playables.PlayableGraph, $clip: UnityEngine.AudioClip, $looping: boolean) : UnityEngine.Audio.AudioClipPlayable
            public GetHandle () : UnityEngine.Playables.PlayableHandle
            public static op_Implicit ($playable: UnityEngine.Audio.AudioClipPlayable) : UnityEngine.Playables.Playable
            public static op_Explicit ($playable: UnityEngine.Playables.Playable) : UnityEngine.Audio.AudioClipPlayable
            public Equals ($other: UnityEngine.Audio.AudioClipPlayable) : boolean
            public GetClip () : UnityEngine.AudioClip
            public SetClip ($value: UnityEngine.AudioClip) : void
            public GetLooped () : boolean
            public SetLooped ($value: boolean) : void
            public IsChannelPlaying () : boolean
            public GetStartDelay () : number
            public GetPauseDelay () : number
            public Seek ($startTime: number, $startDelay: number) : void
            public Seek ($startTime: number, $startDelay: number, $duration: number) : void
        }
        /** The mode in which an AudioMixer should update its time.
        */
        enum AudioMixerUpdateMode
        { Normal = 0, UnscaledTime = 1 }
        /** AudioMixer asset.
        */
        class AudioMixer extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Routing target.
            */
            public get outputAudioMixerGroup(): UnityEngine.Audio.AudioMixerGroup;
            public set outputAudioMixerGroup(value: UnityEngine.Audio.AudioMixerGroup);
            /** How time should progress for this AudioMixer. Used during Snapshot transitions.
            */
            public get updateMode(): UnityEngine.Audio.AudioMixerUpdateMode;
            public set updateMode(value: UnityEngine.Audio.AudioMixerUpdateMode);
            /** The name must be an exact match.
            * @param $name Name of snapshot object to be returned.
            * @returns The snapshot identified by the name. 
            */
            public FindSnapshot ($name: string) : UnityEngine.Audio.AudioMixerSnapshot
            /** Connected groups in the mixer form a path from the mixer's master group to the leaves. This path has the format Master GroupChild of Master GroupGrandchild of Master Group, and so on. For example, in the hierarchy below, the group DROPS has the path MasterWATERDROPS.  To return only the group called DROPS, enter DROPS. The substring MasterAMBIENCE returns three groups, AMBIENCECROWD, AMBIENCEROAD, and AMBIENCE. The substring R would return both ROAD and RIVER.
            * @param $subPath Path sub-strings to match with.
            * @returns Groups in the mixer whose paths match the specified search path. 
            */
            public FindMatchingGroups ($subPath: string) : System.Array$1<UnityEngine.Audio.AudioMixerGroup>
            /** Transitions to a weighted mixture of the snapshots specified. This can be used for games that specify the game state as a continuum between states or for interpolating snapshots from a triangulated map location.
            * @param $snapshots The set of snapshots to be mixed.
            * @param $weights The mix weights for the snapshots specified.
            * @param $timeToReach Relative time after which the mixture should be reached from any current state.
            */
            public TransitionToSnapshots ($snapshots: System.Array$1<UnityEngine.Audio.AudioMixerSnapshot>, $weights: System.Array$1<number>, $timeToReach: number) : void
            /** Sets the value of the exposed parameter specified. When a parameter is exposed, it is not controlled by mixer snapshots. You can only change the parameter with this function.
            * @param $name The name of an exposed Audio Mixer group parameter. To expose a parameter, go to the Audio Mixer group's Inspector window, right click the parameter you want to expose, and choose Expose [parameter name] to script.
            * @param $value Use to set the exposed Audio Mixer group parameter to a new value.
            * @returns Returns false if the exposed parameter was not found or snapshots are currently being edited. 
            */
            public SetFloat ($name: string, $value: number) : boolean
            /** Resets an exposed parameter to its initial value.
            * @param $name Exposed parameter.
            * @returns Returns false if the parameter was not found or could not be set. 
            */
            public ClearFloat ($name: string) : boolean
            /** Returns the value of the exposed parameter specified. If the parameter doesn't exist the function returns false. Prior to calling SetFloat and after ClearFloat has been called on this parameter the value returned will be that of the current snapshot or snapshot transition.
            * @param $name Name of exposed parameter.
            * @param $value Return value of exposed parameter.
            * @returns Returns false if the exposed parameter specified doesn't exist. 
            */
            public GetFloat ($name: string, $value: $Ref<number>) : boolean
        }
        /** Object representing a snapshot in the mixer.
        */
        class AudioMixerSnapshot extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            public get audioMixer(): UnityEngine.Audio.AudioMixer;
            /** Performs an interpolated transition towards this snapshot over the time interval specified.
            * @param $timeToReach Relative time after which this snapshot should be reached from any current state.
            */
            public TransitionTo ($timeToReach: number) : void
        }
        /** An implementation of IPlayable that controls an audio mixer.
        */
        class AudioMixerPlayable extends System.ValueType implements UnityEngine.Playables.IPlayable, System.IEquatable$1<UnityEngine.Audio.AudioMixerPlayable>
        {
            protected [__keep_incompatibility]: never;
            public static Create ($graph: UnityEngine.Playables.PlayableGraph, $inputCount?: number, $normalizeInputVolumes?: boolean) : UnityEngine.Audio.AudioMixerPlayable
            public GetHandle () : UnityEngine.Playables.PlayableHandle
            public static op_Implicit ($playable: UnityEngine.Audio.AudioMixerPlayable) : UnityEngine.Playables.Playable
            public static op_Explicit ($playable: UnityEngine.Playables.Playable) : UnityEngine.Audio.AudioMixerPlayable
            public Equals ($other: UnityEngine.Audio.AudioMixerPlayable) : boolean
        }
        /** A PlayableBinding that contains information representing an AudioPlayableOutput.
        */
        class AudioPlayableBinding extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Creates a PlayableBinding that contains information representing an AudioPlayableOutput.
            * @param $key A reference to a UnityEngine.Object that acts as a key for this binding.
            * @param $name The name of the AudioPlayableOutput.
            * @returns Returns a PlayableBinding that contains information that is used to create an AudioPlayableOutput. 
            */
            public static Create ($name: string, $key: UnityEngine.Object) : UnityEngine.Playables.PlayableBinding
        }
        /** A IPlayableOutput implementation that will be used to play audio.
        */
        class AudioPlayableOutput extends System.ValueType implements UnityEngine.Playables.IPlayableOutput
        {
            protected [__keep_incompatibility]: never;
            /** Returns an invalid AudioPlayableOutput.
            */
            public static get Null(): UnityEngine.Audio.AudioPlayableOutput;
            /** Creates an AudioPlayableOutput in the PlayableGraph.
            * @param $graph The PlayableGraph that will contain the AnimationPlayableOutput.
            * @param $name The name of the output.
            * @param $target The AudioSource that will play the AudioPlayableOutput source Playable.
            * @returns A new AudioPlayableOutput attached to the PlayableGraph. 
            */
            public static Create ($graph: UnityEngine.Playables.PlayableGraph, $name: string, $target: UnityEngine.AudioSource) : UnityEngine.Audio.AudioPlayableOutput
            public GetHandle () : UnityEngine.Playables.PlayableOutputHandle
            public static op_Implicit ($output: UnityEngine.Audio.AudioPlayableOutput) : UnityEngine.Playables.PlayableOutput
            public static op_Explicit ($output: UnityEngine.Playables.PlayableOutput) : UnityEngine.Audio.AudioPlayableOutput
            public GetTarget () : UnityEngine.AudioSource
            public SetTarget ($value: UnityEngine.AudioSource) : void
            /** Gets the state of output playback when seeking.
            * @returns Returns true if the output plays when seeking. Returns false otherwise. 
            */
            public GetEvaluateOnSeek () : boolean
            /** Controls whether the output should play when seeking.
            * @param $value Set to true to play the output when seeking. Set to false to disable audio scrubbing on this output. Default is true.
            */
            public SetEvaluateOnSeek ($value: boolean) : void
        }
    }
    namespace UnityEngine.AudioClip {
        interface PCMReaderCallback
        { 
        (data: System.Array$1<number>) : void; 
        Invoke?: (data: System.Array$1<number>) => void;
        }
        var PCMReaderCallback: { new (func: (data: System.Array$1<number>) => void): PCMReaderCallback; }
        interface PCMSetPositionCallback
        { 
        (position: number) : void; 
        Invoke?: (position: number) => void;
        }
        var PCMSetPositionCallback: { new (func: (position: number) => void): PCMSetPositionCallback; }
    }
    namespace UnityEngine.Experimental.Audio {
        /** Provides access to the audio samples generated by Unity objects such as VideoPlayer.
        */
        class AudioSampleProvider extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
            /** Unique identifier for this instance.
            */
            public get id(): number;
            /** Index of the track in the object that created this provider.
            */
            public get trackIndex(): number;
            /** Object where this provider came from.
            */
            public get owner(): UnityEngine.Object;
            /** True if the object is valid.
            */
            public get valid(): boolean;
            /** The number of audio channels per sample frame.
            */
            public get channelCount(): number;
            /** The expected playback rate for the sample frames produced by this class.
            */
            public get sampleRate(): number;
            /** The maximum number of sample frames that can be accumulated inside the internal buffer before an overflow event is emitted.
            */
            public get maxSampleFrameCount(): number;
            /** Number of sample frames available for consuming with Experimental.Audio.AudioSampleProvider.ConsumeSampleFrames.
            */
            public get availableSampleFrameCount(): number;
            /** Number of sample frames that can still be written to by the sample producer before overflowing.
            */
            public get freeSampleFrameCount(): number;
            /** Then the free sample count falls below this threshold, the Experimental.Audio.AudioSampleProvider.sampleFramesAvailable event and associated native is emitted.
            */
            public get freeSampleFrameCountLowThreshold(): number;
            public set freeSampleFrameCountLowThreshold(value: number);
            /** Enables the Experimental.Audio.AudioSampleProvider.sampleFramesAvailable events.
            */
            public get enableSampleFramesAvailableEvents(): boolean;
            public set enableSampleFramesAvailableEvents(value: boolean);
            /** If true, buffers produced by ConsumeSampleFrames will get padded when silence if there are less available than asked for. Otherwise, the extra sample frames in the buffer will be left unchanged.
            */
            public get enableSilencePadding(): boolean;
            public set enableSilencePadding(value: boolean);
            /** Pointer to the native function that provides access to audio sample frames.
            */
            public static get consumeSampleFramesNativeFunction(): UnityEngine.Experimental.Audio.AudioSampleProvider.ConsumeSampleFramesNativeFunction;
            /** Release internal resources. Inherited from IDisposable.
            */
            public Dispose () : void
            public ConsumeSampleFrames ($sampleFrames: Unity.Collections.NativeArray$1<number>) : number
            public add_sampleFramesAvailable ($value: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler) : void
            public remove_sampleFramesAvailable ($value: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler) : void
            public add_sampleFramesOverflow ($value: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler) : void
            public remove_sampleFramesOverflow ($value: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesHandler) : void
            public SetSampleFramesAvailableNativeHandler ($handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesEventNativeFunction, $userData: System.IntPtr) : void
            /** Clear the native handler set with Experimental.Audio.AudioSampleProvider.SetSampleFramesAvailableNativeHandler.
            */
            public ClearSampleFramesAvailableNativeHandler () : void
            public SetSampleFramesOverflowNativeHandler ($handler: UnityEngine.Experimental.Audio.AudioSampleProvider.SampleFramesEventNativeFunction, $userData: System.IntPtr) : void
            /** Clear the native handler set with Experimental.Audio.AudioSampleProvider.SetSampleFramesOverflowNativeHandler.
            */
            public ClearSampleFramesOverflowNativeHandler () : void
        }
    }
    namespace UnityEngine.Experimental.Audio.AudioSampleProvider {
        interface ConsumeSampleFramesNativeFunction
        { 
        (providerId: number, interleavedSampleFrames: System.IntPtr, sampleFrameCount: number) : number; 
        Invoke?: (providerId: number, interleavedSampleFrames: System.IntPtr, sampleFrameCount: number) => number;
        }
        var ConsumeSampleFramesNativeFunction: { new (func: (providerId: number, interleavedSampleFrames: System.IntPtr, sampleFrameCount: number) => number): ConsumeSampleFramesNativeFunction; }
        interface SampleFramesHandler
        { 
        (provider: UnityEngine.Experimental.Audio.AudioSampleProvider, sampleFrameCount: number) : void; 
        Invoke?: (provider: UnityEngine.Experimental.Audio.AudioSampleProvider, sampleFrameCount: number) => void;
        }
        var SampleFramesHandler: { new (func: (provider: UnityEngine.Experimental.Audio.AudioSampleProvider, sampleFrameCount: number) => void): SampleFramesHandler; }
        interface SampleFramesEventNativeFunction
        { 
        (userData: System.IntPtr, providerId: number, sampleFrameCount: number) : void; 
        Invoke?: (userData: System.IntPtr, providerId: number, sampleFrameCount: number) => void;
        }
        var SampleFramesEventNativeFunction: { new (func: (userData: System.IntPtr, providerId: number, sampleFrameCount: number) => void): SampleFramesEventNativeFunction; }
    }
}
