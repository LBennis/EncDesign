# TreeView with MultiSelect — Acceptance Criteria (V2)

Companion spec for [design-treeview-multiselect.html](design-treeview-multiselect.html).
Supersedes the parent and descendant sections of [V1](design-treeview-multiselect.md).

V2 changes how parent nodes are selected. V1 had a single checkbox per parent and showed an
"all-children-selected" icon inside it. V2 gives every parent a second control: the
**descendant selector**. It selects the parent and everything beneath it in one action, and
turning it off puts back whatever was selected before.

Sections of V1 not listed here are unchanged: tree structure (1), single-select (2),
entering multi-select (4), multi-select add/remove (5), expand/collapse (9), and the
out-of-scope notes. In this document, criteria marked **(Changed)** replace the V1 criterion
with the same number, and criteria marked **(New)** are additions.

---

## Summary of changes from V1

| Area | V1 | V2 |
| --- | --- | --- |
| Parent controls | One checkbox | Split control: descendant selector (left) + parent's own checkbox (right) |
| Selecting a whole branch | Not possible in one action; check each node | One click on the descendant selector selects the parent and all descendants |
| "All children selected" icon | Shown inside the parent's checkbox when the parent and all its children were checked | Removed from the checkbox; the icon now marks the descendant selector |
| Parent checkbox | Plain tick, or the all-children icon | Always the plain tick when checked |
| Indeterminate (dash) | Parent not selected, any child selected | Parent not selected, any **descendant at any depth** selected |
| Branch selected (selector on) | n/a | Parent's checkbox animates away; the selector remains alone as a green circle |
| Nodes selected by an ancestor | n/a | Shown as "held": rounded check, no row highlight, locked. Nested parents keep only their selector, as a held circle |
| Turning a branch off | n/a | Restores the selection that was underneath it |
| Keyboard | `Space` toggles checkbox | `Shift+Space` also toggles the descendant selector on parents |

---

## 3. Checkbox visibility rules

- **AC3.4 (Changed)** On a **leaf** row, the checkbox sits on the right-hand side, immediately before the `⋮` menu button. On a **parent** row, the descendant selector and checkbox sit there together as one split control: descendant selector on the left, checkbox on the right.
- **AC3.7 (New)** The descendant selector follows the same visibility rules as the checkbox (AC3.1–AC3.3). It is hidden at rest, appears on hover or keyboard focus, stays visible on a selected or indeterminate parent, and is always visible while multi-select is active. The two halves of the split control always appear and disappear together.
- **AC3.8 (New)** Hovering one half of the split control highlights only that half, so the user can tell they are two separate actions.

## 6. Exiting multi-select

- **AC6.2 (Changed)** Multi-select exits only when the selection reaches zero. The selection can reach zero by unchecking the last picked node, or by turning off the last descendant selector when nothing else is picked.
- **AC6.3 (Changed)** Clicking a row body at any time clears all picked nodes **and turns off every descendant selector**. The selection becomes that one node, and multi-select exits.

## 7. Parent checkbox: no cascade

- **AC7.1 (Unchanged)** Checking a parent's own checkbox selects **only** that parent. Its descendants are not selected.
- **AC7.2 (Unchanged)** Unchecking a parent's own checkbox removes only that parent. Its descendants are unaffected.
- **AC7.3 (New)** The descendant selector is the only control that selects a whole branch. The parent's checkbox never does.

## 8. Parent derived states (only while multi-select is active)

- **AC8.1 (Changed)** A parent that is **not** selected and has any **descendant at any depth** selected shows a grey checkbox with a white dash (indeterminate). This applies whether one, some or all of its descendants are selected.
- **AC8.2 (Changed)** A parent that is selected through its own checkbox shows the green checked box with the normal tick, regardless of how many of its children are selected.
- **AC8.3 (Removed)** The all-children icon no longer replaces the tick in the parent's checkbox. It appears only on the descendant selector (section 13).
- **AC8.4 (Unchanged)** None of the parent derived states appear during single-select.

## 13. Descendant selector (New)

Applies to parent nodes only. Leaf nodes have no descendant selector.

### Turning it on

- **AC13.1** Clicking a parent's descendant selector turns it on. The parent and **every** descendant, at every depth, become selected, including descendants inside collapsed branches.
- **AC13.2** If multi-select is not active, clicking a descendant selector starts multi-select. As with AC4.2, the new selection starts fresh: any previous single selection is cleared.
- **AC13.3** If multi-select is already active, turning a descendant selector on adds the branch to the existing selection. Nodes picked elsewhere in the tree stay selected.
- **AC13.4** More than one descendant selector can be on at once, on separate branches.
- **AC13.5** The selection summary count and labels include every node selected by the descendant selector.

