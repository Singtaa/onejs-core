import { Application, DeviceType, Rendering, RuntimePlatform, Screen, SystemInfo, SystemLanguage } from "UnityEngine";

export function logSystemInfo() {
    console.log(`Unity Version: ${Application.unityVersion}`);
    console.log(`Platform: ${RuntimePlatform[Application.platform]}`);
    console.log(`Language: ${SystemLanguage[Application.systemLanguage]}`);
    console.log(`Operating System: ${SystemInfo.operatingSystem}`);
    console.log(`Device Model: ${SystemInfo.deviceModel}`);
    console.log(`Device Type: ${DeviceType[SystemInfo.deviceType]}`);
    console.log(`Processor: ${SystemInfo.processorType} ({SystemInfo.processorCount} cores)`);
    console.log(`RAM: ${SystemInfo.systemMemorySize} MB`);
    console.log(`GPU: ${SystemInfo.graphicsDeviceName}`);
    console.log(`GPU Memory: ${SystemInfo.graphicsMemorySize} MB`);
    console.log(`Graphics API: ${Rendering.GraphicsDeviceType[SystemInfo.graphicsDeviceType]}`);
    console.log(`Screen: ${Screen.currentResolution.width}x${Screen.currentResolution.height} @ ${Screen.currentResolution.refreshRateRatio}Hz`);
    console.log(`DPI: ${Screen.dpi}`);
}