import { Injectable } from '@angular/core';
import { List, Map } from 'immutable';
import { render, ParseError } from 'katex';

import { JSONSchema, KatexData } from '../interfaces';

@Injectable()
export class KatexService {
  private delimiters = [
    { left: '$$', right: '$$', display: true },
    { left: '$', right: '$', display: false },
    // FIXME check if we need the ones below
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false },
  ];

   /**
   *
   * Receives text that can contain LaTeX formulas. The formulas will be
   * identified using `this.delimiters` and rendered inside the passed
   * HTMLElement
   *
   * NOTE: The HTMLElement is expected to have a single child and this
   * will be replaced by the HTML with formatted LaTeX
   *
   * @param {string} text - text to be formatted with LaTeX
   * @param {HTMLElement} el - the HTMLElement where the LaTeX should be rendered
   */
  renderMathInText(text: string, el: HTMLElement) {
    const data: Array<KatexData> = this.splitWithDelimiters(text, this.delimiters);

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
            `KaTeX auto-render: Failed to parse ${data[i].data} with ${e}`
          );
          fragment.appendChild(document.createTextNode(data[i].rawData));
          continue;
        }
        fragment.appendChild(span);
      }
    }

    el.replaceChild(fragment, el.childNodes[0]);

  }

  private findEndOfMath(delimiter: string, text: string, startIndex: number): number {
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

  private splitAtDelimiters(startData: Array<KatexData>, leftDelim: string, rightDelim: string, display: boolean): Array<KatexData> {
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
  }

  private splitWithDelimiters(text, delimiters): Array<KatexData> {
    let data = [{ type: 'text', data: text }];
    for (let i = 0; i < delimiters.length; i++) {
      const delimiter = delimiters[i];
      data = this.splitAtDelimiters(
        data, delimiter.left, delimiter.right,
        delimiter.display || false);
    }
    return data;
  }

}