### Held (covered) nodes

A node is **held** while a descendant selector on it or on one of its ancestors is on.

- **AC13.6** While its selector is on, the parent's own checkbox is not shown (AC12.6). The checkboxes of all its descendants are locked. Clicking them, or pressing `Space` on any of these rows, including the parent's, does nothing.
- **AC13.7** A nested parent inside a held branch loses its own checkbox, in the same way as the parent whose selector is on (AC12.6). Only its descendant selector remains, shown as on but locked. Clicking it does nothing.
- **AC13.8** Only the descendant selector that was turned on can be clicked to turn the branch off.

### Turning it off

- **AC13.9** Clicking the descendant selector again turns it off. Selection added only by that selector is removed.
- **AC13.10** Turning it off restores the selection underneath. Any node in the branch that was picked before the selector was turned on, including the parent itself, is still selected and shown with its normal checked state.
- **AC13.11** A nested descendant selector that was already on before an ancestor's selector was turned on is still on after the ancestor's selector is turned off.
- **AC13.12** If turning the selector off leaves nothing selected, multi-select exits (AC6.2).

## 10. Keyboard support

- **AC10.7 (Changed)** `Space` toggles the focused row's checkbox, the same as clicking it. On a held row (AC13.6) it does nothing.
- **AC10.10 (New)** `Shift+Space` on a parent row toggles that parent's descendant selector, the same as clicking it. On a leaf row, `Shift+Space` behaves like `Space`.
- **AC10.11 (New)** Keyboard focus on a parent row reveals the whole split control (AC3.7).

## 11. Accessibility

- **AC11.5 (New)** The descendant selector exposes a checkbox role with the accessible name "Select all descendants", and shows a matching tooltip on hover.
- **AC11.6 (New)** The descendant selector reports as checked when it is on and when it is held by an ancestor's selector. It reports as disabled while it is held.
- **AC11.7 (Changed from AC11.3)** Every selected node reports as selected to assistive technology, including nodes selected by a descendant selector.

## 12. Visual styling

- **AC12.3 (Changed)** The checked box uses the primary green fill with a white tick. The indeterminate box uses a grey fill with a white dash. On a parent's split control, a checked parent turns the borders of **both** halves primary.
- **AC12.5 (New)** The split control looks like two equal square segments joined by a shared divider. The left segment shows the all-children icon. At rest, both segments have the grey border of an unchecked checkbox.
- **AC12.6 (New)** When a descendant selector is on, the parent's own checkbox is removed from the row, leaving the descendant selector as the only control. It becomes a circle filled primary green with a white icon, the same size as a checkbox and in the same column as the held checks of the descendants beneath it. When the selector is turned off, the checkbox returns and the split control goes back to its two-segment shape.
- **AC12.6a (New)** The changeover is animated over roughly 0.3–0.4 seconds. When turning on, the checkbox shrinks to zero width while the descendant selector slides right into its place and eases into the circle. When turning off, the animation runs in reverse: the checkbox grows back and the selector slides left. Nested parents in the branch animate at the same time.
- **AC12.7 (New)** A held checkbox is fully rounded, with a light aqua fill, no border, and a primary green tick. A held nested parent shows only its descendant selector, as a circle of the same size in the same held styling (light aqua fill, no border, primary green icon). This lines it up with the other held checks in the branch.
- **AC12.8 (New)** Held descendant rows do **not** get the light green row highlight. Their checkbox alone shows that they are selected. The parent whose selector is on keeps its row highlight.
- **AC12.9 (New)** Held controls show a default (non-pointer) cursor, so they do not look clickable.

---

## Selection model (for implementers)

The behaviour above follows from keeping selection in two layers rather than one flat list:

- **Picked:** nodes the user chose directly with a row click or a checkbox.
- **Branches:** parents whose descendant selector is on.

A node is selected if it is picked, is a branch parent, or is inside a branch. Turning a
branch off removes only that branch from the second layer, so anything picked underneath
returns unchanged (AC13.10, AC13.11). A row click clears both layers (AC6.3).

## Known prototype discrepancies

- The intro text in the HTML still says the last remaining node "drops its checkbox". That
  contradicts AC6.1, which is unchanged in V2: the last node stays checked. The copy should
  be updated.
