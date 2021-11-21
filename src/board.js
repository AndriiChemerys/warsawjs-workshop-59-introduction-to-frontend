import { cloneTemplateContent } from 'src/utils';                                                                    
                                                                                        
export class Board {                                                                  
  constructor({ template, slotTemplate }) {                                           
    this.element = cloneTemplateContent(template);                                
    this.slotTemplate = slotTemplate;                                                               
  }                                                                                                 
                                                                                                      
  addCard(card) {                                                                                   
    const slotElement = cloneTemplateContent(this.slotTemplate);                                
    slotElement.appendChild(card.element);                                
    this.element.appendChild(slotElement);                                
  }                                
}