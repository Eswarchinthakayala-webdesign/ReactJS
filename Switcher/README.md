 Start
   ↓
Initialize state `sw = false` (Dark Mode)
   ↓
Render UI:
   - Display text: "Dark"
   - Render input field (key="dark")
   - Show "Switch" button
   ↓
User clicks "Switch" button
   ↓
Toggle `sw` state (`sw = !sw`)
   ↓
Re-render UI:
   - If `sw = true` → Show "Light", reset input (key="light")
   - If `sw = false` → Show "Dark", reset input (key="dark")
   ↓
Repeat on each button click
