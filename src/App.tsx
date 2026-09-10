import type { Content } from "vanilla-jsoneditor";

import JSONEditor from "./JsonEditor";

const STORAGE_KEY = "jsonformatter:content";

const SAMPLE = `{
  "name": "json formatter",
  "pretty": true,
  "tags": ["format", "validate", "repair"],
  "nested": { "count": 3, "nullable": null }
}`;

// Uncontrolled on purpose: the editor owns the text, we only mirror it to storage.
const initialContent: Content = {
  text: localStorage.getItem(STORAGE_KEY) ?? SAMPLE,
};

// ponytail: writes on every keystroke; debounce if huge documents ever feel laggy.
const persist = (content: Content) =>
  localStorage.setItem(
    STORAGE_KEY,
    "text" in content ? content.text : JSON.stringify(content.json, null, 2)
  );

export default function App() {
  return (
    <JSONEditor
      className="jsoneditor"
      content={initialContent}
      onChange={persist}
      indentation={2}
      askToFormat={false}
    />
  );
}
