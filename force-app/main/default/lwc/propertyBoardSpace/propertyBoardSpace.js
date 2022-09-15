import { LightningElement, api } from 'lwc';
import getPropertyById from '@salesforce/apex/lwcProperty.getPropertyById';

export default class PropertyBoardSpace extends LightningElement {

    @api recordId;
    @api propertyRecord;
    @api height = 250;
    @api width = 200;
    @api rotate = 0;
    inited = false;
    titleStyle = '';

    connectedCallback() {
        this.init();
    }

    renderedCallback() {
       
        let card = this.template.querySelector('.card');
        if(card === null) return;

        let colorBox = this.template.querySelector('.color-box');
        if(colorBox === null) return;

        let propertyName = this.template.querySelector('.name');
        if(propertyName === null) return;

        let propertyCost = this.template.querySelector('.cost');
        if(propertyCost === null) return;

        colorBox.style.display = 'none';

        if(this.propertyRecord.RecordType.Name === 'Property') {
            colorBox.style.backgroundColor = this.propertyRecord.Color__c;
            colorBox.style.display = 'block';
        }
        if(
            this.propertyRecord.RecordType.Name === 'Community Chest' ||
            this.propertyRecord.RecordType.Name === 'Chance' ||
            this.propertyRecord.RecordType.Name === 'Railroad' ||
            this.propertyRecord.RecordType.Name === 'Utility' ||
            this.propertyRecord.RecordType.Name === 'Tax'
        ) {
            propertyName.style.height = '75%';
        }

        if(
            this.propertyRecord.RecordType.Name === 'Community Chest' ||
            this.propertyRecord.RecordType.Name === 'Chance' ||
            this.propertyRecord.Position__c % 10 === 0
        ) {
            propertyCost.style.display = 'none';
            propertyName.style.height = '100%';
        }

        if(this.propertyRecord.Position__c % 10 === 0) {
            card.style.width = '250px';
        }
        
    }

    async init() {
        try {
            if(this.propertyRecord === undefined) {
                this.propertyRecord = await getPropertyById({ recordId : this.recordId });            
            }
        }
        catch(error) {
            console.log(error);
        }
        finally {
            console.log('Property Board Space component initialized.');
            this.inited = true;
        }

        

    }


}