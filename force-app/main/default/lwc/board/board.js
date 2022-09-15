import { LightningElement, api } from 'lwc';
import loadGameProperties from '@salesforce/apex/lwcBoard.loadGameProperties';

export default class Board extends LightningElement {
    @api recordId;

    gameProperties;
    gamePropertiesGrid;
    inited = false;
    startingPosition = 20; // free parking

    connectedCallback() {
        this.init();
    }

    async init() {
        try {
            this.gameProperties = await loadGameProperties({ gameId : this.recordId });
            this.gamePropertiesGrid = [];

            let propIdx = this.startingPosition;
            let colIdx = 0;
            let rowIdx = 0;
            let gamePropertiesGridRow = null;

            do {
                let currentProperty = this.gameProperties[propIdx];
                if(colIdx === 0) gamePropertiesGridRow = [];
                let gridProp = {
                    width: 200,
                    height: 200,
                    renderSpace: false,
                    rotate: 0

                };

                // height + width
                if(propIdx % 10 === 0) {
                    // it's a corner
                    gridProp.width = 250;
                    gridProp.height = 250;
                    gridProp.renderSpace = true;
                }
                else if(rowIdx === 0 || rowIdx === 10 || colIdx === 0 || colIdx === 10) {
                    gridProp.height = 250;
                    gridProp.renderSpace = true;
                }

                // rotate
                if(rowIdx === 0) {
                    gridProp.rotate = 180;
                }
                else if(colIdx === 0) {
                    gridProp.rotate = 90;
                }
                else if(colIdx === 10) {
                    gridProp.rotate = -90;
                }

                gamePropertiesGridRow.push(gridProp);

                if(rowIdx === 0) {
                    gridProp.property = currentProperty.Property__r;
                    propIdx++;
                }
                else if(rowIdx === 10) {
                    gridProp.property = currentProperty.Property__r;
                    propIdx--;
                }
                if(colIdx === 10) {
                    gridProp.property = currentProperty.Property__r;
                    propIdx = this.startingPosition - (rowIdx + 1);
                    if(rowIdx === 9) {
                        propIdx = this.startingPosition - 10;
                    }
                }
                if(colIdx === 0 && rowIdx !== 0 && rowIdx !== 10) {
                    gridProp.property = currentProperty.Property__r;
                    propIdx = this.startingPosition + 10 + (rowIdx);
                }
                
                ///if(propIdx > 39) propIdx = 0;

                colIdx++;

                if(colIdx > 10) {
                    this.gamePropertiesGrid.push(gamePropertiesGridRow);
                    rowIdx++;
                    colIdx = 0;
                }

            } while(rowIdx < 11);

                      
        }
        catch(error) {
            console.log(error);
        }
        finally {
            console.log('Board component initialized.');
            this.inited = true;
        }
    }


}