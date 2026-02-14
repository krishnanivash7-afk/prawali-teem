import { useState, useCallback, useEffect } from "react";

declare global {
  interface Window {
    vapiSDK?: any;
  }
}

const VAPI_PUBLIC_KEY = "c19b7909-74f0-459f-a23c-ff4cf3d9cbe6";
const VAPI_ASSISTANT_ID = "517b20fd-d5b4-40b6-a9f8-57f6d1580f1c";

export function useVapi() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [vapiInstance, setVapiInstance] = useState<any>(null);

  useEffect(() => {
    // Load Vapi script if not present
    if (!document.getElementById("vapi-script")) {
      const script = document.createElement("script");
      script.id = "vapi-script";
      script.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/vapi-web.min.js";
      script.async = true;
      script.onload = () => {
        if (window.vapiSDK) {
          const vapi = new window.vapiSDK.Vapi(VAPI_PUBLIC_KEY);
          setVapiInstance(vapi);
        }
      };
      document.body.appendChild(script);
    } else if (window.vapiSDK && !vapiInstance) {
        const vapi = new window.vapiSDK.Vapi(VAPI_PUBLIC_KEY);
        setVapiInstance(vapi);
    }
  }, [vapiInstance]);

  useEffect(() => {
    if (!vapiInstance) return;

    vapiInstance.on("call-start", () => setIsSessionActive(true));
    vapiInstance.on("call-end", () => setIsSessionActive(false));
    vapiInstance.on("error", (e: any) => {
      console.error("Vapi Error:", e);
      setIsSessionActive(false);
    });

    return () => {
      // Cleanup listeners if needed, though Vapi SDK handles this mostly
    };
  }, [vapiInstance]);

  const startCall = useCallback(() => {
    if (!vapiInstance) {
      console.error("Vapi SDK not initialized");
      return;
    }
    vapiInstance.start(VAPI_ASSISTANT_ID);
  }, [vapiInstance]);

  const stopCall = useCallback(() => {
    if (!vapiInstance) return;
    vapiInstance.stop();
  }, [vapiInstance]);

  return { isSessionActive, startCall, stopCall, isReady: !!vapiInstance };
}
