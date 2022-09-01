import { LightningElement, api } from 'lwc';
import getPropertyById from '@salesforce/apex/lwcProperty.getPropertyById';

export default class Property extends LightningElement {

    @api recordId;
    @api propertyRecord;
    inited = false;
    titleStyle = '';    

    get mortgageValue() {
        return this.propertyRecord.PropertyCost__c / 2;
    }

    connectedCallback() {
        this.init();
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
            console.log('Property component initialized.');
            this.inited = true;
        }
        this.titleStyle = 'background-color: ' + this.propertyRecord.Color__c + ';';
    }


}