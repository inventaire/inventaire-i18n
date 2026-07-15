import { it, describe } from 'node:test'
import { convertMarkdown } from '../scripts/build/lib/convert_markdown.js'
import assert from 'node:assert'

describe('markdown', () => {
  it('should support an internal link', () => {
    const value = "hello [foo](/bar)"
    assert.equal(convertMarkdown(value), 'hello <a href="/bar" class="link" rel="noopener">foo</a>')
  })

  it('should support an external internal link', () => {
    const value = "hello [foo](https://example.org/bar)"
    assert.equal(convertMarkdown(value), 'hello <a href="https://example.org/bar" class="link" target="_blank" rel="noopener">foo</a>')
  })

  it('should support bold', () => {
    const value = "hello **foo**"
    assert.equal(convertMarkdown(value), 'hello <strong>foo</strong>')
  })

  it('should support italic', () => {
    const value = "hello *foo*"
    assert.equal(convertMarkdown(value), 'hello <em>foo</em>')
  })

  it('should support italic within bold', () => {
    const value = "hello **this *foo* bar**"
    assert.equal(convertMarkdown(value), 'hello <strong>this <em>foo</em> bar</strong>')
  })

  it('should support bold in italic', () => {
    const value = "hello *this **foo** bar*"
    assert.equal(convertMarkdown(value), 'hello <em>this <strong>foo</strong> bar</em>')
  })

  it('should support newline breaks', () => {
    const value = "hello\nfoo"
    assert.equal(convertMarkdown(value), 'hello<br />foo')
  })
})
