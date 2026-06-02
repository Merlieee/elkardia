"use client"

import { Agentation } from "agentation"

// Visual feedback toolbar for AI coding agents. Renders only in development and
// streams annotations to the local Agent Sync server (the agentation-mcp server,
// which listens on :4747), so the agent can read them via the MCP tools.
export function AgentationDev() {
  if (process.env.NODE_ENV !== "development") return null
  return <Agentation endpoint="http://localhost:4747" />
}
