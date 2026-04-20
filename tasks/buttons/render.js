function createButton({ label, variant, state, icon }) {
  return `
    <button class="btn ${variant.class} btn--${state}">
      ${variant.icon || icon
        ? `<span class="icon icon--${variant.icon || icon}"></span>`
        : ""
      }
      <span>${label}</span>
    </button>
  `;
}

function renderGrid() {
  const $grid = $("#grid");

  let html = "<table>";

  states.forEach(state => {
    variants.forEach(variant => {
      html += `<td>`;
      html += createButton({
        label: "Просмотреть",
        variant,
        state
      });

      html += `</td>`;
    });

    html += "</tr>";
  });

  html += "</tbody></table>";

  $grid.html(html);
}

function renderPanel() {
  const $panel = $(".panel-buttons");

  let html = "";

  panelActions.forEach(action => {
    html += createButton({
      label: actions[action],
      variant: variants[0],
      state: "base",
      icon: icons[action]
    });
  });

  $panel.html(html);
}

$(document).ready(function () {
  renderGrid();
  renderPanel();
});