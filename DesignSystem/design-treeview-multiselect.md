# TreeView with MultiSelect — Acceptance Criteria

Companion spec for [design-treeview-multiselect.html](design-treeview-multiselect.html).

These are behaviour-level acceptance criteria for a React implementation. They describe
what a reviewer or tester should be able to observe and confirm — not how the component is
built internally. Each criterion is phrased so it can be checked by interacting with the
rendered component.

---

## 1. Tree structure & display

- **AC1.1** The tree renders hierarchical nodes. A node with children can be expanded or collapsed; a leaf node cannot.
- **AC1.2** Each node row shows, left to right: an expand/collapse caret (hidden for leaves), a node icon, the node label, a count, and a trailing overflow (`⋮`) menu button.
- **AC1.3** Child nodes are visually indented one level deeper than their parent.
- **AC1.4** Collapsing a node hides all of its descendants; expanding reveals its direct children in their previous expanded/collapsed state.
- **AC1.5** A selection summary is always visible, showing the count of selected nodes and the list of their labels (or "No nodes selected" when none).

## 2. Single-select behaviour

- **AC2.1** Clicking anywhere on a node row (other than the caret, checkbox, or menu) selects that node and deselects any previously selected node — only one node is selected.
- **AC2.2** A single-selected node is visually highlighted (light green row).
- **AC2.3** In single-select, no checkboxes are shown as checked; the selected node displays only the highlight, not a checked box.
- **AC2.4** Clicking the caret expands/collapses a node and does **not** change the current selection.
- **AC2.5** Clicking the `⋮` menu button does **not** change selection or selection mode (it is inert in the prototype, but must not mutate state).

## 3. Checkbox visibility rules

- **AC3.1** When nothing is selected, a non-selected row reveals its checkbox only while the pointer is over the checkbox itself (not when hovering elsewhere on the row).
- **AC3.2** Once at least one node is selected (single-select), every other non-selected row reveals its checkbox when the pointer hovers anywhere on that row.
- **AC3.3** In single-select, the selected node reveals its own checkbox only while the pointer is over the checkbox itself.
- **AC3.4** While multi-select is active, selected nodes persistently display their checked box without requiring hover, and non-selected rows reveal a checkbox on full-row hover.
- **AC3.5** The checkbox sits on the right-hand side of the row, immediately before the `⋮` menu button.
- **AC3.6** The empty (unchecked) checkbox has a transparent fill with a visible border; it is never shown with a solid background unless checked or indeterminate.

## 4. Entering multi-select

- **AC4.1** Clicking the checkbox of any node starts multi-select mode, even if no node was previously selected (the "first" node can be checked directly).
- **AC4.2** Starting multi-select from a checkbox begins a fresh selection containing only that node — any prior single-selection is cleared and is **not** carried into the multi-selection.
- **AC4.3** A node added to the multi-selection displays a checked box (green fill with a white tick).

## 5. Multi-select add / remove

- **AC5.1** While multi-select is active, clicking an unchecked node's checkbox adds it to the selection (its box becomes checked).
- **AC5.2** While multi-select is active, clicking a checked node's checkbox removes it from the selection.
- **AC5.3** The selection summary count and labels update immediately on every add/remove.

## 6. Exiting multi-select

- **AC6.1** Reducing the selection to a single remaining node keeps multi-select active; that last node **remains visibly checked** (it must not revert to an unchecked/deselected appearance).
- **AC6.2** Multi-select only exits when the selection reaches zero (the last checked node is unchecked).
- **AC6.3** Clicking a row body (single-select action) at any time collapses the state back to a single selection of that node and exits multi-select.

## 7. No parent → child cascade

- **AC7.1** Checking a parent node selects **only** that parent; its children are **not** automatically selected.
- **AC7.2** Unchecking a parent node removes only that parent from the selection; its children's selection state is unaffected.

## 8. Parent derived states (only while multi-select is active)

- **AC8.1** A parent that is **not** selected but has at least one selected descendant shows a grey box with a dash (indeterminate).
- **AC8.2** A parent that **is** selected and has some — but not all — of its direct children selected shows a green (primary) box with a dash.
- **AC8.3** A parent that **is** selected and has **all** of its direct children selected shows a green box with a double tick (two stacked check marks).
- **AC8.4** A parent that **is** selected with no selected children shows a green box with a single tick.
- **AC8.5** None of these parent derived states appear during single-select; they are only shown while multi-select is active.

## 9. Expand / collapse

- **AC9.1** Clicking a parent's caret toggles its expanded/collapsed state.
- **AC9.2** The caret's orientation reflects the current state (e.g. rotated when collapsed).
- **AC9.3** A leaf node shows no interactive caret.

## 10. Keyboard support

- **AC10.1** The tree is reachable via Tab, landing on a single row (roving focus — only one row is in the tab order at a time).
- **AC10.2** `ArrowDown` / `ArrowUp` move focus to the next / previous visible row.
- **AC10.3** `Home` / `End` move focus to the first / last visible row.
- **AC10.4** `ArrowRight` on a collapsed parent expands it; on an already-expanded parent it moves focus to the first child.
- **AC10.5** `ArrowLeft` on an expanded parent collapses it; otherwise it moves focus to the parent row.
- **AC10.6** `Enter` single-selects the focused row.
- **AC10.7** `Space` toggles the focused row's checkbox (starting or modifying the multi-selection), consistent with clicking the checkbox.
- **AC10.8** The focused row shows a visible focus indicator.
- **AC10.9** Keyboard focus reveals the row's checkbox so a keyboard-only user can see the target they are toggling.

## 11. Accessibility

- **AC11.1** The tree exposes a tree role and advertises that multiple selection is allowed.
- **AC11.2** Each row exposes a tree-item role.
- **AC11.3** A node's selected state is exposed to assistive technology and stays in sync with the visible selection.
- **AC11.4** A parent's expanded/collapsed state is exposed and stays in sync with the caret.

## 12. Visual styling (design fidelity)

- **AC12.1** Node icons use the secondary (purple) colour and are 24px square.
- **AC12.2** Row hover shows a light grey background; selection shows a light green background.
- **AC12.3** The checked box uses the primary green fill with a white tick; the indeterminate box uses a grey fill with a white dash.
- **AC12.4** All colours, spacing, radii, and typography come from the shared design tokens (no bespoke one-off values), so the component visually matches the rest of the design system.

---

## Out of scope for this prototype

- The `⋮` overflow menu has no actions wired up.
- Counts are illustrative only (all shown as `0`); real data binding is a separate concern.
- Persistence of selection/expansion across navigation or reload is not covered here.
