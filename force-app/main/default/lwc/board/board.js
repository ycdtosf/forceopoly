import { LightningElement, api } from 'lwc';
import loadGameProperties from '@salesforce/apex/lwcBoard.loadGameProperties';

export default class Board extends LightningElement {
    @api recordId;

    gameProperties;
    inited = false;

    connectedCallback() {
        this.init();
    }

    async init() {
        try {
            this.gameProperties = await loadGameProperties({ gameId : this.recordId });            
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