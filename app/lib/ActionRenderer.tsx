"use client";
import "@dialectlabs/blinks/index.css";
import { useState, useEffect } from "react";
import { Action, Blink, ActionsRegistry } from "@dialectlabs/blinks";
import { useAction } from "@dialectlabs/blinks/react";
import { conn } from "./Solana";
import "./ActionCustomStyle.css";

function ActionRenderer({ ActionUrl }: { ActionUrl: string }) {
  const reg = ActionsRegistry.getInstance();
  const [actionState, setactionState] = useState<Action | null>(null);
  const { action } = useAction(ActionUrl, { rpcUrlOrConnection: conn });
  useEffect(() => {
    setactionState(action);
  }, [action]);
  return actionState ? (
    <>
      <Blink
        action={actionState as Action}
        websiteText={new URL(ActionUrl).hostname}
        stylePreset="custom"
      />
    </>
  ) : null;
}

export default ActionRenderer;
