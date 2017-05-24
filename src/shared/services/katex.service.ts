import { Injectable } from '@angular/core';
import { List, Map } from 'immutable';
import { render, ParseError, KatexOptions } from 'katex';

import { JSONSchema } from '../interfaces';

@Injectable()
export class KatexService {
  defaultOptions = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\[', right: '\\]', display: true },
      { left: '\\(', right: '\\)', display: false },
      // LaTeX uses this, but it ruins the display of normal `$` in text:
      // {left: '$', right: '$', display: false},
    ],

    ignoredTags: [
      'script', 'noscript', 'style', 'textarea', 'pre', 'code',
    ],
  };
  delimiters: any = this.defaultOptions.delimiters;

  // constructor(delimiters: any) {
  //   if (delimiters) {
  //     this.delimiters = delimiters;
  //   } else {
  //     this.delimiters = this.defaultOptions.delimiters;
  //   }
  // }

  renderMathInElement(elem) {
    if (!elem) {
        throw new Error('No element provided to render');
    }

    // options = extend({}, defaultOptions, options);

    this.renderElem(elem, this.defaultOptions.delimiters, this.defaultOptions.ignoredTags);
  };


renderElem(elem, delimiters, ignoredTags) {
    for (let i = 0; i < elem.childNodes.length; i++) {
        const childNode = elem.childNodes[i];
        if (childNode.nodeType === 3) {
            // Text node
            const frag = this.renderMathInText(childNode.textContent);
            i += frag.childNodes.length - 1;
            elem.replaceChild(frag, childNode);
        } else if (childNode.nodeType === 1) {
            // Element node
            const shouldRender = ignoredTags.indexOf(
                childNode.nodeName.toLowerCase()) === -1;

            if (shouldRender) {
                this.renderElem(childNode, delimiters, ignoredTags);
            }
        }
        // Otherwise, it's something else, and ignore it.
    }
};

  renderMathInText(text: string) {
    const data: Array<{
      data: string,
      rawData?: string,
      display?: boolean,
      type: string }> = this._splitWithDelimiters(text, this.delimiters);

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < data.length; i++) {
      if (data[i].type === 'text') {
        fragment.appendChild(document.createTextNode(data[i].data));
      } else {
        const span = document.createElement('span');
        const math = data[i].data;
        try {
          render(math, span, {
            displayMode: data[i].display,
          });
        } catch (e) {
          if (!(e instanceof ParseError)) {
            throw e;
          }
          console.error(
            'KaTeX auto-render: Failed to parse `' + data[i].data +
            '` with ',
            e
          );
          fragment.appendChild(document.createTextNode(data[i].rawData));
          continue;
        }
        fragment.appendChild(span);
      }
    }

    return fragment;

  }

  findEndOfMath(delimiter, text, startIndex) {
    // Adapted from
    // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
    let index = startIndex;
    let braceLevel = 0;

    const delimLength = delimiter.length;

    while (index < text.length) {
      const character = text[index];

      if (braceLevel <= 0 &&
        text.slice(index, index + delimLength) === delimiter) {
        return index;
      } else if (character === '\\') {
        index++;
      } else if (character === '{') {
        braceLevel++;
      } else if (character === '}') {
        braceLevel--;
      }

      index++;
    }

    return -1;
  };

  splitAtDelimiters(startData, leftDelim, rightDelim, display) {
    const finalData = [];

    for (let i = 0; i < startData.length; i++) {
      if (startData[i].type === 'text') {
        const text = startData[i].data;

        let lookingForLeft = true;
        let currIndex = 0;
        let nextIndex;

        nextIndex = text.indexOf(leftDelim);
        if (nextIndex !== -1) {
          currIndex = nextIndex;
          finalData.push({
            type: 'text',
            data: text.slice(0, currIndex),
          });
          lookingForLeft = false;
        }

        while (true) {
          if (lookingForLeft) {
            nextIndex = text.indexOf(leftDelim, currIndex);
            if (nextIndex === -1) {
              break;
            }

            finalData.push({
              type: 'text',
              data: text.slice(currIndex, nextIndex),
            });

            currIndex = nextIndex;
          } else {
            nextIndex = this.findEndOfMath(
              rightDelim,
              text,
              currIndex + leftDelim.length);
            if (nextIndex === -1) {
              break;
            }

            finalData.push({
              type: 'math',
              data: text.slice(
                currIndex + leftDelim.length,
                nextIndex),
              rawData: text.slice(
                currIndex,
                nextIndex + rightDelim.length),
              display: display,
            });

            currIndex = nextIndex + rightDelim.length;
          }

          lookingForLeft = !lookingForLeft;
        }

        finalData.push({
          type: 'text',
          data: text.slice(currIndex),
        });
      } else {
        finalData.push(startData[i]);
      }
    }

    return finalData;
  };

  _splitWithDelimiters(text, delimiters): Array<{ data: string, rawData?: string, display?: boolean, type: string }> {
    let data = [{ type: 'text', data: text }];
    for (let i = 0; i < delimiters.length; i++) {
      const delimiter = delimiters[i];
      data = this.splitAtDelimiters(
        data, delimiter.left, delimiter.right,
        delimiter.display || false);
    }
    return data;
  };

}
