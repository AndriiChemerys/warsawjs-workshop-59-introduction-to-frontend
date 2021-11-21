import { colors } from 'src/data';      
import { Card } from 'src/card';        
import { Board } from 'src/board';      
import { findElement } from 'src/utils';                                                                           
import 'src/index.scss';                                                        
                                                                                                      
const boardTemplate = findElement(document, '#board-template');                                   
const  slotTemplate = findElement(document, '#slot-template');                                    
const  cardTemplate = findElement(document, '#card-template');                                    
                                                                                              
function run() {                        
  console.log('Memory Game');           
  const selectedColors = colors.slice(0, 12);    
  console.log('selectedColors', selectedColors);    
                                        
  const board = new Board({ template: boardTemplate, slotTemplate });    
                                        
  selectedColors.forEach(({ color, labelColor }) => {    
    const card = new Card({ color, labelColor, template: cardTemplate });    
    board.addCard(card);                
    const card2 = new Card({ color, labelColor, template: cardTemplate });    
    board.addCard(card2);                
  });                                   
                                        
  document.body.prepend(board.element);           
}                                                 
                                            
run();