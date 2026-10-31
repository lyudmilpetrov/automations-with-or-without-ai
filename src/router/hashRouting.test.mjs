import assert from 'node:assert/strict'
import test from 'node:test'
import { createRouteHref, getPathFromHash, shouldHandleNavigation } from './hashRouting.ts'

test('route links stay under the deployed base and retain their route on direct load', () => {
  for (const base of ['/', '/automations-with-or-without-ai/']) {
    for (const path of ['/', '/plan-my-workflow', '/explore-delivery-playbook']) {
      const url = new URL(createRouteHref(path, base), 'https://lyudmilpetrov.github.io/unrelated/')
      assert.equal(url.pathname, base)
      assert.equal(getPathFromHash(url.hash), path)
    }
  }
})

test('an empty or unrelated fragment selects home and route trailing slashes are normalized', () => {
  assert.equal(getPathFromHash(''), '/')
  assert.equal(getPathFromHash('#section'), '/')
  assert.equal(getPathFromHash('#/plan-my-workflow/'), '/plan-my-workflow')
  assert.equal(createRouteHref('/plan-my-workflow/', '/automations-with-or-without-ai/'), '/automations-with-or-without-ai/#/plan-my-workflow')
})

test('modified, middle-button, and already-handled clicks keep browser link behavior', () => {
  const click = { button: 0, defaultPrevented: false, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false }
  assert.equal(shouldHandleNavigation(click), true)
  for (const modifier of ['defaultPrevented', 'metaKey', 'ctrlKey', 'shiftKey', 'altKey']) {
    assert.equal(shouldHandleNavigation({ ...click, [modifier]: true }), false)
  }
  assert.equal(shouldHandleNavigation({ ...click, button: 1 }), false)
  assert.equal(shouldHandleNavigation({ ...click, button: 2 }), false)
})
