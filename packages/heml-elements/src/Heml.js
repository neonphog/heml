import HEML, { createElement, correctBreakpoint } from '@heml/utils' // eslint-disable-line no-unused-vars
import { isUndefined } from 'lodash'

export default createElement('heml', {
  unique: true,
  parent: [],
  children: [ 'head', 'body' ],
  attrs: [ 'breakpoint' ],
  defaultAttrs: {
    'lang': 'en',
    'xmlns': 'http://www.w3.org/1999/xhtml',
    'xmlns:v': 'urn:schemas-microsoft-com:vml',
    'xmlns:o': 'urn:schemas-microsoft-com:office:office'
  },

  preRender ({ $ }) {
    let breakpoint = '600px'
    $.findNodes('heml').forEach($heml => {
      breakpoint = $heml.attr('breakpoint')
      $heml.attr('breakpoint', null)
    })
    breakpoint = correctBreakpoint(breakpoint)
    $.findNodes('column').forEach($column => {
      if (isUndefined($column.attr('breakpoint'))) {
        $column.attr('breakpoint', breakpoint)
      }
    })
  },

  render (attrs, contents) {
    return ([
      `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`,
      <html {...attrs}>
        {contents}
      </html>])
  }
})
