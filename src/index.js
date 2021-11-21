import { colors } from 'src/data/colors';
import { findElement , cloneTemplateContent} from 'src/utils';
import 'src/index.scss';

const boardTemplate = findElement(document, '#board-template');
const slotTemplate = findElement(document, '#slot-template');
const cardTemplate = findElement(document, '#card-template');

function run() {
  console.log('Memory Game');
  const selectedColors = colors.slice(0,12);
  console.log('colors', selectedColors);

  // console.log('boardTemplate', boardTemplate);
  // console.log('slotTemplate', slotTemplate);
  // console.log('cardTemplate', cardTemplate);

  const boardElement = cloneTemplateContent(boardTemplate);

  // console.log('boardElement', boardElement);
  // console.log('slotElement', slotElement);
  // console.log('cardElement', cardElement);

  document.body.prepend(boardElement);

  selectedColors.forEach(({color, labelColor})=>{
  const slotElement = cloneTemplateContent(slotTemplate);
  const cardElement = cloneTemplateContent(cardTemplate);

    // console.log('color', color);
    // console.log('labelColor', labelColor);
    cardElement.textContent=color;
    cardElement.style.backgroundColor=color;
    cardElement.style.color=labelColor;
    boardElement.appendChild(slotElement);
    slotElement.appendChild(cardElement);

  })
}

run();
