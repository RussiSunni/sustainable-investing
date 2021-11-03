/*
 * Ref: Find parents
 * https://stackoverflow.com/a/64035024
 */
function getParent(el, selector) {
  let parent_container = el;
  do {
    parent_container = parent_container.parentNode;
  } while (
    !parent_container.matches(selector) &&
    parent_container !== document.body
  );

  return parent_container === document.body ? null : parent_container;
}

function showModuleAnswerFeedback(el) {
  const parent = getParent(el, '.answer');
  if (!parent) return;

  parent.querySelector('.option').classList.add('hidden');

  // check value
  if (el.value === 'true') {
    parent.querySelector('.correct').classList.remove('hidden');
  }

  if (el.value === 'false') {
    parent.querySelector('.incorrect').classList.remove('hidden');
  }
}

function showSubmoduleAnswerFeedback(el) {
  const parent = getParent(el, '.answer');
  if (!parent) return;

  parent.querySelector('.option').classList.add('hidden');
  parent.querySelector('.feedback').classList.remove('hidden');
}
